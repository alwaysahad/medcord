import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { randomUUID } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new sqlite3.Database(join(__dirname, 'db/medical.db'));
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET || 'your-super-secret-jwt-key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  const { email, password, name, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = randomUUID();

  db.run(
    'INSERT INTO users (id, email, password, name, role) VALUES (?, ?, ?, ?, ?)',
    [id, email, hashedPassword, name, role],
    (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const token = jwt.sign({ id }, process.env.JWT_SECRET || 'your-super-secret-jwt-key');
      res.json({ token });
    }
  );
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'your-super-secret-jwt-key');
    res.json({ token });
  });
});

// Appointments routes
app.get('/api/appointments', authenticateToken, (req, res) => {
  db.all(
    'SELECT * FROM appointments WHERE patient_id = ?',
    [req.user.id],
    (err, appointments) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json(appointments);
    }
  );
});

app.post('/api/appointments', authenticateToken, (req, res) => {
  const { doctorName, date, type, status } = req.body;
  const id = randomUUID();

  db.run(
    'INSERT INTO appointments (id, patient_id, doctor_name, date, type, status) VALUES (?, ?, ?, ?, ?, ?)',
    [id, req.user.id, doctorName, date, type, status],
    (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      db.get('SELECT * FROM appointments WHERE id = ?', [id], (err, appointment) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }
        res.json(appointment);
      });
    }
  );
});

// Messages routes
app.get('/api/messages/:roomId', authenticateToken, (req, res) => {
  db.all(
    `SELECT m.*, u.name as sender_name 
     FROM messages m 
     JOIN users u ON m.sender_id = u.id 
     WHERE m.room_id = ?
     ORDER BY m.created_at DESC 
     LIMIT 50`,
    [req.params.roomId],
    (err, messages) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json(messages);
    }
  );
});

// Support routes
app.post('/api/support/tickets', authenticateToken, (req, res) => {
  const { subject, message, category } = req.body;
  const id = randomUUID();

  db.run(
    'INSERT INTO support_tickets (id, user_id, subject, message, category, status) VALUES (?, ?, ?, ?, ?, ?)',
    [id, req.user.id, subject, message, category, 'open'],
    (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      db.get('SELECT * FROM support_tickets WHERE id = ?', [id], (err, ticket) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }
        res.json(ticket);
      });
    }
  );
});

app.get('/api/support/tickets', authenticateToken, (req, res) => {
  db.all(
    'SELECT * FROM support_tickets WHERE user_id = ?',
    [req.user.id],
    (err, tickets) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json(tickets);
    }
  );
});

// Real-time messaging
io.on('connection', (socket) => {
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
  });

  socket.on('send-message', (message) => {
    const messageId = randomUUID();
    
    db.run(
      'INSERT INTO messages (id, content, sender_id, room_id) VALUES (?, ?, ?, ?)',
      [messageId, message.content, message.senderId, message.roomId],
      (err) => {
        if (err) {
          console.error('Error saving message:', err);
          return;
        }
        
        db.get(
          `SELECT m.*, u.name as sender_name 
           FROM messages m 
           JOIN users u ON m.sender_id = u.id 
           WHERE m.id = ?`,
          [messageId],
          (err, newMessage) => {
            if (err) {
              console.error('Error retrieving message:', err);
              return;
            }
            io.to(message.roomId).emit('receive-message', newMessage);
          }
        );
      }
    );
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
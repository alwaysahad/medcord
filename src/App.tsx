import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import MedicalRecords from './pages/MedicalRecords';
import Permissions from './pages/Permissions';
import ShareRecords from './pages/ShareRecords';
import Appointments from './pages/Appointments';
import Messages from './pages/Messages';
import Support from './pages/Support';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/share-records" element={<ShareRecords />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
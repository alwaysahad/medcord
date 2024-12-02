import React from 'react';
import { Calendar, Clock, User, Video, MapPin } from 'lucide-react';

const appointments = [
  {
    id: 1,
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Primary Care',
    date: '2024-03-20',
    time: '10:00 AM',
    type: 'In-Person',
    location: 'Central Hospital',
    status: 'upcoming'
  },
  {
    id: 2,
    doctor: 'Dr. Michael Chen',
    specialty: 'Cardiology',
    date: '2024-03-25',
    time: '2:30 PM',
    type: 'Virtual',
    status: 'upcoming'
  }
];

export default function Appointments() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Appointments</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Manage your upcoming medical appointments</p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold dark:text-white">Upcoming Appointments</h2>
            <button className="btn-primary">Schedule New</button>
          </div>

          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium dark:text-white">{appointment.doctor}</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{appointment.specialty}</div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      {appointment.type === 'Virtual' ? (
                        <Video className="h-4 w-4 text-green-600" />
                      ) : (
                        <MapPin className="h-4 w-4 text-blue-600" />
                      )}
                      <span>{appointment.type === 'Virtual' ? 'Virtual Consultation' : appointment.location}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {appointment.type === 'Virtual' && (
                      <button className="btn-primary">Join Call</button>
                    )}
                    <button className="btn-secondary">Reschedule</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
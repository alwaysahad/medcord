import React from 'react';
import { Clock, User, Shield } from 'lucide-react';

const accessLogs = [
  {
    action: 'Viewed Medical Record',
    user: 'Dr. Sarah Johnson',
    timestamp: '2 hours ago',
    status: 'authorized',
  },
  {
    action: 'Downloaded Lab Results',
    user: 'Dr. Michael Chen',
    timestamp: '5 hours ago',
    status: 'authorized',
  },
  {
    action: 'Requested Access',
    user: 'Dr. Emily Wilson',
    timestamp: '1 day ago',
    status: 'pending',
  },
];

export default function AccessLog() {
  return (
    <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/50 p-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Recent Access Log</h2>
      <div className="space-y-4">
        {accessLogs.map((log, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700/50"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${
                log.status === 'authorized' ? 'bg-green-100 dark:bg-green-900/50' : 'bg-yellow-100 dark:bg-yellow-900/50'
              }`}>
                <Shield className={`h-5 w-5 ${
                  log.status === 'authorized' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                }`} />
              </div>
              <div>
                <p className="font-medium dark:text-white">{log.action}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <User className="h-4 w-4" />
                  <span>{log.user}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{log.timestamp}</span>
                </div>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              log.status === 'authorized' 
                ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400' 
                : 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-400'
            }`}>
              {log.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
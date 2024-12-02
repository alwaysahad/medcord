import React from 'react';
import { User, Clock, Shield, X } from 'lucide-react';

const permissions = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Primary Care Physician',
    hospital: 'Central Hospital',
    access: 'Full Access',
    granted: '2024-01-15',
    expires: '2024-12-31',
    status: 'active',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Cardiologist',
    hospital: 'Heart Care Center',
    access: 'Limited Access',
    granted: '2024-02-20',
    expires: '2024-08-20',
    status: 'active',
  },
  {
    id: 3,
    name: 'Dr. Emily Wilson',
    role: 'Radiologist',
    hospital: 'Medical Imaging Center',
    access: 'View Only',
    granted: '2024-03-01',
    expires: '2024-06-01',
    status: 'pending',
  },
];

export default function Permissions() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Access Permissions</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Manage who has access to your medical records</p>
      </div>

      <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/50">
        <div className="p-6">
          {permissions.map((permission) => (
            <div
              key={permission.id}
              className="mb-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${
                    permission.status === 'active' ? 'bg-green-100 dark:bg-green-900/50' : 'bg-yellow-100 dark:bg-yellow-900/50'
                  }`}>
                    <User className={`h-6 w-6 ${
                      permission.status === 'active' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">{permission.name}</h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {permission.role} • {permission.hospital}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="btn-secondary flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Modify Access</span>
                  </button>
                  <button className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg rounded-lg border border-gray-200 dark:border-gray-700/50">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Access Level</div>
                  <div className="mt-1 text-sm font-semibold dark:text-white">{permission.access}</div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg rounded-lg border border-gray-200 dark:border-gray-700/50">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Granted Date</div>
                  <div className="mt-1 text-sm font-semibold dark:text-white flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {permission.granted}
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg rounded-lg border border-gray-200 dark:border-gray-700/50">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Expires On</div>
                  <div className="mt-1 text-sm font-semibold dark:text-white flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {permission.expires}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
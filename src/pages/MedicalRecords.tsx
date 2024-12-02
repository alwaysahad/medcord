import React from 'react';
import { FileText, Download, Share2, Filter } from 'lucide-react';

const records = [
  {
    id: 1,
    title: 'Annual Physical Report',
    date: '2024-03-15',
    doctor: 'Dr. Sarah Johnson',
    type: 'Physical Examination',
    category: 'General',
    size: '2.4 MB',
  },
  {
    id: 2,
    title: 'Blood Test Results',
    date: '2024-03-10',
    doctor: 'Dr. Michael Chen',
    type: 'Laboratory',
    category: 'Tests',
    size: '1.8 MB',
  },
  {
    id: 3,
    title: 'X-Ray Report',
    date: '2024-03-05',
    doctor: 'Dr. Emily Wilson',
    type: 'Radiology',
    category: 'Imaging',
    size: '5.2 MB',
  },
];

export default function MedicalRecords() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Medical Records</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Access and manage all your medical documents</p>
      </div>

      <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/50">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="btn-primary flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Upload New Record</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filter</span>
              </button>
            </div>
            <div className="flex items-center">
              <input
                type="search"
                placeholder="Search records..."
                className="input"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800/80">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Document</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Doctor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-transparent divide-y divide-gray-200 dark:divide-gray-700/50">
              {records.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-3">
                        <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{record.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{record.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{record.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{record.doctor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{record.size}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <Download className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
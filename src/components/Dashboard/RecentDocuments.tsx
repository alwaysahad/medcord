import React from 'react';
import { FileText, Download, Share2 } from 'lucide-react';

const documents = [
  {
    title: 'Annual Physical Report',
    date: '2024-03-15',
    doctor: 'Dr. Sarah Johnson',
    type: 'Physical Examination',
  },
  {
    title: 'Blood Test Results',
    date: '2024-03-10',
    doctor: 'Dr. Michael Chen',
    type: 'Laboratory',
  },
  {
    title: 'X-Ray Report',
    date: '2024-03-05',
    doctor: 'Dr. Emily Wilson',
    type: 'Radiology',
  },
];

export default function RecentDocuments() {
  return (
    <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold dark:text-white">Recent Documents</h2>
        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.title}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium dark:text-white">{doc.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {doc.doctor} • {doc.type}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{doc.date}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <Download className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
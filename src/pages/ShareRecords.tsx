import React from 'react';
import { Search, Mail, QrCode, Copy, Check } from 'lucide-react';

export default function ShareRecords() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Share Medical Records</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Securely share your medical records with healthcare providers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/50 p-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Share via Email</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Healthcare Provider's Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="email"
                  className="input pl-10"
                  placeholder="doctor@hospital.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Access Duration
              </label>
              <select className="input">
                <option>24 hours</option>
                <option>7 days</option>
                <option>30 days</option>
                <option>Custom</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Access Level
              </label>
              <select className="input">
                <option>View Only</option>
                <option>Download</option>
                <option>Full Access</option>
              </select>
            </div>

            <button className="w-full btn-primary">
              Send Secure Link
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/50 p-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Quick Share</h2>
          
          <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700/50 flex items-center justify-center">
            <QrCode className="h-32 w-32 text-blue-600 dark:text-blue-400" />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Temporary Access Link
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400 break-all border border-gray-200 dark:border-gray-700/50">
                  https://medchain.app/share/temp/abc123xyz789
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              This link will expire in 24 hours and can only be used once.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
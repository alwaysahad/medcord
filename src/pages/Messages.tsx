import React from 'react';
import { Send, Paperclip } from 'lucide-react';

const conversations = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    lastMessage: 'Your test results look good. Let\'s discuss them in detail.',
    time: '10:30 AM',
    unread: true
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    lastMessage: 'Please remember to take your medication as prescribed.',
    time: 'Yesterday',
    unread: false
  }
];

export default function Messages() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Messages</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Communicate securely with your healthcare providers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="p-4 border-b dark:border-gray-700">
            <input
              type="search"
              placeholder="Search conversations..."
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>
          <div className="divide-y dark:divide-gray-700">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                className="w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium dark:text-white">{conversation.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{conversation.lastMessage}</p>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {conversation.time}
                    {conversation.unread && (
                      <span className="ml-2 inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex flex-col">
          <div className="p-4 border-b dark:border-gray-700">
            <h2 className="font-medium dark:text-white">Dr. Sarah Johnson</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Primary Care Physician</p>
          </div>

          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-md">
                Hello Dr. Johnson, I have a question about my recent prescription.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-2 max-w-md">
                Of course! What would you like to know?
              </div>
            </div>
          </div>

          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Paperclip className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              <button className="p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
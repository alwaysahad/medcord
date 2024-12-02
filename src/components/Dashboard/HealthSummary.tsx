import React from 'react';

export default function HealthSummary() {
  const stats = [
    { label: 'Blood Pressure', value: '120/80', trend: 'stable' },
    { label: 'Heart Rate', value: '72 bpm', trend: 'up' },
    { label: 'Temperature', value: '98.6°F', trend: 'stable' },
    { label: 'Weight', value: '165 lbs', trend: 'down' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/50 p-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Health Summary</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700/50">
            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            <p className="text-2xl font-semibold mt-1 dark:text-white">{stat.value}</p>
            <span className={`text-sm ${
              stat.trend === 'up' ? 'text-green-500' : 
              stat.trend === 'down' ? 'text-red-500' : 
              'text-gray-500 dark:text-gray-400'
            }`}>
              {stat.trend === 'up' ? '↑' : stat.trend === 'down' ? '↓' : '→'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import HealthSummary from '../components/Dashboard/HealthSummary';
import RecentDocuments from '../components/Dashboard/RecentDocuments';
import AccessLog from '../components/Dashboard/AccessLog';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, John</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Here's an overview of your medical records and recent activity.</p>
      </div>
      
      <div className="space-y-6">
        <HealthSummary />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentDocuments />
          <AccessLog />
        </div>
      </div>
    </div>
  );
}
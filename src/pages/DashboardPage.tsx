
import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the NLT SYSTEM admin dashboard</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Total Members</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        
        <div className="bg-card rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Active Teams</h3>
          <p className="text-3xl font-bold">56</p>
        </div>
        
        <div className="bg-card rounded-lg border p-4">
          <h3 className="font-semibold mb-2">New Applications</h3>
          <p className="text-3xl font-bold">23</p>
        </div>
      </div>
      
      <div className="mt-8 bg-card rounded-lg border p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center gap-4 pb-4 border-b">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                {item}
              </div>
              <div>
                <p className="font-medium">Activity item {item}</p>
                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;

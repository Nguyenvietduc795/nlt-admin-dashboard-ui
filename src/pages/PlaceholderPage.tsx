
import React from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardLayout } from '@/components/DashboardLayout';

const PlaceholderPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const title = path.split('/').filter(Boolean).join(' / ');

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold capitalize">{title || 'Page'}</h1>
        <p className="text-muted-foreground">This is a placeholder page for {path}</p>
      </div>
      
      <div className="bg-card rounded-lg border p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
        <p className="text-muted-foreground">
          This page is under development. Please check back later.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default PlaceholderPage;

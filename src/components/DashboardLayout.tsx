
import React from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { MobileMenu } from './MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background flex">
      {!isMobile && <Sidebar />}
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        <header className="sticky top-0 z-30 w-full">
          <div className="flex items-center h-16 px-4 md:px-6 bg-background">
            {isMobile && <MobileMenu />}
            <Topbar />
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

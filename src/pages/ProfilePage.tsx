
import React from 'react';
import { ProfileForm } from '@/components/ProfileForm';
import { DashboardLayout } from '@/components/DashboardLayout';

const ProfilePage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>
      <ProfileForm />
    </DashboardLayout>
  );
};

export default ProfilePage;

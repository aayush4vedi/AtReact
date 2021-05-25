import Head from 'next/head';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '../components/SiteTableSkeleton';
import DashboardShell from '../components/DashboardShell';

const Dashboard = () => {
  const auth = useAuth();

  //   if (!auth.user) {
  //     return 'Loading...';
  //   }

  if (!auth.user) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return <EmptyState />;
};

export default Dashboard;

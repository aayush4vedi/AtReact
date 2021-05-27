import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTableHeader from '@/components/SiteTableHeader';
import DashboardShell from '@/components/DashboardShell';
import SiteTable from '@/components/SiteTable';

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher); //redirect to user if already signed in

  //   if (!auth.user) {
  //     return 'Loading...';   #TODO: do redirecting
  //   }

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites.length ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;

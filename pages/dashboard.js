import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import Page from '@/components/Page';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTableHeader from '@/components/SiteTableHeader';
import DashboardShell from '@/components/DashboardShell';
import SiteTable from '@/components/SiteTable';
import SiteEmptyState from '@/components/SiteEmptyState';
import UpgradeEmptyState from '@/components/UpgradeEmptyState';

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher); //redirect to user if already signed in
  const isPaidAccount = user?.stripeRole !== 'free'; //optional chaining

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

  if (data.sites.length) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTable sites={data.sites} />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      <SiteTableHeader isPaidAccount={isPaidAccount} />
      {isPaidAccount ? <SiteEmptyState /> : <UpgradeEmptyState />}
    </DashboardShell>
  );
};

const DashboardPage = () => (
  <Page name="Dashboard" path="/dashboard">
    <Dashboard />
  </Page>
);

export default DashboardPage;

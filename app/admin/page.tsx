import DashboardClient from "./DashboardClient";

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const resolvedParams = await searchParams;
  const currentTab = resolvedParams.tab || "team";

  return <DashboardClient currentTab={currentTab} />;
}
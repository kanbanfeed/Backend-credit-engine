import { DashboardHeader } from "../components/dashboard-header";
import { MetricsCards } from "../components/metrics-card";
import { UsersTable } from "../components/users-table";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <DashboardHeader />
        <MetricsCards />
        <UsersTable />
      </div>
    </main>
  );
}

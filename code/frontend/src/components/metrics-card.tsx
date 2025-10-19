import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// I've uncommented these and added DollarSign for the icons
import { TrendingUp, CreditCard, DollarSign } from "lucide-react"; 
import { useAxiosGet } from "@/hooks/useAxios";

export function MetricsCards() {
  const { data: metricsData, isLoading } = useAxiosGet("/api/credits-details");

  // If the data is loading, you can show a placeholder
  if (isLoading) {
    return <div>Loading metrics...</div>;
  }

  // Handle the case where the API call fails or returns no data
  if (!metricsData || !metricsData.success) {
    return <div>Could not load metrics.</div>;
  }

  // Directly transform the data object into the array your component needs
  const displayMetrics = [
    {
      title: "Total Transactions",
      value: metricsData.data.totalTransactions,
      icon: TrendingUp,
      color: "text-blue-500",
    },
    {
      title: "Credits Issued",
      value: metricsData.data.creditsIssued,
      icon: CreditCard,
      color: "text-emerald-500",
    },
    {
      title: "Amount Transacted",
      // Format the amount as currency
      value: `$${metricsData.data.amountTransaction.toFixed(2)}`, 
      icon: DollarSign,
      color: "text-amber-500",
    },
  ];

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">
      {/* Now you can map over the correctly structured array */}
      {displayMetrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <Card
            key={metric.title}
            className="border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold text-foreground">
                  {metric.value}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
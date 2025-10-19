import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAxiosGet } from "@/hooks/useAxios";
import { useEffect } from "react";

interface UserData {
  id: string;
  userEmail: string;
  amount: number;
  credits: number;
  createdAt: string;
}

export function UsersTable() {
  const { data: usersData, isLoading } = useAxiosGet("/api/user-info");

  useEffect(() => {
    console.log("Users Data:", usersData);
  }, [usersData]);

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (!usersData || !usersData.success) {
    return <div>Could not load recent users.</div>;
  }

  const recentUsers = usersData.data;
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Recent Users
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                  User
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Transaction Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Amount (USD)
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                  User Credits
                </th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user: UserData) => (
                <tr
                  key={user.id}
                  className="border-b border-border/50 transition-colors hover:bg-muted/30"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={"/placeholder.svg"}
                          alt={user.userEmail.split("@")[0]}
                        />
                        <AvatarFallback>
                          {user.userEmail.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-foreground">
                        {user.userEmail.split("@")[0]}{" "}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-muted-foreground">
                    {user.userEmail}
                  </td>
                  <td className="px-4 py-4 text-sm text-muted-foreground">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium`}
                    >
                      {`$${user.amount.toFixed(2)}`}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-muted-foreground">
                    {user.credits}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

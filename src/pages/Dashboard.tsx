import { Shield } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="container py-12">
      <div className="flex items-center gap-3">
        <Shield className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <p className="mt-2 text-muted-foreground">Dashboard functionality coming soon.</p>
    </div>
  );
}

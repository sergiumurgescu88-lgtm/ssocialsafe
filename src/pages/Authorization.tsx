import { ShieldCheck } from "lucide-react";

export default function Authorization() {
  return (
    <div className="container py-12">
      <div className="flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Authorization Center</h1>
      </div>
      <p className="mt-2 text-muted-foreground">Authorization management coming soon.</p>
    </div>
  );
}

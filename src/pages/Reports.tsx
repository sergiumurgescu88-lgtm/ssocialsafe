import { FileText } from "lucide-react";

export default function Reports() {
  return (
    <div className="container py-12">
      <div className="flex items-center gap-3">
        <FileText className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Reports</h1>
      </div>
      <p className="mt-2 text-muted-foreground">Report generation coming soon.</p>
    </div>
  );
}

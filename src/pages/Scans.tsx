import { ScanLine } from "lucide-react";

export default function Scans() {
  return (
    <div className="container py-12">
      <div className="flex items-center gap-3">
        <ScanLine className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Scans</h1>
      </div>
      <p className="mt-2 text-muted-foreground">Scan modules coming soon.</p>
    </div>
  );
}

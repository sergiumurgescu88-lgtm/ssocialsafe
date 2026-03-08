import { Settings as SettingsIcon } from "lucide-react";

export default function Settings() {
  return (
    <div className="container py-12">
      <div className="flex items-center gap-3">
        <SettingsIcon className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      <p className="mt-2 text-muted-foreground">Settings coming soon.</p>
    </div>
  );
}

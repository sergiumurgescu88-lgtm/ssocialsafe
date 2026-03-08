import { Link } from "react-router-dom";
import { Home, LayoutDashboard, ShieldCheck, ScanLine, FileText, Settings, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/authorization", label: "Authorization", icon: ShieldCheck },
  { to: "/scans", label: "Scans", icon: ScanLine },
  { to: "/reports", label: "Reports", icon: FileText },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function MobileNav() {
  return (
    <div className="flex flex-col gap-4 pt-8">
      <nav className="flex flex-col gap-1">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col gap-2 border-t border-border pt-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/login"><LogIn className="mr-1.5 h-4 w-4" />Login</Link>
        </Button>
        <Button size="sm" asChild>
          <Link to="/signup"><UserPlus className="mr-1.5 h-4 w-4" />Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}

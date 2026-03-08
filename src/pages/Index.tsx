import { Shield, Search, FileText, Bug, ChevronRight, Lock, Zap, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const features = [
  { icon: Search, title: "API Discovery", desc: "Discover and map API endpoints across authorized targets with intelligent scanning." },
  { icon: Shield, title: "Vulnerability Detection", desc: "Identify security vulnerabilities with non-destructive, safe testing methods." },
  { icon: FileText, title: "Report Generation", desc: "Generate professional reports formatted for HackerOne, Bugcrowd, and clients." },
  { icon: Bug, title: "Bug Bounty Ready", desc: "Integrated workflows for major bug bounty platforms with auto-formatting." },
  { icon: Lock, title: "Authorization First", desc: "Built-in authorization verification ensures you only scan what you're allowed to." },
  { icon: Globe, title: "Legal Compliance", desc: "Full compliance with Romanian and international cybersecurity regulations." },
];

const tiers = [
  { name: "Researcher", price: "Free", features: ["5 scans/month", "Security headers check", "SSL analysis", "Basic reports"], cta: "Get Started" },
  { name: "Professional", price: "$49", features: ["Unlimited scans", "API discovery", "Vulnerability scanner", "Bug bounty templates", "Priority support"], cta: "Start Trial", popular: true },
  { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "Team management", "Custom integrations", "Dedicated support", "SLA guarantee"], cta: "Contact Sales" },
];

export default function Index() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(160_84%_39%/0.08),transparent_60%)]" />
        <div className="container relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <Shield className="h-3.5 w-3.5" /> Authorized Testing Only
            </span>
          </motion.div>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            Security Research Platform for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ethical Testing
            </span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Discover vulnerabilities, generate professional reports, and contribute to a safer internet — all within a legally compliant framework.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/signup">Start Free <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/50 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Built for Security Professionals</h2>
            <p className="mt-4 text-muted-foreground">Everything you need for responsible security research.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="group border-border/50 bg-card/50 transition-colors hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border/50 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-muted-foreground">Choose the plan that fits your research needs.</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div key={tier.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className={`relative flex h-full flex-col border-border/50 bg-card/50 ${tier.popular ? "ring-2 ring-primary" : ""}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                    </div>
                    <ul className="mb-8 flex-1 space-y-3">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button variant={tier.popular ? "default" : "outline"} className="w-full" asChild>
                      <Link to="/signup">{tier.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="border-t border-border/50 py-16">
        <div className="container">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center md:flex-row md:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">⚠️ Authorized Testing Only</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  SecureScan Pro requires valid authorization before any scan. All activities are logged for legal compliance. 
                  Unauthorized scanning is strictly prohibited under Romanian law (Legea 161/2003) and international regulations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 pb-24 md:pb-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold">SecureScan Pro</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/legal" className="hover:text-foreground">Legal</Link>
              <Link to="/legal" className="hover:text-foreground">Privacy</Link>
              <Link to="/legal" className="hover:text-foreground">Terms</Link>
            </div>
            <p className="text-xs text-muted-foreground">© 2026 SecureScan Pro. Authorized testing only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

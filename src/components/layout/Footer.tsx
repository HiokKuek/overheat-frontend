import Link from "next/link";
import { Hexagon } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-foreground/10 bg-background pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <Hexagon className="w-8 h-8 text-foreground" />
                            <span className="font-bold text-xl uppercase tracking-tight">Overheat</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            The AI-powered source of truth for prediction markets.
                            <br />
                            <br />
                            Autonomous. Verifiable. Instant.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold uppercase tracking-wider mb-6 text-sm">Product</h3>
                        <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                            <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/playground" className="hover:text-primary transition-colors">Playground</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold uppercase tracking-wider mb-6 text-sm">Resources</h3>
                        <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                            <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Status</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold uppercase tracking-wider mb-6 text-sm">Company</h3>
                        <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-foreground/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-mono text-muted-foreground uppercase">
                        © {new Date().getFullYear()} Overheat Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs font-mono text-muted-foreground uppercase">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

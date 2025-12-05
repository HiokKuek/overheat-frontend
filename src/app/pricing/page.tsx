import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 pt-32 pb-20">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl font-bold uppercase tracking-tight mb-6">Access Plans</h1>
                    <p className="text-xl text-muted-foreground">
                        Transparent pricing for high-frequency data access.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-foreground/10 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
                    {/* Free Tier */}
                    <div className="p-10 flex flex-col hover:bg-secondary/30 transition-colors">
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Developer</h3>
                        <div className="text-4xl font-bold mb-8">$0</div>
                        <p className="text-sm text-muted-foreground mb-8 min-h-[40px]">Essential access for testing and prototypes.</p>

                        <ul className="space-y-4 mb-10 flex-grow text-sm font-medium">
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" />
                                <span>5 Data Feeds</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" />
                                <span>10k Requests/mo</span>
                            </li>
                        </ul>

                        <button className="w-full py-4 border-2 border-foreground text-sm font-bold uppercase hover:bg-foreground hover:text-background transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Tier */}
                    <div className="p-10 flex flex-col bg-secondary/50 relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-primary">Startup</h3>
                        <div className="text-4xl font-bold mb-8">$99</div>
                        <p className="text-sm text-muted-foreground mb-8 min-h-[40px]">Production-grade capacity for growing dApps.</p>

                        <ul className="space-y-4 mb-10 flex-grow text-sm font-medium">
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" />
                                <span>50 Data Feeds</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" />
                                <span>1M Requests/mo</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" />
                                <span>Priority Support</span>
                            </li>
                        </ul>

                        <button className="w-full py-4 bg-primary text-primary-foreground text-sm font-bold uppercase hover:bg-primary/90 transition-colors">
                            Start Trial
                        </button>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="p-10 flex flex-col hover:bg-secondary/30 transition-colors">
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Enterprise</h3>
                        <div className="text-4xl font-bold mb-8">Custom</div>
                        <p className="text-sm text-muted-foreground mb-8 min-h-[40px]">Unlimited scale for institutions.</p>

                        <ul className="space-y-4 mb-10 flex-grow text-sm font-medium">
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" />
                                <span>Unlimited Feeds</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" />
                                <span>Dedicated Nodes</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-primary" />
                                <span>SLA Guarantee</span>
                            </li>
                        </ul>

                        <button className="w-full py-4 border-2 border-foreground text-sm font-bold uppercase hover:bg-foreground hover:text-background transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

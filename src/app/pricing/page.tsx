import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-32 pb-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-muted-foreground">
                        Start for free, scale as you grow. Pay only for the data you consume.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Tier */}
                    <div className="p-8 rounded-2xl bg-card border border-border flex flex-col">
                        <h3 className="text-xl font-semibold mb-2">Developer</h3>
                        <div className="text-3xl font-bold mb-6">$0 <span className="text-base font-normal text-muted-foreground">/mo</span></div>
                        <p className="text-muted-foreground mb-8">Perfect for hackathons and side projects.</p>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>5 Data Feeds</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>10k Requests/mo</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Community Support</span>
                            </li>
                        </ul>

                        <button className="w-full py-3 rounded-lg border border-border hover:bg-secondary transition-colors font-medium">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Tier */}
                    <div className="p-8 rounded-2xl bg-card border border-primary/50 relative flex flex-col shadow-lg shadow-primary/10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                            Most Popular
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Startup</h3>
                        <div className="text-3xl font-bold mb-6">$99 <span className="text-base font-normal text-muted-foreground">/mo</span></div>
                        <p className="text-muted-foreground mb-8">For growing dApps with real users.</p>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span>50 Data Feeds</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span>1M Requests/mo</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span>Priority Support</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <span>SLA Guarantee</span>
                            </li>
                        </ul>

                        <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
                            Start Free Trial
                        </button>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="p-8 rounded-2xl bg-card border border-border flex flex-col">
                        <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                        <div className="text-3xl font-bold mb-6">Custom</div>
                        <p className="text-muted-foreground mb-8">For high-frequency trading and institutions.</p>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Unlimited Feeds</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Unlimited Requests</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Dedicated Account Manager</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Custom Integrations</span>
                            </li>
                        </ul>

                        <button className="w-full py-3 rounded-lg border border-border hover:bg-secondary transition-colors font-medium">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";

export default function DashboardPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 pt-32 pb-20">
                <div className="mb-12 border-b border-foreground/10 pb-6 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">Dashboard</h1>
                        <p className="text-muted-foreground font-mono text-sm">ID: 0x8f...3k9a • STATUS: ACTIVE</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Current Cycle</p>
                        <p className="text-xl font-mono">245ms</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="p-8 bg-secondary border border-foreground/5">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Total Requests</h3>
                        <p className="text-5xl font-bold tracking-tighter">2.5M</p>
                        <div className="mt-6 h-1 w-full bg-foreground/10">
                            <div className="h-full bg-primary w-[75%]"></div>
                        </div>
                    </div>

                    <div className="p-8 bg-secondary border border-foreground/5">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Active Feeds</h3>
                        <p className="text-5xl font-bold tracking-tighter">12</p>
                    </div>

                    <div className="p-8 bg-secondary border border-foreground/5">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Balance</h3>
                        <p className="text-5xl font-bold tracking-tighter">$450</p>
                    </div>
                </div>

                <DashboardCharts />

                <div className="border border-foreground/10">
                    <div className="bg-secondary px-6 py-4 border-b border-foreground/10 flex justify-between items-center">
                        <h3 className="font-bold uppercase tracking-wider text-sm">Recent Activity</h3>
                        <button className="text-xs font-bold uppercase hover:text-primary">View All</button>
                    </div>
                    <div className="divide-y divide-foreground/10">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-green-500"></div>
                                    <span className="font-mono text-sm">ETH/USD ORACLE UPDATE</span>
                                </div>
                                <span className="text-xs font-mono text-muted-foreground">14:23:0{i} UTC</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

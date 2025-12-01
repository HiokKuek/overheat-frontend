import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-32 pb-20">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                    <p className="text-muted-foreground">Manage your API keys and view usage statistics.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl bg-card border border-border">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Requests</h3>
                        <p className="text-3xl font-bold">2,543,901</p>
                        <div className="mt-4 h-2 w-full bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[75%]"></div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-card border border-border">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Active Feeds</h3>
                        <p className="text-3xl font-bold">12</p>
                    </div>

                    <div className="p-6 rounded-xl bg-card border border-border">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Credits Remaining</h3>
                        <p className="text-3xl font-bold">$450.00</p>
                    </div>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-card border border-border">
                    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="font-medium">ETH/USD Price Update</span>
                                </div>
                                <span className="text-sm text-muted-foreground">2 mins ago</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

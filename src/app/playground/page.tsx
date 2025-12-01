import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PlaygroundPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-32 pb-20">
                <div className="flex flex-col md:flex-row gap-8 h-[600px]">
                    <div className="w-full md:w-1/3 flex flex-col gap-4">
                        <h1 className="text-3xl font-bold">Playground</h1>
                        <p className="text-muted-foreground">Test data feeds in real-time.</p>

                        <div className="p-4 rounded-lg bg-card border border-border">
                            <label className="block text-sm font-medium mb-2">Select Feed</label>
                            <select className="w-full p-2 rounded bg-secondary border border-border text-foreground">
                                <option>BTC/USD</option>
                                <option>ETH/USD</option>
                                <option>SOL/USD</option>
                            </select>
                        </div>

                        <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                            Fetch Price
                        </button>
                    </div>

                    <div className="w-full md:w-2/3 rounded-xl bg-secondary border border-border p-4 font-mono text-sm overflow-auto">
                        <div className="text-green-400">{"// Response will appear here"}</div>
                        <div className="mt-2 text-muted-foreground">
                            Waiting for request...
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

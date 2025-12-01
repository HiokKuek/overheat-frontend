import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PlaygroundPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 pt-32 pb-20">
                <div className="flex flex-col md:flex-row gap-12 h-[600px]">
                    <div className="w-full md:w-1/3 flex flex-col gap-8">
                        <div>
                            <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">Playground</h1>
                            <p className="text-muted-foreground text-sm">Test environment for live data feeds.</p>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-xs font-bold uppercase tracking-widest">Select Feed</label>
                            <select className="w-full p-4 bg-background border-2 border-foreground/10 focus:border-primary outline-none transition-colors font-mono text-sm appearance-none rounded-none">
                                <option>BTC/USD</option>
                                <option>ETH/USD</option>
                                <option>SOL/USD</option>
                            </select>
                        </div>

                        <button className="w-full py-4 bg-foreground text-background font-bold uppercase tracking-wider hover:bg-primary transition-colors">
                            Execute Query
                        </button>
                    </div>

                    <div className="w-full md:w-2/3 bg-secondary border border-foreground/10 p-8 font-mono text-sm overflow-auto relative">
                        <div className="absolute top-0 left-0 px-4 py-2 bg-foreground text-background text-xs font-bold uppercase">
                            Console Output
                        </div>
                        <div className="mt-8 text-muted-foreground">
                            <span className="text-primary">{">"}</span> Waiting for input...
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

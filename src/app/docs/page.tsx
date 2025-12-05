import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Book, Code, Terminal } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 border-b border-foreground/10 pb-8">
                        <h1 className="text-5xl font-bold uppercase tracking-tight mb-6">Documentation</h1>
                        <p className="text-xl text-muted-foreground">
                            Technical references for the Overheat Oracle Network.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 border border-foreground/10 hover:border-foreground transition-colors cursor-pointer group">
                            <Book className="w-8 h-8 text-foreground mb-6 group-hover:text-primary transition-colors" />
                            <h2 className="text-xl font-bold uppercase tracking-wide mb-3">Quick Start</h2>
                            <p className="text-muted-foreground text-sm">Initialize the SDK and fetch your first price feed in 5 minutes.</p>
                        </div>

                        <div className="p-8 border border-foreground/10 hover:border-foreground transition-colors cursor-pointer group">
                            <Terminal className="w-8 h-8 text-foreground mb-6 group-hover:text-primary transition-colors" />
                            <h2 className="text-xl font-bold uppercase tracking-wide mb-3">SDK Reference</h2>
                            <p className="text-muted-foreground text-sm">Complete API documentation for JavaScript, Rust, and Go clients.</p>
                        </div>

                        <div className="p-8 border border-foreground/10 hover:border-foreground transition-colors cursor-pointer group">
                            <Code className="w-8 h-8 text-foreground mb-6 group-hover:text-primary transition-colors" />
                            <h2 className="text-xl font-bold uppercase tracking-wide mb-3">Contracts</h2>
                            <p className="text-muted-foreground text-sm">Smart contract interfaces and ABI downloads for all supported chains.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Installation</h2>
                        <div className="p-6 bg-secondary border border-foreground/10 font-mono text-sm flex justify-between items-center">
                            <span>npm install @overheat/sdk ethers</span>
                            <span className="text-muted-foreground text-xs">v2.4.0</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Book, Code, Terminal } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">Documentation</h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Learn how to integrate Overheat&apos;s high-frequency oracle data into your dApps.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer">
                            <Book className="w-8 h-8 text-primary mb-4" />
                            <h2 className="text-xl font-semibold mb-2">Quick Start Guide</h2>
                            <p className="text-muted-foreground">Get up and running with Overheat in less than 5 minutes.</p>
                        </div>

                        <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer">
                            <Terminal className="w-8 h-8 text-accent mb-4" />
                            <h2 className="text-xl font-semibold mb-2">SDK Reference</h2>
                            <p className="text-muted-foreground">Detailed API documentation for our JavaScript and Rust SDKs.</p>
                        </div>

                        <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer">
                            <Code className="w-8 h-8 text-green-500 mb-4" />
                            <h2 className="text-xl font-semibold mb-2">Smart Contract Examples</h2>
                            <p className="text-muted-foreground">Copy-pasteable Solidity examples for consuming data feeds.</p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">Installation</h2>
                        <div className="p-4 rounded-lg bg-secondary font-mono text-sm">
                            npm install @overheat/sdk ethers
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

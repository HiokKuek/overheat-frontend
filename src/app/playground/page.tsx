"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { Play, ChevronDown, Calendar } from "lucide-react";

export default function PlaygroundPage() {
    const [activeTab, setActiveTab] = useState("Form");
    const [activeEndpoint, setActiveEndpoint] = useState("/predictions");
    const [outputTab, setOutputTab] = useState("Preview");

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 pt-32 pb-20">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">Playground</h1>
                    <p className="text-muted-foreground text-sm">Test and validate API endpoints in real-time.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[800px]">
                    {/* Input Section */}
                    <div className="flex flex-col h-full border border-foreground/10 bg-background/40 backdrop-blur-sm rounded-sm overflow-hidden">
                        <div className="p-4 border-b border-foreground/10 flex items-center justify-between bg-secondary/30">
                            <h2 className="font-bold uppercase tracking-wider text-sm">Input</h2>
                            <div className="flex gap-4 text-xs font-mono text-muted-foreground">
                                {["Form", "JSON", "Node.js", "Python", "HTTP"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`hover:text-foreground transition-colors uppercase ${activeTab === tab ? "text-primary font-bold" : ""}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 flex-grow overflow-y-auto space-y-8">
                            {/* Endpoint Selector */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Endpoint</label>
                                <div className="flex gap-2">
                                    {["/predictions", "/predictions/validate-past"].map((ep) => (
                                        <button
                                            key={ep}
                                            onClick={() => setActiveEndpoint(ep)}
                                            className={`px-4 py-2 text-xs font-mono border transition-colors ${activeEndpoint === ep
                                                    ? "bg-primary text-primary-foreground border-primary"
                                                    : "bg-background border-foreground/10 hover:border-foreground/30"
                                                }`}
                                        >
                                            {ep}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Analyze future predictions before deadline</p>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">prompt_raw <span className="text-[10px] opacity-50">string</span></label>
                                    <textarea
                                        className="w-full p-4 bg-background/50 border border-foreground/10 focus:border-primary outline-none transition-colors font-mono text-sm min-h-[100px] resize-none"
                                        placeholder="Will Bitcoin reach $100,000 by end of 2025?"
                                        defaultValue="Will Bitcoin reach $100,000 by end of 2025?"
                                    />
                                    <p className="text-xs text-muted-foreground">The question to ask the oracle</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">question_type <span className="text-[10px] opacity-50">string</span></label>
                                    <div className="relative">
                                        <select className="w-full p-4 bg-background/50 border border-foreground/10 focus:border-primary outline-none transition-colors font-mono text-sm appearance-none rounded-none">
                                            <option>Yes/No</option>
                                            <option>Multiple Choice</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Binary yes/no or multi-outcome (up to 4 options)</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">category <span className="text-[10px] opacity-50">string</span></label>
                                    <div className="relative">
                                        <select className="w-full p-4 bg-background/50 border border-foreground/10 focus:border-primary outline-none transition-colors font-mono text-sm appearance-none rounded-none">
                                            <option>Crypto</option>
                                            <option>Sports</option>
                                            <option>Politics</option>
                                            <option>Weather</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Market category for better organization</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">deadline <span className="text-[10px] opacity-50">string</span></label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            className="w-full p-4 bg-background/50 border border-foreground/10 focus:border-primary outline-none transition-colors font-mono text-sm"
                                            defaultValue="2025-12-31"
                                        />
                                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Resolution deadline (ISO 8601 format)</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">slot_price <span className="text-[10px] opacity-50">number (optional)</span></label>
                                    <input
                                        type="number"
                                        className="w-full p-4 bg-background/50 border border-foreground/10 focus:border-primary outline-none transition-colors font-mono text-sm"
                                        placeholder="0.00"
                                    />
                                    <p className="text-xs text-muted-foreground">Price per bet slot for market creation (not in PoC)</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t border-foreground/10 bg-secondary/30">
                            <button className="w-full py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                <Play className="w-4 h-4 fill-current" />
                                Run
                            </button>
                        </div>
                    </div>

                    {/* Output Section */}
                    <div className="flex flex-col h-full border border-foreground/10 bg-background/40 backdrop-blur-sm rounded-sm overflow-hidden">
                        <div className="p-4 border-b border-foreground/10 flex items-center justify-between bg-secondary/30">
                            <h2 className="font-bold uppercase tracking-wider text-sm">Output</h2>
                            <div className="flex gap-4 text-xs font-mono text-muted-foreground">
                                {["Preview", "JSON"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setOutputTab(tab)}
                                        className={`hover:text-foreground transition-colors uppercase ${outputTab === tab ? "text-primary font-bold" : ""}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex-grow flex items-center justify-center bg-black/5">
                            <div className="text-center text-muted-foreground">
                                <Play className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p className="text-sm">Enter a prediction and click Run to analyze</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

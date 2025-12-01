"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-40 pb-32 overflow-hidden bg-grid border-b border-foreground/10">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest mb-8">
                            System Operational
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 text-foreground">
                            THE TRUTH <br />
                            <span className="text-muted-foreground">MACHINE.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                            Autonomous AI agents resolving prediction markets with mathematical precision.
                            <span className="text-foreground font-medium"> No intermediaries. No latency.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link
                                href="/dashboard"
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider bg-foreground text-background hover:bg-primary transition-colors"
                            >
                                Start Building
                                <ArrowRight className="ml-3 w-4 h-4" />
                            </Link>
                            <Link
                                href="/docs"
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                            >
                                Documentation
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract Data Visualization */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:flex flex-col justify-center gap-2 opacity-10 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="h-1 bg-foreground w-full"
                            style={{ width: `${Math.random() * 100}%`, opacity: Math.random() }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

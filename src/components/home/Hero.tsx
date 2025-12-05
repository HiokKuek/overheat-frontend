"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OrbitAnimation } from "./OrbitAnimation";

export function Hero() {
    return (
        <section className="relative pt-40 pb-32 overflow-hidden bg-grid border-b border-foreground/10">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row items-center gap-12"
                >
                    <div className="flex-1">
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
                    </div>

                    {/* Orbit Animation */}
                    <div className="flex-1 hidden lg:flex justify-end">
                        <OrbitAnimation />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

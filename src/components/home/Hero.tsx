"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Scale, Zap } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">
                            AI Agents Active
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60"
                    >
                        The AI-Powered Source of Truth for <span className="text-primary">Prediction Markets</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted-foreground mb-10 max-w-2xl"
                    >
                        Autonomous AI agents scan the web, cross-reference sources, and deliver validated real-world data to the blockchain. Instant, trustless settlement for any market.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Start Building
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                            href="/docs"
                            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium bg-secondary text-secondary-foreground border border-border rounded-lg hover:bg-secondary/80 transition-colors"
                        >
                            Read Documentation
                        </Link>
                    </motion.div>

                    {/* Floating Elements */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
                        {[
                            {
                                icon: Bot,
                                title: "Autonomous Agents",
                                desc: "AI crawlers scan sports, news, and financial sites 24/7.",
                            },
                            {
                                icon: Scale,
                                title: "Multi-Source Validation",
                                desc: "Cross-references multiple sources to resolve conflicts automatically.",
                            },
                            {
                                icon: Zap,
                                title: "Instant Settlement",
                                desc: "Push validated outcomes on-chain for immediate market resolution.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Search, CheckCircle2, Send } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: Search,
            title: "1. Scan & Aggregate",
            desc: "Our autonomous AI agents continuously scan thousands of trusted sources—sports APIs, news sites, and financial terminals—to gather real-time data.",
        },
        {
            icon: CheckCircle2,
            title: "2. Verify & Resolve",
            desc: "Agents cross-reference data points to identify discrepancies. Our consensus engine resolves conflicts using probabilistic models to ensure a single source of truth.",
        },
        {
            icon: Send,
            title: "3. Deliver On-Chain",
            desc: "Validated outcomes are cryptographically signed and pushed to the blockchain, enabling instant settlement for prediction markets.",
        },
    ];

    return (
        <section className="py-24 bg-secondary/30 border-y border-border/40">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-muted-foreground text-lg">
                        From chaotic real-world data to a precise on-chain outcome in three steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-card border-4 border-background shadow-xl flex items-center justify-center mb-6 group hover:border-primary/50 transition-colors">
                                <step.icon className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

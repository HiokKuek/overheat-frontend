"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
    const steps = [
        {
            id: "01",
            title: "Scan",
            desc: "AI agents crawl 10,000+ sources including sports APIs, news terminals, and social sentiment.",
        },
        {
            id: "02",
            title: "Verify",
            desc: "Consensus engine cross-references data points. Conflicts are resolved via probabilistic models.",
        },
        {
            id: "03",
            title: "Settlement",
            desc: "Validated truth is cryptographically signed and pushed on-chain for instant market resolution.",
        },
    ];

    return (
        <section className="py-32">
            <div className="container mx-auto px-6">
                <div className="mb-20 border-b-2 border-foreground pb-8">
                    <h2 className="text-4xl font-bold uppercase tracking-tight">System Architecture</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="group"
                        >
                            <div className="text-6xl font-bold text-muted-foreground/20 mb-6 group-hover:text-primary/20 transition-colors">
                                {step.id}
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">{step.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-foreground/10 pl-6 group-hover:border-primary transition-colors">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

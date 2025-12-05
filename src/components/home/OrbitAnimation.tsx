"use client";

import { motion } from "framer-motion";

export function OrbitAnimation() {
    return (
        <div className="relative w-[500px] h-[500px] flex items-center justify-center perspective-1000">
            {/* Central Oracle Core */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-30 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,107,53,0.8)]"
            >
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                </div>
            </motion.div>

            {/* Inner Fast Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[200px] h-[200px] rounded-full border border-primary/20 border-dashed"
            />

            {/* Middle Counter-Rotating Ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] rounded-full border border-foreground/10"
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-foreground rounded-full shadow-lg"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: `rotate(${i * 120}deg) translate(175px) rotate(-${i * 120}deg)`,
                        }}
                    />
                ))}
            </motion.div>

            {/* Outer Slow Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[500px] h-[500px] rounded-full border border-foreground/5"
            />

            {/* Complex Node System */}
            {[...Array(12)].map((_, i) => {
                const radius = 120 + (i % 4) * 60; // Distribute across different radii
                const duration = 15 + (i % 5) * 8; // Varying speeds
                const delay = i * -5;
                const size = i % 3 === 0 ? 16 : 8; // Varying sizes

                return (
                    <motion.div
                        key={i}
                        className="absolute w-full h-full"
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }} // Alternating directions
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: delay,
                        }}
                    >
                        <motion.div
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl ${i % 3 === 0 ? "bg-primary" : "bg-foreground"
                                }`}
                            style={{
                                width: size,
                                height: size,
                                marginLeft: radius, // Offset from center
                            }}
                        >
                            {/* Satellite Node for larger nodes */}
                            {i % 3 === 0 && (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 left-0 w-full h-full"
                                >
                                    <div className="absolute -top-4 left-1/2 w-2 h-2 bg-muted-foreground rounded-full" />
                                </motion.div>
                            )}

                            {/* Connecting Line to Center */}
                            <div
                                className="absolute top-1/2 right-1/2 h-[1px] bg-gradient-to-l from-transparent via-foreground/10 to-transparent origin-right"
                                style={{ width: radius, transform: 'translateY(-50%)' }}
                            />
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={`p-${i}`}
                    className="absolute w-1 h-1 bg-primary/40 rounded-full"
                    initial={{
                        x: (Math.random() - 0.5) * 500,
                        y: (Math.random() - 0.5) * 500,
                        opacity: 0
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
}

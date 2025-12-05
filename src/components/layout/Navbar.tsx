"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";

const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Docs", href: "/docs" },
    { name: "Playground", href: "/playground" },
    { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-foreground/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="flex items-center justify-center w-10 h-10 bg-foreground text-background rounded-none group-hover:bg-primary transition-colors">
                        <Hexagon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xl tracking-tight uppercase">Overheat</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/dashboard"
                        className="px-6 py-3 text-sm font-bold uppercase tracking-wider bg-foreground text-background hover:bg-primary transition-colors"
                    >
                        Dapp
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 hover:bg-secondary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-foreground/10 bg-background"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-semibold uppercase tracking-wider hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/dashboard"
                                className="w-full text-center px-6 py-4 text-sm font-bold uppercase tracking-wider bg-foreground text-background hover:bg-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Start Building
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

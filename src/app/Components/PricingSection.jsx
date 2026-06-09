"use client";

import { Check, Star, Rocket, Person } from "@gravity-ui/icons";
import Link from "next/link";
import { motion } from "motion/react";

const plans = [
    {
        id: "free",
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for getting started with your job search.",
        icon: <Person width={20} height={20} />,
        badge: null,
        highlight: false,
        features: [
            "Browse up to 20 jobs/day",
            "Basic search filters",
            "Save up to 5 jobs",
            "Standard job alerts",
            "Community access",
        ],
        cta: "Get Started Free",
        href: "/auth/signup",
    },
    {
        id: "pro",
        name: "Pro",
        price: "$12",
        period: "per month",
        description: "For serious job seekers who want every advantage.",
        icon: <Star width={20} height={20} />,
        badge: "Most Popular",
        highlight: true,
        features: [
            "Unlimited job browsing",
            "Advanced search & filters",
            "Save unlimited jobs",
            "Priority job alerts",
            "One-Click Apply",
            "Resume Builder",
            "Salary Insights",
            "Skill-Based Matching",
        ],
        cta: "Start Pro Plan",
        href: "/auth/signup?plan=pro",
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "$39",
        period: "per month",
        description: "For teams and recruiters hiring at scale.",
        icon: <Rocket width={20} height={20} />,
        badge: null,
        highlight: false,
        features: [
            "Everything in Pro",
            "Team collaboration tools",
            "Dedicated account manager",
            "Custom job alerts",
            "Analytics dashboard",
            "API access",
            "Priority support",
        ],
        cta: "Contact Sales",
        href: "/contact",
    },
];

export default function PricingSection() {
    return (
        <section className="relative overflow-hidden bg-[#0B0B0F] py-28 text-white">

            {/* Background Glows */}
            <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
            <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-fuchsia-600/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 flex items-center justify-center gap-3"
                >
                    <span className="h-px w-8 bg-violet-500" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                        Pricing Plans
                    </span>
                    <span className="h-px w-8 bg-violet-500" />
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                        Invest in your
                        <br />
                        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            dream career
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Choose the plan that fits your journey. Upgrade or cancel anytime.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -8, transition: { duration: 0.25 } }}
                            className={`group relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-colors duration-300 ${
                                plan.highlight
                                    ? "border-violet-500/40 bg-gradient-to-b from-violet-600/10 to-fuchsia-600/5"
                                    : "border-white/[0.06] bg-white/[0.03] hover:border-violet-500/20 hover:bg-white/[0.06]"
                            }`}
                        >
                            {/* Popular Badge */}
                            {plan.badge && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="absolute right-6 top-6"
                                >
                                    <span className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-white">
                                        {plan.badge}
                                    </span>
                                </motion.div>
                            )}

                            {/* Glow for highlight card */}
                            {plan.highlight && (
                                <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl transition duration-500 group-hover:bg-violet-600/30" />
                            )}

                            {/* Hover glow for non-highlight */}
                            {!plan.highlight && (
                                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-violet-600/0 blur-2xl transition duration-500 group-hover:bg-violet-600/10" />
                            )}

                            {/* Icon */}
                            <div className={`relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border transition duration-300 ${
                                plan.highlight
                                    ? "border-violet-500/30 bg-violet-500/20 text-violet-300 group-hover:bg-violet-500/30"
                                    : "border-white/10 bg-white/5 text-gray-400 group-hover:border-violet-500/20 group-hover:text-violet-400"
                            }`}>
                                {plan.icon}
                            </div>

                            {/* Plan Name */}
                            <h3 className="relative z-10 text-lg font-semibold text-white">
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="relative z-10 mt-4 flex items-end gap-2">
                                <span className={`text-5xl font-bold transition duration-300 ${
                                    plan.highlight
                                        ? "bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                                        : "text-white group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-fuchsia-400 group-hover:bg-clip-text group-hover:text-transparent"
                                }`}>
                                    {plan.price}
                                </span>
                                <span className="mb-2 text-sm text-gray-500">/{plan.period}</span>
                            </div>

                            {/* Description */}
                            <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-400">
                                {plan.description}
                            </p>

                            {/* Divider */}
                            <div className={`relative z-10 my-6 h-px transition duration-300 ${
                                plan.highlight ? "bg-violet-500/20" : "bg-white/10 group-hover:bg-violet-500/10"
                            }`} />

                            {/* Features */}
                            <ul className="relative z-10 flex-1 space-y-3">
                                {plan.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                                        className="flex items-start gap-3 text-sm text-gray-300"
                                    >
                                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                                            plan.highlight
                                                ? "bg-violet-500/20 text-violet-400"
                                                : "bg-white/5 text-gray-400 group-hover:bg-violet-500/10 group-hover:text-violet-400"
                                        }`}>
                                            <Check width={12} height={12} />
                                        </span>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative z-10 mt-8"
                            >
                                <Link
                                    href={plan.href}
                                    className={`block rounded-2xl py-3 text-center text-sm font-semibold transition duration-300 ${
                                        plan.highlight
                                            ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-violet-500/25"
                                            : "border border-white/10 bg-white/5 text-white hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-300"
                                    }`}
                                >
                                    {plan.cta}
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 text-center text-sm text-gray-500"
                >
                    No credit card required for free plan. Cancel anytime.{" "}
                    <Link href="/pricing" className="text-violet-400 transition hover:text-violet-300">
                        See full comparison →
                    </Link>
                </motion.p>
            </div>
        </section>
    );
}
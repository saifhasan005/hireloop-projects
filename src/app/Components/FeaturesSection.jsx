"use client";

import {
    Magnifier,
    ChartLine,
    Briefcase,
    BookmarkFill,
    Target,
    FileText,
    PersonWorker,
    GraduationCap,
} from "@gravity-ui/icons";

const features = [
    {
        icon: <Magnifier width={20} height={20} />,
        title: "Smart Search",
        description: "Find your ideal job with advanced filters.",
    },
    {
        icon: <ChartLine width={20} height={20} />,
        title: "Salary Insights",
        description: "Get real salary data to negotiate confidently.",
    },
    {
        icon: <Briefcase width={20} height={20} />,
        title: "Top Companies",
        description: "Apply to vetted companies that are hiring.",
    },
    {
        icon: <BookmarkFill width={20} height={20} />,
        title: "Saved Jobs",
        description: "Manage apps & favorites on your dashboard.",
    },
    {
        icon: <Target width={20} height={20} />,
        title: "One-Click Apply",
        description: "Simplify your job applications for an easier process!",
    },
    {
        icon: <FileText width={20} height={20} />,
        title: "Resume Builder",
        description: "Create professional resumes with modern templates.",
    },
    {
        icon: <PersonWorker width={20} height={20} />,
        title: "Skill-Based Matching",
        description: "Discover jobs that match your skills and experience.",
    },
    {
        icon: <GraduationCap width={20} height={20} />,
        title: "Career Growth Resources",
        description: "Boost your career with quick interview tips.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative overflow-hidden bg-[#0B0B0F] py-28 text-white">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">

                {/* Badge */}
                <div className="mb-6 flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-violet-500" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                        Features Job
                    </span>
                    <span className="h-px w-8 bg-violet-500" />
                </div>

                {/* Heading */}
                <h2 className="mb-16 text-center text-4xl font-bold leading-tight text-white md:text-5xl">
                    Everything you need
                    <br />
                    to succeed
                </h2>

                {/* Grid */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition duration-300 hover:border-violet-500/20 hover:bg-white/[0.06]"
                        >
                            {/* Hover glow */}
                            <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-violet-600/0 blur-2xl transition duration-300 group-hover:bg-violet-600/10" />

                            {/* Icon */}
                            <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-400">
                                {feature.icon}
                            </div>

                            {/* Text */}
                            <h3 className="relative z-10 mb-2 text-sm font-semibold text-white">
                                {feature.title}
                            </h3>
                            <p className="relative z-10 text-xs leading-relaxed text-gray-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input } from "@heroui/react";
import { Eye, EyeSlash, Person, At, Lock, ArrowLeft, LogoGithub } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!form.name.trim()) return setError("Name is required.");
    if (!form.email.trim()) return setError("Email is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("Enter a valid email address.");
    if (form.password.length < 8) return setError("Password must be at least 8 characters.");

    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (error) {
      setError(error.message || "Something went wrong. Please try again.");
      return;
    }

    setSuccess("Account created successfully! Redirecting...");
    setTimeout(() => router.push("/"), 2000);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0B0F] px-4">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[100px]" />

      <div className="relative z-10 w-full max-w-md">

        {/* Back to Sign In */}
        <Link
          href="/auth/signin"
          className="mb-8 flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft width={16} height={16} />
          Back to Sign In
        </Link>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

          {/* Logo */}
          <Link href="/" className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-lg">
              <span className="text-lg font-bold text-white">P</span>
            </div>
            <span className="text-lg font-bold text-white">Hire Loop</span>
          </Link>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">Create your account</h1>
            <p className="mt-1 text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-violet-400 transition hover:text-violet-300">
                Sign in
              </Link>
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Full Name</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <Person width={16} height={16} />
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition focus:border-violet-500/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-violet-500/30"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Address</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <At width={16} height={16} />
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition focus:border-violet-500/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-violet-500/30"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <Lock width={16} height={16} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-12 text-sm text-white placeholder-gray-500 outline-none transition focus:border-violet-500/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-violet-500/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-300"
                >
                  {showPassword
                    ? <EyeSlash width={16} height={16} />
                    : <Eye width={16} height={16} />
                  }
                </button>
              </div>

              {/* Password Strength Hint */}
              {form.password.length > 0 && (
                <p className={`text-xs ${form.password.length < 8 ? "text-red-400" : "text-emerald-400"}`}>
                  {form.password.length < 8
                    ? `${8 - form.password.length} more characters needed`
                    : "✓ Password looks good"
                  }
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-gray-500">or</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Terms */}
          <p className="text-center text-xs text-gray-500">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-violet-400 hover:text-violet-300">Terms</Link>
            {" & "}
            <Link href="/privacy" className="text-violet-400 hover:text-violet-300">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
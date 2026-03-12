"use client";

import { useState } from "react";
import { X, User, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const API_BASE = "";

interface ProjectRequestFormProps {
    isOpen: boolean;
    onClose: () => void;
    serviceTitle: string;
}

export default function ProjectRequestForm({
    isOpen,
    onClose,
    serviceTitle,
}: ProjectRequestFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("serviceTitle", serviceTitle);

        try {
            // Front-end validation
            const email = formData.get("email") as string;
            const phone = formData.get("phone") as string;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                toast.error("Please enter a valid email address.");
                setIsSubmitting(false);
                return;
            }

            if (phone.length < 8) {
                toast.error("Please enter a valid phone number.");
                setIsSubmitting(false);
                return;
            }

            const res = await fetch(`${API_BASE}/api/project-request`, {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            console.log("📥 API Response:", data);

            if (data.success) {
                console.log("✅ Email SMTP Debug Data:", data.debug);
                toast.success("Project request sent successfully!");
                form.reset();
                onClose();
            } else {
                toast.error(data.message || "Something went wrong.");
            }
        } catch {
            toast.error("Failed to send request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 transition-all duration-300"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-white/20 animate-in fade-in zoom-in-95 duration-300 font-sora"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Dark header */}
                <div className="relative overflow-hidden bg-slate-900 px-8 py-8 text-white">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-[#2776ea]/20 blur-3xl" />
                    <div className="relative z-10 flex items-start justify-between">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight mb-1">
                                Start Project
                            </h3>
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <span>Consulting for:</span>
                                <span className="text-[#2776ea] font-bold bg-[#2776ea]/10 px-2 py-0.5 rounded text-xs uppercase tracking-wide">
                                    {serviceTitle}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="rounded-full bg-white/10 p-2 text-slate-400 hover:bg-white/20 hover:text-white transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Form body */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                Full Name
                            </label>
                            <div className="relative group">
                                <User className="absolute left-4 top-3.5 h-4 w-4 text-slate-400 group-focus-within:text-[#2776ea] transition-colors" />
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full rounded-xl bg-slate-50 border border-slate-100 pl-11 p-3 text-sm focus:bg-white focus:border-[#2776ea] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                    Email
                                </label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-3.5 h-4 w-4 text-slate-400 group-focus-within:text-[#2776ea] transition-colors" />
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full rounded-xl bg-slate-50 border border-slate-100 pl-11 p-3 text-sm focus:bg-white focus:border-[#2776ea] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                    Phone
                                </label>
                                <div className="relative group">
                                    <Phone className="absolute left-4 top-3.5 h-4 w-4 text-slate-400 group-focus-within:text-[#2776ea] transition-colors" />
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder="+91.."
                                        className="w-full rounded-xl bg-slate-50 border border-slate-100 pl-11 p-3 text-sm focus:bg-white focus:border-[#2776ea] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                Project Goals
                            </label>
                            <div className="relative group">
                                <MessageSquare className="absolute left-4 top-3.5 h-4 w-4 text-slate-400 group-focus-within:text-[#2776ea] transition-colors" />
                                <textarea
                                    name="projectGoals"
                                    rows={3}
                                    placeholder="Tell us about your requirements.."
                                    className="w-full rounded-xl bg-slate-50 border border-slate-100 pl-11 p-3 text-sm focus:bg-white focus:border-[#2776ea] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none font-medium text-slate-700 placeholder:text-slate-400"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full flex items-center justify-center gap-2 rounded-xl bg-[#2776ea] py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-slate-900 hover:shadow-slate-900/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Processing..." : "Send Request"}{" "}
                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </button>
                </form>
            </div>
        </div>
    );
}

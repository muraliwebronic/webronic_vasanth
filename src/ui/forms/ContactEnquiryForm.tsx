"use client";

import { useState } from "react";
import { X, Send, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { servicesRegistry } from "@/app/service/data/servicesRegistry";

const API_BASE = "";

// Derive dropdown options from the services registry
const serviceOptions = Object.values(servicesRegistry).map(
    (s) => s.preview.title
);

interface ContactEnquiryFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactEnquiryForm({
    isOpen,
    onClose,
}: ContactEnquiryFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            // Front-end validation
            const email = formData.get("email") as string;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                toast.error("Please enter a valid email address.");
                setIsSubmitting(false);
                return;
            }

            const res = await fetch(`${API_BASE}/api/contact`, {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            console.log("📥 API Response:", data);

            if (data.success) {
                console.log("✅ Email SMTP Debug Data:", data.debug);
                toast.success("Message sent successfully!");
                form.reset();
                onClose();
            } else {
                toast.error(data.message || "Something went wrong.");
            }
        } catch {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sora">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal container */}
            <div className="relative w-full lg:w-1/3 bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Modal Header */}
                <div className="px-8 pt-8 pb-6 border-b border-slate-100 flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-8 w-8 rounded-lg bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea]">
                                <Send size={16} />
                            </div>
                            <span className="text-caption font-black uppercase tracking-widest text-[#2776ea]">
                                Priority Channel
                            </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">
                            Get in Touch
                        </h3>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-caption font-bold uppercase tracking-widest text-slate-400 ml-1">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-caption font-bold uppercase tracking-widest text-slate-400 ml-1">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email@company.com"
                                    required
                                    className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-caption font-bold uppercase tracking-widest text-slate-400 ml-1">
                                Requirement Type
                            </label>
                            <div className="relative">
                                <select
                                    name="requirementType"
                                    className="w-full appearance-none rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors cursor-pointer"
                                >
                                    {serviceOptions.map((title) => (
                                        <option key={title} value={title}>
                                            {title}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <ArrowRight size={14} className="rotate-90" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-caption font-bold uppercase tracking-widest text-slate-400 ml-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={3}
                                placeholder="Tell us about your project..."
                                required
                                className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-3.5 text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:border-[#2776ea] focus:bg-white focus:outline-none transition-colors resize-none"
                            />
                        </div>

                        <button
                            disabled={isSubmitting}
                            className="w-full mt-4 bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-caption hover:bg-[#76ea27] hover:text-slate-900 transition-all shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Processing..." : "Submit Request"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

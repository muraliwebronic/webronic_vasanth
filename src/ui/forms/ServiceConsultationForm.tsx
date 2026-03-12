"use client";

import { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

const API_BASE = "";

interface ServiceConsultationFormProps {
    isOpen: boolean;
    onClose: () => void;
    serviceTitle: string;
}

export default function ServiceConsultationForm({
    isOpen,
    onClose,
    serviceTitle,
}: ServiceConsultationFormProps) {
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
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                toast.error("Please enter a valid email address.");
                setIsSubmitting(false);
                return;
            }

            const res = await fetch(`${API_BASE}/api/service-consultation`, {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            console.log("📥 API Response:", data);

            if (data.success) {
                console.log("✅ Email SMTP Debug Data:", data.debug);
                toast.success("Consultation request sent successfully!");
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
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 font-sora"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-[2rem] w-full lg:w-1/3 p-8 md:p-10 shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2776ea]/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none" />

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 bg-slate-50 rounded-full hover:bg-slate-200 transition-colors z-50 cursor-pointer"
                >
                    <X size={20} className="text-slate-600" />
                </button>

                <div className="relative z-10">
                    <h3 className="text-h2 font-black text-slate-900 mb-2">
                        Let&apos;s Build This
                    </h3>
                    <p className="text-slate-500 mb-8 font-medium text-body">
                        Inquiring about:{" "}
                        <span className="text-[#2776ea] font-bold">{serviceTitle}</span>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-caption font-bold uppercase tracking-widest text-slate-400 mb-2">
                                Work Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2776ea] focus:ring-1 focus:ring-[#2776ea] font-medium text-body text-slate-800 transition-all"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-caption font-bold uppercase tracking-widest text-slate-400 mb-2">
                                Project Details
                            </label>
                            <textarea
                                name="projectDetails"
                                rows={4}
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2776ea] focus:ring-1 focus:ring-[#2776ea] font-medium text-body text-slate-800 transition-all resize-none"
                                placeholder="Briefly describe your requirements.."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-[#2776ea] text-white text-menu font-bold rounded-xl hover:bg-[#1a65d8] transition-all shadow-lg shadow-[#2776ea]/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Processing..." : "Request Consultation"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

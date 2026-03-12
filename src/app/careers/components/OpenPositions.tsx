"use client";

import { useState } from "react";
import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";
import ApplyModal from "@/components/common/career/ApplyModal";
import {
  ChevronDown,
  MapPin,
  Briefcase,
  IndianRupee,
} from "lucide-react";

export default function OpenPositions() {
  const { openPositions } = CAREERS_DATA;

  const [activeCat, setActiveCat] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  // State for the Apply Modal
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const jobs =
    activeCat === "All"
      ? openPositions.jobs
      : openPositions.jobs.filter((j) => j.category === activeCat);

  return (
    <section className="bg-slate-50 container-pd py-24 font-sora">
      {/* --- MOUNT THE MODAL --- */}
      <ApplyModal
        open={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      <div className=" mx-auto px-6 max-w-6xl">

        <SectionHeader
          badge={openPositions.header.badge}
          title={openPositions.header.title}
          description={openPositions.header.description}
          centered
          className="mb-14"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {openPositions.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition
                ${activeCat === cat
                  ? "bg-[#2776ea] text-white shadow"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#2776ea]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {jobs.map((job) => {
            const isOpen = expanded === job.id;

            return (
              <div
                key={job.id}
                className={`rounded-2xl bg-white border transition-all
                  ${isOpen
                    ? "border-[#2776ea] shadow-lg"
                    : "border-slate-100 hover:border-slate-200"
                  }`}
              >
                {/* Card Header */}
                <button
                  onClick={() => setExpanded(isOpen ? null : job.id)}
                  className="w-full p-6 flex items-start justify-between text-left"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2776ea]">
                      {job.category}
                    </span>

                    <h3 className="text-lg font-black text-slate-900 mt-1">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 mt-3 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={12} /> {job.experience}
                      </span>
                      {job.salary && (
                        <span className="flex items-center gap-1">
                          <IndianRupee size={12} /> {job.salary}
                        </span>
                      )}
                    </div>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`mt-1 transition ${isOpen ? "rotate-180 text-[#2776ea]" : "text-slate-400"
                      }`}
                  />
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="px-6 pb-8 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                    {/* Description */}
                    <p className="text-sm text-slate-600 mt-6 mb-6">
                      {job.description}
                    </p>

                    {/* Projects */}
                    {job.details.projects && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase text-slate-900 mb-2">
                          Projects You’ll Work On
                        </h4>
                        <p className="text-sm text-slate-600">
                          {job.details.projects}
                        </p>
                      </div>
                    )}

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase text-slate-900 mb-3">
                        What You Will Do
                      </h4>
                      <ul className="space-y-2">
                        {job.details.whatYouWillDo.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-600 flex gap-2"
                          >
                            <span className="text-[#2776ea]">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase text-slate-900 mb-3">
                        Core Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded border border-slate-200 text-xs font-semibold text-slate-600 bg-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Nice to Have */}
                    {job.details.niceToHave && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase text-slate-900 mb-3">
                          Nice to Have
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.details.niceToHave.map((item, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 rounded bg-slate-50 text-xs font-medium text-slate-600"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Certifications */}
                    {job.details.certifications && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase text-slate-900 mb-2">
                          Certifications
                        </h4>
                        <p className="text-sm text-slate-600">
                          {job.details.certifications}
                        </p>
                      </div>
                    )}

                    {/* Intern Conversion */}
                    {job.details.conversion && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase text-slate-900 mb-2">
                          Conversion Opportunity
                        </h4>
                        <p className="text-sm text-slate-600">
                          {job.details.conversion}
                        </p>
                      </div>
                    )}

                    {/* CTA - Now opens the Modal */}
                    <button
                      onClick={() => setIsApplyModalOpen(true)}
                      className="mt-4 px-6 py-3 bg-[#2776ea] text-white rounded-xl font-bold text-sm hover:shadow-lg hover:bg-blue-600 transition"
                    >
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
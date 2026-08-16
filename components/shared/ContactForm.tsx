"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

interface ContactFormProps {
  locale: string;
  dict: Dictionary;
}

export default function ContactForm({ locale, dict }: ContactFormProps) {
  const isRtl = locale === "ar";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", product: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `w-full px-4 py-3 bg-white border border-sky-200 rounded text-sm text-[#0c1a2e] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all ${isRtl ? "text-right" : ""}`;
  const labelClass = `block text-xs font-semibold text-slate-600 mb-1.5 ${isRtl ? "text-right" : ""}`;

  return (
    <div className="bg-[#f0f9ff] border border-sky-200 rounded p-7 lg:p-8">
      <h2 className={`font-display text-2xl font-bold text-[#0c1a2e] mb-6 ${isRtl ? "text-right" : ""}`}>
        {dict.enquiry.cta}
      </h2>

      {status === "success" ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold text-[#0c1a2e] mb-2">{dict.contact.success}</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cf-name" className={labelClass}>{dict.contact.name} *</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={dict.contact.name}
                className={inputClass}
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>
            <div>
              <label htmlFor="cf-company" className={labelClass}>{dict.contact.company}</label>
              <input
                id="cf-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder={dict.contact.company}
                className={inputClass}
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cf-email" className={labelClass}>{dict.contact.email} *</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={dict.contact.email}
                className={inputClass}
                dir="ltr"
              />
            </div>
            <div>
              <label htmlFor="cf-phone" className={labelClass}>{dict.contact.phone}</label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 XX XXX XXXX"
                className={inputClass}
                dir="ltr"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cf-product" className={labelClass}>{dict.contact.product}</label>
            <input
              id="cf-product"
              name="product"
              type="text"
              value={formData.product}
              onChange={handleChange}
              placeholder={dict.contact.product}
              className={inputClass}
              dir={isRtl ? "rtl" : "ltr"}
            />
          </div>

          <div>
            <label htmlFor="cf-message" className={labelClass}>{dict.contact.message}</label>
            <textarea
              id="cf-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={dict.contact.message}
              className={`${inputClass} resize-none`}
              dir={isRtl ? "rtl" : "ltr"}
            />
          </div>

          {status === "error" && (
            <p className={`text-red-600 text-sm ${isRtl ? "text-right" : ""}`}>{dict.contact.error}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? dict.contact.submitting : dict.contact.submit}
          </button>
        </form>
      )}
    </div>
  );
}

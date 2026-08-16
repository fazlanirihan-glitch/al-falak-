"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface ContactFormProps {
  locale: string;
  dict: Dictionary;
  defaultProduct?: string;
}

export default function ContactForm({ locale, dict, defaultProduct = "" }: ContactFormProps) {
  const isRtl = locale === "ar";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: defaultProduct,
    quantity: "",
    industry: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          industry: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `w-full px-4 py-2.5 bg-white border border-[#bae6fd] rounded text-sm text-[#0c1a2e] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] transition-all ${isRtl ? "text-right" : "text-left"}`;
  const labelClass = `block text-xs font-semibold text-slate-700 mb-1 ${isRtl ? "text-right" : "text-left"}`;

  return (
    <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded p-6 sm:p-8 card-industrial">
      <div className={`mb-6 ${isRtl ? "text-right" : "text-left"}`}>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0c1a2e]">
          {isRtl ? "طلب تسعير ومواصفات فنية (RFQ)" : "Request for Quotation (RFQ)"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          {isRtl
            ? "املأ النموذج أدناه وسيقوم مهندسو المبيعات لدينا بالرد بعرض أسعار رسمي ومواصفات دقيقة."
            : "Complete the form below to receive a formal quotation and technical data sheets from our engineering team."}
        </p>
      </div>

      {status === "success" ? (
        <div className="text-center py-10 px-4 bg-white border border-green-200 rounded">
          <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-[#0c1a2e] mb-1.5">
            {isRtl ? "تم استلام طلبكم بنجاح" : "RFQ Received Successfully"}
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            {isRtl
              ? "شكراً لتواصلكم مع شركة الفلك. سيقوم فريق المبيعات والتوريد بالتواصل معكم في أقرب وقت."
              : "Thank you for contacting AL FALAK. Our engineering procurement team will review your specifications and reply shortly."}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cf-name" className={labelClass}>
                {isRtl ? "الاسم الكامل *" : "Full Name *"}
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={isRtl ? "محمد أحمد" : "John Smith"}
                className={inputClass}
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>
            <div>
              <label htmlFor="cf-company" className={labelClass}>
                {isRtl ? "اسم الشركة أو المؤسسة" : "Company / Organization"}
              </label>
              <input
                id="cf-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder={isRtl ? "شركة الهندسة والمقاولات" : "Industrial Engineering LLC"}
                className={inputClass}
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cf-email" className={labelClass}>
                {isRtl ? "البريد الإلكتروني *" : "Business Email *"}
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="procurement@company.ae"
                className={inputClass}
                dir="ltr"
              />
            </div>
            <div>
              <label htmlFor="cf-phone" className={labelClass}>
                {isRtl ? "رقم الهاتف / الواتساب *" : "Phone / Mobile Number *"}
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 50 XXX XXXX"
                className={inputClass}
                dir="ltr"
              />
            </div>
          </div>

          {/* Row 3: Product & Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cf-product" className={labelClass}>
                {isRtl ? "المنتج أو كود القطعة" : "Product / Part Number / System"}
              </label>
              <input
                id="cf-product"
                name="product"
                type="text"
                value={formData.product}
                onChange={handleChange}
                placeholder={isRtl ? "مثال: أسطوانة هوائية ISO أو مضخة AODD" : "e.g. ISO Pneumatic Cylinder / AODD Pump"}
                className={inputClass}
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>

            <div>
              <label htmlFor="cf-quantity" className={labelClass}>
                {isRtl ? "الكمية المطلوبة (اختياري)" : "Required Quantity (Optional)"}
              </label>
              <input
                id="cf-quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleChange}
                placeholder={isRtl ? "مثال: 5 وحدات" : "e.g. 10 units / Batch"}
                className={inputClass}
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>
          </div>

          {/* Row 4: Message */}
          <div>
            <label htmlFor="cf-message" className={labelClass}>
              {isRtl ? "تفاصيل المتطلبات والمواصفات" : "Requirements & Technical Specifications"}
            </label>
            <textarea
              id="cf-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder={
                isRtl
                  ? "يرجى ذكر الضغط، الحجم، مادة التصنيع، أو أية متطلبات خاصة للمشروع..."
                  : "Please specify pressure rating, port sizes, body materials, or project timeline..."
              }
              className={`${inputClass} resize-none`}
              dir={isRtl ? "rtl" : "ltr"}
            />
          </div>

          {status === "error" && (
            <div className={`p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{dict.contact.error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full justify-center py-3 text-sm font-bold shadow-sm inline-flex items-center gap-2 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{status === "submitting" ? dict.contact.submitting : (isRtl ? "إرسال طلب التسعير الرسمي" : "Send Formal RFQ")}</span>
          </button>
        </form>
      )}
    </div>
  );
}

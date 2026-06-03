"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
      label: "Email us",
      value: "hello@designagency.co",
    },
    {
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
      label: "Call us",
      value: "+1 (555) 000-AXIOM",
    },
    {
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
      label: "Studio",
      value: "San Francisco, CA",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 bg-ink overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-gold/8 blur-[80px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">Get In Touch</span>
          </div>
          <h2 className="reveal font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight">
            Let's Build
            <br />
            <em className="text-gold not-italic">Something Great.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-12">
            <p className="reveal text-muted leading-relaxed">
              Ready to transform your digital presence? We'd love to hear about your project.
              Drop us a message and we'll get back to you within 24 hours.
            </p>

            <div className="reveal delay-200 space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-border flex-shrink-0 flex items-center justify-center text-gold mt-0.5">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-1">
                      {info.label}
                    </div>
                    <div className="text-cream text-sm">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="reveal delay-300">
              <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-4">Follow Us</div>
              <div className="flex gap-3">
                {["Twitter", "LinkedIn", "Dribbble", "Behance"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 border border-border flex items-center justify-center text-muted text-xs hover:border-gold hover:text-gold transition-all duration-300"
                    title={social}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal delay-200 lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 border border-gold flex items-center justify-center mb-6 animate-float">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl text-cream mb-4">Message Sent!</h3>
                <p className="text-muted max-w-xs leading-relaxed">
                  Thank you for reaching out. We'll review your message and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-2.5 border border-border text-sm text-muted hover:border-gold hover:text-gold transition-all duration-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block font-mono text-[11px] tracking-widest uppercase text-muted mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`form-input w-full px-4 py-3.5 text-cream placeholder-muted/50 text-sm rounded-none ${
                      errors.name ? "border-red-500/60" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-red-400 text-xs font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-[11px] tracking-widest uppercase text-muted mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={`form-input w-full px-4 py-3.5 text-cream placeholder-muted/50 text-sm rounded-none ${
                      errors.email ? "border-red-500/60" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-red-400 text-xs font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[11px] tracking-widest uppercase text-muted mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`form-input w-full px-4 py-3.5 text-cream placeholder-muted/50 text-sm rounded-none resize-none ${
                      errors.message ? "border-red-500/60" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-red-400 text-xs font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full py-4 bg-gold text-ink font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

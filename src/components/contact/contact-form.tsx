"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Send, Loader2 } from "lucide-react";
import { sendContactForm } from "@/app/contact/actions";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const result = await sendContactForm(formData);

    if (result.success) {
      setStatus("sent");
    } else {
      setErrorMsg(result.error || "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <FadeIn>
        <div className="bg-surface rounded-lg p-8 border border-border text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Send className="text-primary" size={20} />
          </div>
          <h3 className="font-heading text-lg font-semibold text-text">
            Message Sent
          </h3>
          <p className="mt-2 text-sm text-text-light">
            Thank you for reaching out. We&apos;ll get back to you shortly.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text mb-1.5"
          >
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-light/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text mb-1.5"
          >
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-light/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-text mb-1.5"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-light/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
            placeholder="+1 234 567 8900"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text mb-1.5"
          >
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-light/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
            placeholder="How can we help?"
          />
        </div>
        {status === "error" && (
          <p className="text-sm text-red-600">{errorMsg}</p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-primary-dark transition-colors disabled:opacity-60"
        >
          {status === "sending" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Send size={16} />
          )}
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </FadeIn>
  );
}

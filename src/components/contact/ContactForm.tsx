"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  recipientEmail: string;
}

export function ContactForm({ recipientEmail }: ContactFormProps) {
  const [name, setName] = useState("");
  const [emailOrOrg, setEmailOrOrg] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!emailOrOrg.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address or organization.");
      return;
    }

    if (!message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a message.");
      return;
    }

    setStatus("success");
    setErrorMessage("");

    const subject = `Portfolio Contact — ${name.trim()}`;
    const body = `Name: ${name.trim()}\nOrganization / Email: ${emailOrOrg.trim()}\n\nMessage:\n${message.trim()}`;

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-950/60 border border-red-800/80 text-xs font-mono text-red-300">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {status === "success" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-xs font-mono text-emerald-300">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
          <span>Opening your default email client to send message...</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="contact-name"
            className="text-xs font-mono text-slate-300 block"
          >
            Full Name <span className="text-sky-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-3 py-2 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="contact-email"
            className="text-xs font-mono text-slate-300 block"
          >
            Organization / Email <span className="text-sky-400">*</span>
          </label>
          <input
            id="contact-email"
            type="text"
            required
            value={emailOrOrg}
            onChange={(e) => setEmailOrOrg(e.target.value)}
            placeholder="you@company.com"
            className="w-full px-3 py-2 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="contact-message"
          className="text-xs font-mono text-slate-300 block"
        >
          Message <span className="text-sky-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message regarding network engineering, NOC operations, or security opportunities..."
          className="w-full px-3 py-2 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
        />
      </div>

      <Button
        variant="primary"
        size="sm"
        type="submit"
        icon={<Send className="w-3.5 h-3.5" />}
      >
        Send Message
      </Button>
    </form>
  );
}

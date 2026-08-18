"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  formEndpoint?: string; // Formspree endpoint, e.g. https://formspree.io/f/XXXXXXXX
}

export function ContactForm({ formEndpoint }: ContactFormProps) {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validateEmail(addr: string) {
    // Simple RFC 5322-ish regex for client-side validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addr);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");

    if (!name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!validateEmail(email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a message.");
      return;
    }

    if (!formEndpoint) {
      setStatus("error");
      setErrorMessage("Form submission endpoint is not configured. Please provide a Formspree endpoint to enable form submissions.");
      return;
    }

    // Proceed to submit to Formspree
    setStatus("sending");

    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        organization: organization.trim(),
        message: message.trim(),
      };

      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        // Attempt to extract a helpful message from Formspree's response body
        let bodyText: string;
        try {
          const contentType = res.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            const json = await res.json();
            // stringify to preserve structure in logs
            bodyText = JSON.stringify(json);
          } else {
            bodyText = await res.text();
          }
        } catch (parseErr) {
          bodyText = `Unable to parse response body: ${String(parseErr)}`;
        }

        // Log detailed status and body to aid debugging in the browser console
        console.error("Formspree response error:", {
          status: res.status,
          statusText: res.statusText,
          body: bodyText,
        });

        setStatus("error");
        setErrorMessage("Unable to send your message right now. Please try again or contact directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Unable to send your message right now. Please try again or contact directly.");
      console.error(err);
    }
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
          <span>Message sent successfully. Thank you for reaching out. I&apos;ll get back to you soon.</span>
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
            htmlFor="contact-organization"
            className="text-xs font-mono text-slate-300 block"
          >
            Organization
          </label>
          <input
            id="contact-organization"
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Company (optional)"
            className="w-full px-3 py-2 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="contact-email"
          className="text-xs font-mono text-slate-300 block"
        >
          Email <span className="text-sky-400">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full px-3 py-2 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
        />
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
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, Menu, X, FileText, Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "Learning", href: "/#learning" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 cyber-glass border-b border-slate-800/80">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-600/50 flex items-center justify-center text-sky-400 group-hover:border-sky-400 transition-colors">
              <Shield className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Network Engineer | Cybersecurity & OT Security
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-sky-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href={profileData.contact.resumeUrl}
              external
              icon={<FileText className="w-3.5 h-3.5 text-slate-400" />}
            >
              Resume
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="/#contact"
              icon={<Mail className="w-3.5 h-3.5" />}
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 focus:outline-none focus:ring-1 focus:ring-sky-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800 space-y-2">
            <nav className="space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-sky-300 hover:bg-slate-800/50"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-3 flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                href={profileData.contact.resumeUrl}
                external
                icon={<FileText className="w-3.5 h-3.5" />}
              >
                Resume
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="/#contact"
                icon={<Mail className="w-3.5 h-3.5" />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

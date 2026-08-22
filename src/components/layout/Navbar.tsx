"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X, FileText, Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection based on actual DOM position
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";
      
      const domElements = sections
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return { id, top: el.getBoundingClientRect().top + window.scrollY };
        })
        .filter((item) => item !== null)
        .sort((a, b) => a!.top - b!.top);

      for (const item of domElements) {
        if (window.scrollY >= item!.top - 200) {
          current = item!.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // Re-run if path changes

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2" 
          : "py-4"
      }`}
    >
      <Container>
        <div 
          className={`relative flex items-center justify-between transition-all duration-500 mx-auto max-w-7xl
            ${scrolled 
              ? "h-14 px-4 sm:px-6 rounded-2xl bg-[#0B132B]/70 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
              : "h-16 px-0 bg-transparent border-transparent"
            }
          `}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className={`w-8 h-8 rounded-lg bg-cyan-950/40 border flex items-center justify-center transition-all duration-300 ${scrolled ? 'border-cyan-500/30 text-cyan-400' : 'border-slate-700 text-slate-300'} group-hover:border-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,245,212,0.3)]`}>
              <Shield className="w-4 h-4" />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="text-sm font-bold tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors font-display">
                {profileData.name}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = 
                activeSection === link.href.substring(1) || 
                (pathname?.startsWith("/case-studies") && link.href === "#case-studies");
              return (
                <Link
                  key={link.name}
                  href={`/${link.href}`}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive 
                      ? "text-cyan-300 bg-cyan-950/30" 
                      : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,245,212,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href={profileData.contact.resumeUrl}
              external
              icon={<FileText className="w-3.5 h-3.5 text-slate-400" />}
              className="hover:shadow-[0_0_15px_rgba(0,168,255,0.2)] hover:border-electric-blue transition-all"
            >
              Resume
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="/#contact"
              icon={<Mail className="w-3.5 h-3.5" />}
              className="shadow-[0_0_15px_rgba(0,245,212,0.2)] hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] transition-all"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800/80 focus:outline-none transition-colors"
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
          <div className="lg:hidden mt-4 p-4 rounded-2xl bg-[#0B132B]/95 backdrop-blur-xl border border-white/10 shadow-2xl space-y-2">
            <nav className="space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = 
                  activeSection === link.href.substring(1) || 
                  (pathname?.startsWith("/case-studies") && link.href === "#case-studies");
                return (
                  <Link
                    key={link.name}
                    href={`/${link.href}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-cyan-300 bg-cyan-950/30"
                        : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
              <Button
                variant="outline"
                size="sm"
                href={profileData.contact.resumeUrl}
                external
                icon={<FileText className="w-3.5 h-3.5" />}
                className="w-full justify-center"
              >
                Resume
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="/#contact"
                icon={<Mail className="w-3.5 h-3.5" />}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
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

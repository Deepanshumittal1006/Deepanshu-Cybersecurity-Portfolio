import React from "react";
import Link from "next/link";
import { Shield, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-cyber-surface/60 mt-20">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Column 1: Identity & Positioning */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-sky-950/80 border border-sky-600/50 flex items-center justify-center text-sky-400">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-slate-100">{profileData.name}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Network Engineer with hands-on experience across telecom NOC operations, enterprise network infrastructure, cybersecurity deployment, and industrial OT/IT environments.
            </p>
          </div>

          {/* Column 2: Navigation Shortcuts */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <Link href="/#about" className="hover:text-sky-300 transition-colors">About</Link>
              <Link href="/#experience" className="hover:text-sky-300 transition-colors">Experience</Link>
              <Link href="/#case-studies" className="hover:text-sky-300 transition-colors">Case Studies</Link>
              <Link href="/#learning" className="hover:text-sky-300 transition-colors">Learning Journey</Link>
              <Link href="/#skills" className="hover:text-sky-300 transition-colors">Skills Matrix</Link>
              <Link href="/#contact" className="hover:text-sky-300 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 3: Contact & Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Direct Channels
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-sky-300 transition-colors group"
              >
                <Github className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 ml-auto text-slate-600 group-hover:text-sky-400 transition-colors" />
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-sky-300 transition-colors group"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 ml-auto text-slate-600 group-hover:text-sky-400 transition-colors" />
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-sky-300 transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                <span>{profileData.contact.email}</span>
                <ArrowUpRight className="w-3 h-3 ml-auto text-slate-600 group-hover:text-sky-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Cybersecurity & Network Security Engineering Portfolio</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

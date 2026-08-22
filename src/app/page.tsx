import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield, ArrowRight, FileText, Mail, Activity, Building2, Calendar, Github, Linkedin, ArrowUpRight, MapPin, Award, GraduationCap, CheckCircle2, Clock
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TechTag } from "@/components/ui/TechTag";
import { profileData } from "@/data/profile";
import { careerExperience } from "@/data/experience";
import { caseStudiesData } from "@/data/caseStudies";
import { skillCategoryGroups } from "@/data/skills";
import { certificationsData } from "@/data/certifications";
import { educationData } from "@/data/education";
import { ContactForm } from "@/components/contact/ContactForm";

export default function HomePage() {
  const { currentPosition, previousInternship } = careerExperience;

  return (
    <div className="space-y-32 py-16 sm:py-24">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 z-10 space-y-10 animate-fade-in">
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/5 border border-cyan/20 text-xs font-mono text-cyan shadow-[0_0_15px_rgba(0,245,212,0.1)]">
                  <Shield className="w-4 h-4 text-cyan" />
                  <span>Enterprise & Industrial Infrastructure Defense</span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
                  {profileData.name}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan font-display">
                  {profileData.primaryTitle}
                </p>
              </div>

              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
                {profileData.bio}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {profileData.secondaryTitles.map((title) => (
                  <span
                    key={title}
                    className="px-3 py-1.5 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                  >
                    {title}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6">
                <Button
                  variant="primary"
                  size="md"
                  href="#current-experience"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-[0_0_20px_rgba(0,245,212,0.2)] hover:shadow-[0_0_30px_rgba(0,245,212,0.4)]"
                >
                  View Technical Experience
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={profileData.contact.resumeUrl}
                  external
                  icon={<FileText className="w-4 h-4 text-slate-400 group-hover:text-electric-blue transition-colors" />}
                >
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative flex justify-center mt-12 lg:mt-0">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-spin-slow opacity-20">
                <div className="w-[380px] h-[380px] rounded-full border border-dashed border-cyan/40" />
                <div className="absolute w-[450px] h-[450px] rounded-full border border-electric-blue/30" />
              </div>

              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-square animate-float">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan/20 to-purple/20 rounded-full blur-2xl" />
                
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan shadow-[0_0_15px_rgba(0,245,212,0.5)]">
                  <Image
                    src="/profile.jpg"
                    alt={profileData.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 420px"
                    className="object-cover object-[center_12%] mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-8 bg-[#0B132B]/90 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-lg shadow-2xl animate-float-delayed flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20">
                    <Activity className="w-4 h-4 text-cyan" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-mono text-cyan">Current Role</p>
                    <p className="text-sm font-bold text-white font-display">{profileData.currentRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Stats Strip */}
      <section id="experience-at-a-glance" className="relative z-10">
        <Container>
          <div className="py-8 border-y border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex-1 flex flex-col items-center text-center px-4 w-full pt-4 md:pt-0">
              <span className="text-5xl font-extrabold text-white font-display tracking-tight">
                90<span className="text-cyan">+</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-mono">Fortinet Firewalls</span>
            </div>
            <div className="flex-1 flex flex-col items-center text-center px-4 w-full pt-4 md:pt-0">
              <span className="text-5xl font-extrabold text-white font-display tracking-tight">
                16<span className="text-electric-blue">+</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-mono">Industrial Switches</span>
            </div>
            <div className="flex-1 flex flex-col items-center text-center px-4 w-full pt-4 md:pt-0">
              <span className="text-5xl font-extrabold text-white font-display tracking-tight">
                16<span className="text-cyan">+</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-mono">Data Diodes</span>
            </div>
            <div className="flex-1 flex flex-col items-center text-center px-4 w-full pt-4 md:pt-0">
              <span className="text-5xl font-extrabold text-white font-display tracking-tight">
                16<span className="text-electric-blue">+</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-mono">Bare-metal Servers</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Experience */}
      <section id="experience" className="scroll-mt-32">
        <Container>
          <SectionHeader
            title="Experience"
            subtitle="Active enterprise telecom network operations, L1 troubleshooting, and NMS infrastructure monitoring."
          />

          <div className="relative pl-8 sm:pl-12 border-l border-white/10 ml-2 py-2">
            <div className="absolute top-4 -left-[5px] w-2.5 h-2.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,245,212,0.8)]" />
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {currentPosition.role}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-cyan font-mono text-sm tracking-wide">{currentPosition.organization}</span>
                </div>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="font-mono text-sm tracking-wider text-slate-400">
                  {currentPosition.period}
                </span>
                <span className="inline-flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="text-xs font-mono text-cyan uppercase tracking-wider">{currentPosition.statusBadge}</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-4xl font-light">
              {currentPosition.summary}
            </p>

            <div className="space-y-4 mb-8 max-w-4xl">
              {currentPosition.responsibilities?.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-6 flex justify-center mt-1.5 shrink-0">
                    <span className="w-1.5 h-px bg-cyan group-hover:w-3 transition-all duration-300" />
                  </div>
                  <p className="text-base text-slate-300 group-hover:text-white transition-colors">{resp}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {currentPosition.technologies?.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-mono text-slate-400 border border-white/10 rounded-full bg-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Previous Professional Experience */}
      <section id="previous-experience">
        <Container>
          <div className="relative pl-8 sm:pl-12 border-l border-white/10 ml-2 py-2">
            <div className="absolute top-4 -left-[5px] w-2.5 h-2.5 rounded-full bg-electric-blue shadow-[0_0_10px_rgba(0,168,255,0.8)]" />
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {previousInternship.role}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-electric-blue font-mono text-sm tracking-wide">{previousInternship.organization}</span>
                  <span className="text-white/20">—</span>
                  <span className="text-slate-400 text-sm">{previousInternship.domain}</span>
                </div>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="font-mono text-sm tracking-wider text-slate-400">
                  {previousInternship.period}
                </span>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-4xl font-light">
              {previousInternship.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 border-y border-white/5 py-6">
              {previousInternship.verifiedMetrics?.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-electric-blue shrink-0" />
                  <span className="text-sm font-mono text-slate-200">{metric}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8 max-w-4xl">
              {previousInternship.keyHighlights?.map((highlight, idx) => {
                const parts = highlight.split(" — ");
                const title = parts.length > 1 ? parts[0] : "";
                const description = parts.length > 1 ? parts.slice(1).join(" — ") : highlight;
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-6 flex justify-center mt-2 shrink-0">
                      <span className="w-1.5 h-px bg-electric-blue group-hover:w-3 transition-all duration-300" />
                    </div>
                    <p className="text-base text-slate-300 group-hover:text-white transition-colors">
                      {title && <span className="text-white font-semibold block sm:inline">{title} — </span>}
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-8 pt-8 border-t border-white/5">
              {previousInternship.cards.map((card, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-6 group">
                  <div className="sm:w-1/4 shrink-0">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-2">{card.area}</span>
                  </div>
                  <div className="sm:w-3/4">
                    <h4 className="text-xl font-bold text-white mb-2 font-display">{card.title}</h4>
                    <p className="text-slate-400 mb-4 font-light leading-relaxed">{card.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.technologies.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono text-slate-400 border border-white/10 px-2 py-0.5 rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Expertise Matrix */}
      <section id="skills" className="scroll-mt-32">
        <Container>
          <SectionHeader
            title="Technical Expertise Matrix"
            subtitle="Security, networking, and virtualization competencies mapped to verifiable evidence labels."
          />

          <div className="space-y-16">
            {skillCategoryGroups.map((group) => (
              <div key={group.id} className="relative">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                  {/* Category Title Area */}
                  <div className="md:w-1/3 shrink-0">
                    <h3 className="text-2xl font-extrabold text-white font-display uppercase tracking-wide">
                      {group.categoryTitle}
                    </h3>
                    <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills List */}
                  <div className="md:w-2/3 border-t border-white/10">
                    {group.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-white/5 hover:bg-white/[0.02] hover:pl-4 transition-all duration-300 group"
                      >
                        <span className="text-base font-medium text-slate-200 group-hover:text-cyan transition-colors">
                          {skill.name}
                        </span>
                        <Badge evidenceType={skill.evidence} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Case Studies */}
      <section id="case-studies" className="scroll-mt-32">
        <Container>
          <SectionHeader
            title="Technical Case Studies"
            subtitle="Production and internship-based technical implementations covering network security, OT infrastructure, high availability, and virtualization."
          />

          <div className="flex flex-col border-t border-white/10">
            {caseStudiesData.map((study, idx) => {
              let metricLine = study.teaserMetric || "";
              let desc = study.publicDescription;

              switch (study.slug) {
                case "fortinet":
                  metricLine = "90+ Firewalls | 3 Sites | FortiManager HA";
                  break;
                case "hirschmann":
                  metricLine = "16+ Switches | Layer 3 Routing | VRRP";
                  break;
                case "data-diode":
                  metricLine = "16+ Data Diodes | Unidirectional OT→IT | Static ARP";
                  break;
                case "kvm":
                  metricLine = "16+ Servers | KVM/QEMU | Ubuntu Linux";
                  break;
              }

              return (
                <div key={study.slug} className="py-12 border-b border-white/10 flex flex-col md:flex-row gap-8 lg:gap-16 group relative">
                  {/* Hover visual accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="md:w-1/3 shrink-0 md:pl-6">
                    <span className="text-slate-500 font-mono text-xs block mb-4 uppercase tracking-widest">
                      {study.category}
                    </span>
                    <h3 className="text-3xl font-extrabold text-white font-display group-hover:text-cyan transition-colors leading-tight">
                      {study.title}
                    </h3>
                  </div>

                  <div className="md:w-2/3">
                    {metricLine && (
                      <div className="text-sm font-mono font-semibold text-cyan mb-4">
                        {metricLine}
                      </div>
                    )}
                    <p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
                      {desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="text-[11px] font-mono text-slate-400 border border-white/10 px-2.5 py-1 rounded-sm">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 5 && (
                        <span className="text-[11px] font-mono text-slate-600 self-center px-2">
                          +{study.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-mono font-medium text-white group-hover:text-cyan transition-colors"
                    >
                      <span className="uppercase tracking-widest text-xs">Read Full Report</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section id="certifications" className="scroll-mt-32">
        <Container>
          <SectionHeader
            title="Certifications & Training"
            subtitle="Industry-recognized credentials, vendor certifications, and technical practitioner training."
          />

          <div className="relative pl-6 sm:pl-10 border-l border-white/10 ml-2">
            {certificationsData.map((cert, idx) => (
              <div key={cert.id} className="relative mb-12 last:mb-0 group">
                <div className="absolute top-1.5 -left-[30px] sm:-left-[46px] w-2.5 h-2.5 rounded-full bg-electric-blue shadow-[0_0_10px_rgba(0,168,255,0.5)] group-hover:scale-150 transition-transform" />
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">{cert.title}</h3>
                    <p className="text-sm font-mono text-slate-400 mt-2">{cert.issuingBody}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                    <span className="text-sm font-mono text-slate-500">{cert.date}</span>
                    <span
                      className={`text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded-sm border ${
                        cert.status === "Certified"
                          ? "bg-cyan/10 text-cyan border-cyan/30"
                          : cert.status === "Training Completed"
                          ? "bg-electric-blue/10 text-electric-blue border-electric-blue/30"
                          : "bg-purple/10 text-purple-300 border-purple/30"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-32">
        <Container>
          <SectionHeader
            title="Education"
            subtitle="Academic background and engineering degree qualification."
          />

          <div className="relative pl-6 sm:pl-10 border-l border-white/10 ml-2">
            {educationData.map((edu, idx) => (
              <div key={edu.id} className="relative mb-12 last:mb-0 group">
                <div className="absolute top-1.5 -left-[30px] sm:-left-[46px] w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-cyan group-hover:shadow-[0_0_10px_rgba(0,245,212,0.5)] transition-all" />
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">{edu.degree}</h3>
                    <p className="text-sm font-mono text-slate-400 mt-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-slate-500 font-mono">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-sm font-mono text-slate-500">{edu.period}</span>
                  </div>
                </div>
                {edu.details && (
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 pt-4">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Direct Contact */}
      <section id="contact" className="scroll-mt-32 relative py-16 mt-16 border-t border-white/10 overflow-hidden">
        {/* Glows for cinematic closing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan mb-4 block uppercase">
              Next Steps
            </span>
            <div className="relative inline-block mb-6">
              <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white font-display relative z-10">
                Let&apos;s Connect
              </h2>
              {/* Subtle cyan accent/underline/glow matching SectionHeader */}
              <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-cyan shadow-[0_0_12px_rgba(0,245,212,0.8)] rounded-full" />
            </div>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed font-light mt-4">
              Professional inquiries regarding network engineering, cybersecurity deployment, and OT/IT infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            {/* Direct Channels */}
            <div className="space-y-8 lg:border-r lg:border-white/10 lg:pr-16">
              <div className="space-y-6">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan transition-colors group py-4 border-b border-white/5"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan/10 group-hover:border group-hover:border-cyan/30 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm tracking-wide">{profileData.contact.email}</span>
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-electric-blue transition-colors group py-4 border-b border-white/5"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric-blue/10 group-hover:border group-hover:border-electric-blue/30 transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm tracking-wide">GitHub Profile</span>
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan transition-colors group py-4 border-b border-white/5"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan/10 group-hover:border group-hover:border-cyan/30 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm tracking-wide">LinkedIn Network</span>
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div>
              <ContactForm
                formEndpoint={profileData.contact.formspreeEndpoint}
                recipientEmail={profileData.contact.email}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

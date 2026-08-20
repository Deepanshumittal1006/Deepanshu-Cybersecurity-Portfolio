import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ArrowRight,
  FileText,
  Mail,
  Activity,
  Building2,
  Calendar,
  Github,
  Linkedin,
  ArrowUpRight,
  MapPin,
  Award,
  GraduationCap,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/Card";
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
    <div className="space-y-24 py-12 sm:py-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-2 pb-6 sm:py-10">
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Intro text, title, tags, and CTAs (60-65% width on desktop) */}
            <div className="lg:col-span-7 xl:col-span-7 z-10 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/50 text-xs font-mono text-sky-300">
                  <Shield className="w-3.5 h-3.5 text-sky-400" />
                  <span>Enterprise & Industrial Infrastructure Defense</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{profileData.currentRole}</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-50 leading-[1.1]">
                {profileData.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-sky-400 font-mono">
                {profileData.primaryTitle}
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {profileData.bio}
              </p>

              {/* Specialization Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {profileData.secondaryTitles.map((title) => (
                  <span
                    key={title}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                  >
                    {title}
                  </span>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Button
                  variant="primary"
                  size="md"
                  href="#current-experience"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  View Technical Experience
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={profileData.contact.resumeUrl}
                  external
                  icon={<FileText className="w-4 h-4 text-slate-400" />}
                >
                  Download Resume
                </Button>
                <Button
                  variant="ghost"
                  size="md"
                  href="#contact"
                  icon={<Mail className="w-4 h-4 text-slate-400" />}
                >
                  Contact
                </Button>
              </div>
            </div>

            {/* Right Column: Blended Photo with Overlay (35-40% width on desktop) */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end lg:translate-x-2 xl:translate-x-4">
              <div className="relative w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[430px] xl:max-w-[450px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] select-none">
                {/* Profile Image */}
                <Image
                  src="/profile.jpg"
                  alt={profileData.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 330px, (max-width: 1024px) 380px, 450px"
                  className="object-cover object-[center_12%]"
                />

                {/* Seamless Multi-Directional Gradient Masks for Zero Harsh Edges */}
                {/* Left Gradient Fade into dark background */}
                <div className="absolute inset-y-0 left-0 w-28 sm:w-36 lg:w-40 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/70 to-transparent pointer-events-none" />
                {/* Top Gradient Fade */}
                <div className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-[#0B0F17] via-[#0B0F17]/60 to-transparent pointer-events-none" />
                {/* Bottom Gradient Fade */}
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/80 to-transparent pointer-events-none" />
                {/* Right Edge Gradient Fade */}
                <div className="absolute inset-y-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-[#0B0F17] to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Current Professional Experience */}
      <section id="current-experience" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="01"
            title="Current Professional Experience"
            subtitle="Active enterprise telecom network operations, L1 troubleshooting, and NMS infrastructure monitoring."
          />

          <Card variant="elevated" className="space-y-5 border-l-4 border-l-emerald-500">
            {/* Header: Role, Company, Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                    {currentPosition.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-700/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {currentPosition.statusBadge}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-sky-400">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{currentPosition.organization}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800 shrink-0">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{currentPosition.period}</span>
              </div>
            </div>

            {/* One-line Impact / Scope Summary */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {currentPosition.summary}
            </p>

            {/* Key Responsibilities */}
            {currentPosition.responsibilities && currentPosition.responsibilities.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-800/60">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Operational Scope
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                  {currentPosition.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-2.5 rounded-md border border-slate-800/60"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Involved */}
            {currentPosition.technologies && currentPosition.technologies.length > 0 && (
              <div className="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-slate-400 mr-1.5">Technologies:</span>
                {currentPosition.technologies.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
            )}
          </Card>
        </Container>
      </section>

      {/* 3. Experience at a Glance */}
      <section id="experience-at-a-glance" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="02"
            title="Experience at a Glance"
            subtitle="Verified scale of deployed enterprise firewalls, industrial switching, unidirectional data diodes, and virtualization testbeds."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-start space-y-1 hover:border-sky-700/60 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-50 font-mono">
                90+
              </span>
              <span className="text-xs sm:text-sm font-mono text-sky-300 font-medium">
                Fortinet Firewalls
              </span>
              <span className="text-[11px] text-slate-400">3 Sites · FortiManager HA</span>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-start space-y-1 hover:border-sky-700/60 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-50 font-mono">
                16+
              </span>
              <span className="text-xs sm:text-sm font-mono text-sky-300 font-medium">
                Hirschmann Switches
              </span>
              <span className="text-[11px] text-slate-400">Layer 3 · VRRP · HiOS</span>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-start space-y-1 hover:border-sky-700/60 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-50 font-mono">
                16+
              </span>
              <span className="text-xs sm:text-sm font-mono text-sky-300 font-medium">
                Rail Data Diodes
              </span>
              <span className="text-[11px] text-slate-400">Unidirectional OT→IT</span>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-start space-y-1 hover:border-sky-700/60 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-50 font-mono">
                16+
              </span>
              <span className="text-xs sm:text-sm font-mono text-sky-300 font-medium">
                KVM/QEMU Servers
              </span>
              <span className="text-[11px] text-slate-400">Ubuntu Linux · virt-manager</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Previous Professional Experience */}
      <section id="previous-experience" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="03"
            title="Previous Professional Experience"
            subtitle="Enterprise & industrial OT/IT cybersecurity infrastructure internship — verified hardware deployments, high-availability security management, and virtualization."
          />

          <div className="space-y-6">
            {/* Overview & Verified Metrics Card */}
            <Card variant="elevated" className="space-y-5 border-l-4 border-l-sky-500">
              {/* Header: Role, Organization, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                      {previousInternship.role}
                    </h3>
                    <Badge variant="subtle">Enterprise & OT Infrastructure</Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm font-mono">
                    {previousInternship.organization && (
                      <>
                        <div className="flex items-center gap-1.5 text-sky-400">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>{previousInternship.organization}</span>
                        </div>
                        <span className="text-slate-600">·</span>
                      </>
                    )}
                    <span className="text-slate-400">{previousInternship.domain}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{previousInternship.period}</span>
                </div>
              </div>

              {/* One-line Impact / Scope Summary */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {previousInternship.summary}
              </p>

              {/* Verified Production & Deployment Metrics */}
              {previousInternship.verifiedMetrics && previousInternship.verifiedMetrics.length > 0 && (
                <div className="p-3 rounded-lg bg-sky-950/30 border border-sky-900/50 space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-sky-400" />
                    <span>Verified Production & Deployment Scale</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 pt-0.5">
                    {previousInternship.verifiedMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-slate-900/80 border border-slate-800/80 text-xs font-mono text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Technical Highlights & Responsibilities */}
              {previousInternship.keyHighlights && previousInternship.keyHighlights.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    Key Technical Responsibilities & Production Highlights
                  </h4>
                  <ul className="space-y-2 pt-1">
                    {previousInternship.keyHighlights.map((highlight, idx) => {
                      const parts = highlight.split(" — ");
                      const title = parts.length > 1 ? parts[0] : "";
                      const description = parts.length > 1 ? parts.slice(1).join(" — ") : highlight;

                      return (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-2.5 rounded-md border border-slate-800/60 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
                          <span>
                            {title && (
                              <strong className="text-slate-100 font-semibold">
                                {title} —{" "}
                              </strong>
                            )}
                            {description}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </Card>

            {/* 4 Summary Cards (NO case study links to avoid duplication) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {previousInternship.cards.map((card) => (
                <Card
                  key={card.id}
                  variant="default"
                  className="flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-sky-400 bg-sky-950/60 border border-sky-900/50 px-2 py-0.5 rounded">
                        {card.area}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-100">
                      {card.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.summary}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-800/60">
                    <div className="flex flex-wrap gap-1.5">
                      {card.technologies.map((tech) => (
                        <TechTag key={tech} name={tech} />
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Featured Technical Case Studies */}
      <section id="case-studies" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="04"
            title="Featured Technical Case Studies"
            subtitle="Production and internship-based technical implementations covering network security, OT infrastructure, high availability, and virtualization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudiesData.map((study) => {
              let metricLine = study.teaserMetric || "";
              let desc = study.publicDescription;

              switch (study.slug) {
                case "fortinet":
                  metricLine = "90+ Firewalls · 3 Sites · FortiManager HA";
                  desc = "Hands-on technical experience during my Cybersecurity Analyst Internship supporting Fortinet firewall deployment, policy administration, logging, and centralized management through FortiManager.";
                  break;
                case "hirschmann":
                  metricLine = "16+ Switches · Layer 3 Routing · VRRP";
                  desc = "Hands-on technical experience during my Cybersecurity Analyst Internship configuring Hirschmann industrial switching with Layer 2/Layer 3 networking, VLAN segmentation, routing, redundancy, and monitoring.";
                  break;
                case "data-diode":
                  metricLine = "16+ Data Diodes · Unidirectional OT→IT · Static ARP";
                  desc = "Hands-on technical experience during my Cybersecurity Analyst Internship with Rail Data Diode infrastructure enforcing unidirectional OT-to-IT communication and protected network segmentation.";
                  break;
                case "kvm":
                  metricLine = "16+ Servers · KVM/QEMU · Ubuntu Linux";
                  desc = "Hands-on technical experience during my Cybersecurity Analyst Internship provisioning Ubuntu-based KVM/QEMU virtualization with QCOW2 storage, Linux bridge networking, and virt-manager.";
                  break;
              }

              return (
                <Card
                  key={study.slug}
                  variant="interactive"
                  className="flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-sky-400 bg-sky-950/60 border border-sky-900/50 px-2 py-0.5 rounded">
                        {study.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {study.title}
                    </h3>

                    {metricLine && (
                      <div className="text-sm font-mono font-semibold text-sky-300 mt-1">
                        {metricLine}
                      </div>
                    )}

                    <p className="text-sm text-slate-400 leading-snug mt-2">{desc}</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {study.technologies.slice(0, 5).map((tech) => (
                        <TechTag key={tech} name={tech} />
                      ))}
                      {study.technologies.length > 5 && (
                        <span className="text-[10px] font-mono text-slate-500 self-center">
                          +{study.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    <div className="pt-2 border-t border-slate-800/60">
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. Technical Skills & Evidence Matrix */}
      <section id="skills" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="05"
            title="Technical Skills & Evidence Matrix"
            subtitle="Security, networking, and virtualization competencies mapped to verifiable evidence labels."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategoryGroups.map((group) => (
              <Card key={group.id} variant="default" className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    {group.categoryTitle}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {group.description}
                  </p>
                </div>

                <div className="space-y-2.5">
                  {group.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-2"
                    >
                      <span className="text-xs font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <Badge evidenceType={skill.evidence} />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Certifications */}
      <section id="certifications" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="06"
            title="Certifications & Training"
            subtitle="Industry-recognized credentials, vendor certifications, and technical practitioner training."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsData.map((cert) => (
              <Card key={cert.id} variant="default" className="flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        cert.status === "Certified"
                          ? "bg-emerald-950/80 text-emerald-300 border-emerald-700/60"
                          : cert.status === "Training Completed"
                          ? "bg-sky-950/80 text-sky-300 border-sky-700/60"
                          : "bg-amber-950/80 text-amber-300 border-amber-700/60"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-100 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-sky-400">
                    {cert.issuingBody}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Status:</span>
                  <span>{cert.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Education */}
      <section id="education" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="07"
            title="Education"
            subtitle="Academic background and engineering degree qualification."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu) => (
              <Card key={edu.id} variant="default" className="space-y-3">
                <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400">
                        <GraduationCap className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-100">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-sky-400 pl-9">
                      {edu.institution}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800 shrink-0">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs text-slate-400 space-y-1 pl-9">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.details && (
                    <p className="text-slate-300 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Direct Contact */}
      <section id="contact" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="08"
            title="Get in Touch"
            subtitle="Professional inquiries regarding network engineering, cybersecurity deployment, and OT/IT infrastructure."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Direct Channels */}
            <div className="space-y-4">
              <Card variant="elevated" className="space-y-4">
                <h4 className="text-sm font-bold text-slate-100 border-b border-slate-800/80 pb-2">
                  Direct Contact Channels
                </h4>
                <div className="space-y-3 text-xs font-mono text-slate-300">
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="flex items-center gap-2.5 text-slate-300 hover:text-sky-300 transition-colors group p-2 rounded-md bg-slate-900/60 border border-slate-800"
                  >
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="truncate">{profileData.contact.email}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-600 group-hover:text-sky-400 transition-colors shrink-0" />
                  </a>

                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-300 hover:text-sky-300 transition-colors group p-2 rounded-md bg-slate-900/60 border border-slate-800"
                  >
                    <Github className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-600 group-hover:text-sky-400 transition-colors shrink-0" />
                  </a>

                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-300 hover:text-sky-300 transition-colors group p-2 rounded-md bg-slate-900/60 border border-slate-800"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-600 group-hover:text-sky-400 transition-colors shrink-0" />
                  </a>

                  <div className="flex items-center gap-2.5 text-slate-400 px-2 pt-1">
                    <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>Location: {profileData.location}</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="elevated" className="space-y-4">
                <h4 className="text-sm font-bold text-slate-100 border-b border-slate-800/80 pb-2">
                  Send a Direct Message
                </h4>
                <ContactForm
                  formEndpoint={profileData.contact.formspreeEndpoint}
                  recipientEmail={profileData.contact.email}
                />
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

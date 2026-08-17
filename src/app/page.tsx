import React from "react";
import Link from "next/link";
import {
  Shield,
  ArrowRight,
  FileText,
  Mail,
  Activity,
  Briefcase,
  Building2,
  Calendar,
  Compass,
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
import { LearningRoadmapSection } from "@/components/learning/LearningRoadmapSection";

export default function HomePage() {
  const { currentPosition, previousInternship } = careerExperience;

  return (
    <div className="space-y-24 py-12 sm:py-16">
      {/* 1. Hero Section */}
      <section className="relative">
        <Container>
          <div className="max-w-4xl space-y-6">
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

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
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
                href="#case-studies"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View Case Studies
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
        </Container>
      </section>

      {/* 2. About & Defense Principles */}
      <section id="about" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="01"
            title="Defense Philosophy & Engineering Principles"
            subtitle="Core engineering tenets guiding enterprise network protection, industrial resilience, and infrastructure hardening."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {profileData.defensePrinciples.map((principle, idx) => (
              <Card key={idx} variant="default" className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-sky-950/60 border border-sky-800/40 flex items-center justify-center shrink-0 text-sky-400 text-xs font-mono">
                  0{idx + 1}
                </div>
                <p className="text-sm text-slate-200 font-medium leading-snug pt-1">
                  {principle}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Career Timeline & Professional Experience */}
      <section id="experience" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="02"
            title="Professional Experience"
            subtitle="Chronological career timeline distinguishing current network engineering operations from enterprise cybersecurity & industrial infrastructure work."
          />

          <div className="space-y-12">
            {/* 3A: Current Professional Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded">
                  Current Professional Experience
                </span>
              </div>

              <Card variant="elevated" className="space-y-4 border-l-4 border-l-emerald-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-100">
                        {currentPosition.role}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-700/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {currentPosition.statusBadge}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono text-sky-400">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>{currentPosition.organization}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{currentPosition.period}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentPosition.summary}
                </p>
              </Card>
            </div>

            {/* 3B: Previous Professional Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/50 px-2.5 py-0.5 rounded">
                  Previous Professional Experience
                </span>
              </div>

              <div className="space-y-6">
                <Card variant="default" className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-bold text-slate-100">
                        {previousInternship.title}
                      </h3>
                      <p className="text-xs font-mono text-sky-400">
                        {previousInternship.domain}
                      </p>
                    </div>
                    <Badge variant="subtle">Enterprise & OT Infrastructure</Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {previousInternship.summary}
                  </p>
                </Card>

                {/* 4 Experience Cards linking to case studies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {previousInternship.cards.map((card) => (
                    <Card
                      key={card.id}
                      variant="interactive"
                      className="flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-mono text-sky-400 bg-sky-950/60 border border-sky-900/50 px-2 py-0.5 rounded">
                            {card.area}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                          {card.title}
                        </h4>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {card.summary}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {card.technologies.map((tech) => (
                            <TechTag key={tech} name={tech} />
                          ))}
                        </div>

                        <div className="pt-2 border-t border-slate-800/60">
                          <Link
                            href={card.caseStudyUrl}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-400 hover:text-sky-300 transition-colors"
                          >
                            <span>Explore Technical Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Featured Real-World Case Studies */}
      <section id="case-studies" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="03"
            title="Featured Technical Case Studies"
            subtitle="Documented architectural analyses of enterprise firewalls, industrial networking, hardware security diodes, and hypervisor virtualization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudiesData.map((study) => (
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

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {study.publicDescription}
                  </p>
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
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Learning Journey & Technical Roadmap */}
      <section id="learning" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="04"
            title="Continuous Learning Journey & Technical Roadmap"
            subtitle="Structured multi-stage roadmap tracking active skill development across networking, security monitoring, cloud architectures, and SecOps automation."
          />

          <LearningRoadmapSection />
        </Container>
      </section>

      {/* 6. Evidence-Based Skills Matrix */}
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

      {/* 7. Direct Contact */}
      <section id="contact" className="scroll-mt-20">
        <Container>
          <SectionHeader
            index="06"
            title="Get in Touch"
            subtitle="Professional inquiries regarding network engineering, cybersecurity deployment, and OT/IT infrastructure."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Card variant="elevated" className="space-y-3">
                <h4 className="text-sm font-bold text-slate-100">
                  Direct Contact Channels
                </h4>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>
                      {!profileData.contact.email.startsWith("[")
                        ? profileData.contact.email
                        : "Email Available Upon Request"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Location:</span>
                    <span>{profileData.location}</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card variant="elevated" className="space-y-4">
                <h4 className="text-sm font-bold text-slate-100">
                  Send a Direct Message
                </h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-slate-300">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your name"
                        className="w-full px-3 py-2 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-500"
                        disabled
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-slate-300">
                        Organization / Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-3 py-2 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-500"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Your message regarding network engineering, NOC operations, or security opportunities..."
                      className="w-full px-3 py-2 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-500"
                      disabled
                    />
                  </div>
                  <Button variant="primary" size="sm" disabled aria-disabled="true">
                    Send Message (Ready for Form Endpoint)
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

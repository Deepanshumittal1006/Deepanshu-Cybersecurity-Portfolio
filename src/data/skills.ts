import { SkillCategoryGroup } from "@/types/portfolio";

export const skillCategoryGroups: SkillCategoryGroup[] = [
  {
    id: "primary-expertise",
    categoryTitle: "PRIMARY EXPERTISE",
    description: "Core competencies and primary domains of practical experience.",
    skills: [
      { name: "Network Security", evidence: "Internship Project Experience" },
      { name: "Fortinet", evidence: "Internship Project Experience" },
      { name: "FortiManager HA", evidence: "Internship Project Experience" },
      { name: "OT/IT Security", evidence: "Internship Project Experience" },
      { name: "Industrial Networking", evidence: "Internship Project Experience" },
      { name: "NOC / Network Operations", evidence: "Technical Experience" },
    ],
  },
  {
    id: "networking",
    categoryTitle: "NETWORKING",
    description: "Fundamental networking protocols, routing, and switching used in enterprise and telecom environments.",
    skills: [
      { name: "Layer 2 / Layer 3 Networking", evidence: "Internship Project Experience" },
      { name: "VLANs", evidence: "Internship Project Experience" },
      { name: "Inter-VLAN Routing", evidence: "Internship Project Experience" },
      { name: "Static Routing", evidence: "Internship Project Experience" },
      { name: "VRRP", evidence: "Internship Project Experience" },
      { name: "SNMP", evidence: "Internship Project Experience" },
      { name: "NTP / SNTP", evidence: "Internship Project Experience" },
      { name: "DNS", evidence: "Internship Project Experience" },
    ],
  },
  {
    id: "security-monitoring",
    categoryTitle: "SECURITY & MONITORING",
    description: "Threat detection, event collection, and log-based analysis for operational security visibility.",
    skills: [
      { name: "IPS", evidence: "Internship Project Experience" },
      { name: "FortiSIEM", evidence: "Internship Project Experience" },
      { name: "Security Monitoring", evidence: "Internship Project Experience" },
      { name: "Syslog", evidence: "Internship Project Experience" },
      { name: "Log Analysis", evidence: "Internship Project Experience" },
      { name: "Event Correlation", evidence: "Internship Project Experience" },
    ],
  },
  {
    id: "infrastructure-systems",
    categoryTitle: "INFRASTRUCTURE & SYSTEMS",
    description: "Underlying systems and virtualization technologies used for lab, testing, and operational infrastructure.",
    skills: [
      { name: "Hirschmann MTS2848", evidence: "Internship Project Experience" },
      { name: "Rail Data Diode", evidence: "Internship Project Experience" },
      { name: "KVM / QEMU", evidence: "Technical Experience" },
      { name: "Ubuntu / Linux Administration", evidence: "Technical Experience" },
      { name: "Bash Scripting", evidence: "Technical Experience" },
      { name: "Python", evidence: "Technical Experience" },
    ],
  },
];

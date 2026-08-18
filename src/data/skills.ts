import { SkillCategoryGroup } from "@/types/portfolio";

export const skillCategoryGroups: SkillCategoryGroup[] = [
  {
    id: "network-security",
    categoryTitle: "Network Security",
    description:
      "Enterprise firewall deployment, security policies, operating modes, and centralized management.",
    skills: [
      { name: "FortiGate", evidence: "Internship Project Experience" },
      { name: "FortiManager", evidence: "Internship Project Experience" },
      { name: "Firewall Policies", evidence: "Internship Project Experience" },
      { name: "Transparent Mode", evidence: "Internship Project Experience" },
    ],
  },
  {
    id: "networking",
    categoryTitle: "Networking",
    description:
      "Layer 2/3 enterprise routing and switching, segmentation, trunking, and path control.",
    skills: [
      { name: "VLANs", evidence: "Internship Project Experience" },
      { name: "Layer 2 Networking", evidence: "Internship Project Experience" },
      { name: "Layer 3 Networking", evidence: "Internship Project Experience" },
      { name: "Inter-VLAN Routing", evidence: "Internship Project Experience" },
      { name: "Static Routing", evidence: "Internship Project Experience" },
      { name: "Trunking", evidence: "Internship Project Experience" },
    ],
  },
  {
    id: "industrial-networking",
    categoryTitle: "Industrial Networking",
    description:
      "Deterministic industrial switching, ruggedized network infrastructure, redundancy, and port mirroring.",
    skills: [
      { name: "Hirschmann MTS2848", evidence: "Internship Project Experience" },
      { name: "HiOS", evidence: "Internship Project Experience" },
      { name: "RSTP", evidence: "Internship Project Experience" },
      { name: "SPAN", evidence: "Internship Project Experience" },
    ],
  },
  {
    id: "ot-security",
    categoryTitle: "OT Security",
    description:
      "Hardware-enforced boundary protection, unidirectional communication, and OT/IT zone isolation.",
    skills: [
      { name: "Rail Data Diode", evidence: "Internship Project Experience" },
      { name: "Unidirectional Communication", evidence: "Internship Project Experience" },
      { name: "OT/IT Segmentation", evidence: "Internship Project Experience" },
    ],
  },
  {
    id: "security-monitoring",
    categoryTitle: "Security Monitoring",
    description:
      "Network traffic inspection, event logging integration, and centralized security telemetry.",
    skills: [
      { name: "Syslog", evidence: "Internship Project Experience" },
      { name: "SIEM Integration", evidence: "Internship Project Experience" },
      { name: "Traffic Monitoring", evidence: "Internship Project Experience" },
    ],
  },
  {
    id: "systems-virtualization",
    categoryTitle: "Systems & Virtualization",
    description:
      "Linux hypervisor administration, bridged networking, disk image provisioning, and VM lifecycle management.",
    skills: [
      { name: "Ubuntu Linux", evidence: "Technical Experience" },
      { name: "KVM", evidence: "Technical Experience" },
      { name: "QEMU", evidence: "Technical Experience" },
      { name: "virt-manager", evidence: "Technical Experience" },
      { name: "QCOW2", evidence: "Technical Experience" },
      { name: "Linux Bridge", evidence: "Technical Experience" },
    ],
  },
];

import { SkillCategoryGroup } from "@/types/portfolio";

export const skillCategoryGroups: SkillCategoryGroup[] = [
  {
    id: "network-security",
    categoryTitle: "Network Security",
    description:
      "Enterprise firewall deployment, security policies, operating modes, and centralized management.",
    skills: [
      { name: "FortiGate", evidence: "Hands-on Enterprise Experience" },
      { name: "FortiManager", evidence: "Hands-on Enterprise Experience" },
      { name: "Firewall Policies", evidence: "Hands-on Enterprise Experience" },
      { name: "Transparent Mode", evidence: "Hands-on Enterprise Experience" },
    ],
  },
  {
    id: "networking",
    categoryTitle: "Networking",
    description:
      "Layer 2/3 enterprise routing and switching, segmentation, trunking, and path control.",
    skills: [
      { name: "VLANs", evidence: "Hands-on Enterprise Experience" },
      { name: "Layer 2 Networking", evidence: "Hands-on Enterprise Experience" },
      { name: "Layer 3 Networking", evidence: "Hands-on Enterprise Experience" },
      { name: "Inter-VLAN Routing", evidence: "Hands-on Enterprise Experience" },
      { name: "Static Routing", evidence: "Hands-on Enterprise Experience" },
      { name: "Trunking", evidence: "Hands-on Enterprise Experience" },
    ],
  },
  {
    id: "industrial-networking",
    categoryTitle: "Industrial Networking",
    description:
      "Deterministic industrial switching, ruggedized network infrastructure, redundancy, and port mirroring.",
    skills: [
      { name: "Hirschmann MTS2848", evidence: "Hands-on Enterprise Experience" },
      { name: "HiOS", evidence: "Hands-on Enterprise Experience" },
      { name: "RSTP", evidence: "Hands-on Enterprise Experience" },
      { name: "SPAN", evidence: "Hands-on Enterprise Experience" },
    ],
  },
  {
    id: "ot-security",
    categoryTitle: "OT Security",
    description:
      "Hardware-enforced boundary protection, unidirectional communication, and OT/IT zone isolation.",
    skills: [
      { name: "Rail Data Diode", evidence: "Hands-on Enterprise Experience" },
      { name: "Unidirectional Communication", evidence: "Hands-on Enterprise Experience" },
      { name: "OT/IT Segmentation", evidence: "Hands-on Enterprise Experience" },
    ],
  },
  {
    id: "security-monitoring",
    categoryTitle: "Security Monitoring",
    description:
      "Network traffic inspection, event logging integration, and centralized security telemetry.",
    skills: [
      { name: "Syslog", evidence: "Hands-on Enterprise Experience" },
      { name: "SIEM Integration", evidence: "Hands-on Enterprise Experience" },
      { name: "Traffic Monitoring", evidence: "Hands-on Enterprise Experience" },
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

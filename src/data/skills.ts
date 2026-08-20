import { SkillCategoryGroup } from "@/types/portfolio";

export const skillCategoryGroups: SkillCategoryGroup[] = [
  {
    id: "network-security",
    categoryTitle: "NETWORK SECURITY",
    description: "Enterprise perimeter defense, firewall administration, and policy management.",
    skills: [
      { name: "Fortinet Firewalls (FortiGate)", evidence: "Professional Internship Experience" },
      { name: "FortiManager HA", evidence: "Professional Internship Experience" },
      { name: "Firewall Policy Management", evidence: "Professional Internship Experience" },
      { name: "IPS / IDS Configuration", evidence: "Professional Internship Experience" },
      { name: "Network Segmentation", evidence: "Professional Internship Experience" },
      { name: "Transparent & NAT Modes", evidence: "Professional Internship Experience" },
    ],
  },
  {
    id: "networking-telecom",
    categoryTitle: "NETWORKING & TELECOM",
    description: "Telecom infrastructure, routing protocols, switching, and NOC operations.",
    skills: [
      { name: "NOC & L1 Troubleshooting", evidence: "Technical Experience" },
      { name: "Huawei NMS (U2000 / NCE)", evidence: "Technical Experience" },
      { name: "Layer 2 & Layer 3 Networking", evidence: "Professional Internship Experience" },
      { name: "VLANs & Inter-VLAN Routing", evidence: "Professional Internship Experience" },
      { name: "VRRP Gateway Redundancy", evidence: "Professional Internship Experience" },
      { name: "DWDM, MPLS & BRAS Exposure", evidence: "Technical Experience" },
    ],
  },
  {
    id: "ot-industrial",
    categoryTitle: "OT / INDUSTRIAL INFRASTRUCTURE",
    description: "Industrial Ethernet, hardware security diodes, and critical OT/IT segmentation.",
    skills: [
      { name: "Hirschmann MTS2848 (HiOS)", evidence: "Professional Internship Experience" },
      { name: "Rail Data Diode (Unidirectional)", evidence: "Professional Internship Experience" },
      { name: "OT/IT Perimeter Isolation", evidence: "Professional Internship Experience" },
      { name: "Static ARP & Diode Routing", evidence: "Professional Internship Experience" },
      { name: "SPAN Port Traffic Mirroring", evidence: "Professional Internship Experience" },
      { name: "Industrial Network Resiliency", evidence: "Professional Internship Experience" },
    ],
  },
  {
    id: "systems-monitoring",
    categoryTitle: "SYSTEMS & MONITORING",
    description: "Infrastructure virtualization, server administration, and security telemetry.",
    skills: [
      { name: "KVM / QEMU Virtualization", evidence: "Professional Internship Experience" },
      { name: "Ubuntu / Linux Administration", evidence: "Professional Internship Experience" },
      { name: "FortiSIEM & Syslog Analysis", evidence: "Professional Internship Experience" },
      { name: "Alarm Correlation & Fault Management", evidence: "Technical Experience" },
      { name: "virt-manager & Bridge Networking", evidence: "Professional Internship Experience" },
      { name: "SNMP & NTP Network Services", evidence: "Professional Internship Experience" },
    ],
  },
  {
    id: "programming-tools",
    categoryTitle: "PROGRAMMING & TOOLS",
    description: "Scripting, version control, and development environments.",
    skills: [
      { name: "Python", evidence: "Technical Experience" },
      { name: "Bash Scripting", evidence: "Technical Experience" },
      { name: "Git & GitHub", evidence: "Technical Experience" },
      { name: "Linux CLI Tools", evidence: "Technical Experience" },
      { name: "VS Code", evidence: "Technical Experience" },
      { name: "Cisco Packet Tracer", evidence: "Technical Experience" },
    ],
  },
];

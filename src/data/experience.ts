import { CareerExperienceData } from "@/types/portfolio";

export const careerExperience: CareerExperienceData = {
  currentPosition: {
    role: "Network Engineer — NOC / L1 Support",
    organization: "iLayer Solution LLP",
    period: "10 August 2026 — Present",
    isCurrent: true,
    statusBadge: "CURRENT",
    summary:
      "Currently working in enterprise telecom network operations, supporting Level-1 NOC operations, infrastructure monitoring, alarm correlation, and rapid fault escalation.",
    responsibilities: [
      "NOC / L1 support for enterprise telecom network infrastructure and operational fault management.",
      "Level-1 network monitoring, alarm handling, fault isolation, ticket management, and escalation.",
      "Huawei U2000 / NCE NMS monitoring for network inventory and alarm correlation.",
      "Exposure to enterprise telecom environments spanning DWDM, MPLS, BRAS, SBC, and MSAN.",
    ],
    technologies: [
      "Huawei U2000 / NCE NMS",
      "DWDM",
      "MPLS",
      "BRAS",
      "SBC",
      "MSAN",
      "Alarm Correlation",
      "L1 Fault Isolation",
    ],
  },
  previousInternship: {
    title: "Cybersecurity / Network Security Internship",
    role: "Cybersecurity Analyst Intern",
    organization: "ARPR Techsol Pvt. Ltd.",
    period: "Feb 2026 — May 2026",
    domain: "Enterprise & Industrial OT/IT Security",
    summary:
      "Hands-on engineering internship supporting production OT/IT cybersecurity infrastructure, centralized firewall policy enforcement, industrial network switching, and bare-metal virtualization.",
    verifiedMetrics: [
      "90+ Fortinet Firewalls deployed across 3 sites",
      "16+ Hirschmann MTS2848 Industrial Switches deployed and configured",
      "16+ Rail Data Diodes configured",
      "16+ Tyrone bare-metal servers provisioned with KVM/QEMU virtualization",
      "18 managed devices supported through FortiManager High Availability",
    ],
    keyHighlights: [
      "Production Firewall Deployment — Deployed 90+ Fortinet firewalls across 3 operational sites with inline traffic inspection; administered centralized policy rollouts via FortiManager HA for 18 managed devices.",
      "Industrial Network Implementation — Configured 16+ Hirschmann MTS2848 switches with SFP uplinks, VLAN segmentation, Layer 3 routing, and VRRP gateway redundancy.",
      "Unidirectional Security Implementation — Configured 16+ Rail Data Diodes enforcing hardware-level unidirectional OT-to-IT data transfer with static ARP mappings and isolated network perimeters.",
      "Virtualization & Infrastructure Deployment — Provisioned 16+ Tyrone bare-metal servers using KVM/QEMU and virt-manager, deploying Ubuntu security VMs with Linux bridge networking and centralized rsyslog collection.",
      "Validation & Operational Handover — Served as technical representative during Site Acceptance Testing (SAT) for stakeholder verification and operational handover.",
    ],
    cards: [
      {
        id: "fortinet-exp",
        title: "Fortinet — Enterprise Firewall Security",
        area: "Firewall Engineering & Centralized Security Management",
        summary:
          "Configured firewall operating modes, security policies, network management services, time synchronization, logging, and centralized administration through FortiManager.",
        technologies: [
          "FortiGate",
          "FortiManager HA",
          "FortiOS",
          "Firewall Policies",
          "Transparent Mode",
          "Syslog",
        ],
      },
      {
        id: "hirschmann-exp",
        title: "Hirschmann — Industrial Networking",
        area: "Layer 3 Industrial Switching & Segmentation",
        summary:
          "Configured Hirschmann industrial switching infrastructure supporting Layer 2/Layer 3 networking, VLAN segmentation, inter-VLAN routing, static routing, redundancy, and SPAN traffic monitoring.",
        technologies: [
          "Hirschmann MTS2848",
          "Layer 3 Switching",
          "VLANs",
          "Inter-VLAN Routing",
          "VRRP",
          "SPAN",
        ],
      },
      {
        id: "data-diode-exp",
        title: "Rail Data Diode — OT Security",
        area: "Hardware-Enforced Unidirectional Data Flow",
        summary:
          "Worked with Rail Data Diode infrastructure to enforce hardware-level unidirectional communication, supporting secure transfer of operational telemetry while eliminating the inbound communication path.",
        technologies: [
          "Rail Data Diode",
          "Hirschmann HiOS",
          "OT/IT Segmentation",
          "Layer 3 Routing",
          "Static ARP",
        ],
      },
      {
        id: "kvm-exp",
        title: "KVM/QEMU — Virtualization Infrastructure",
        area: "Linux Virtualization & Testbed Deployment",
        summary:
          "Deployed virtual-machine infrastructure on Ubuntu-based KVM/QEMU servers, including QCOW2 image provisioning, Linux bridge networking, and VM creation via virt-manager.",
        technologies: [
          "Ubuntu Linux",
          "KVM/QEMU",
          "virt-manager",
          "QCOW2",
          "Linux Bridge",
          "rsyslog",
        ],
      },
    ],
  },
};

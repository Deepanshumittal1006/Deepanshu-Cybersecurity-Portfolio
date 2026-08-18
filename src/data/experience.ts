import { CareerExperienceData } from "@/types/portfolio";

export const careerExperience: CareerExperienceData = {
  currentPosition: {
    role: "Network Engineer — NOC / L1 Support",
    organization: "iLayer Solution LLP",
    period: "10 August 2026 — Present",
    isCurrent: true,
    statusBadge: "CURRENT",
    summary:
      "Currently working as a Network Engineer — NOC / L1 Support at iLayer Solution LLP.",
  },
  previousInternship: {
    title: "Cybersecurity / Network Security Internship",
    role: "Cybersecurity & Network Security Intern",
    domain: "Enterprise & Industrial OT/IT Security",
    summary:
      "Internship project experience supporting enterprise OT/IT cybersecurity infrastructure, including Fortinet firewall deployment and management, centralized FortiManager administration, industrial switching infrastructure, unidirectional OT/IT communication, Linux-based virtualization, network configuration and security monitoring.",
    cards: [
      {
        id: "fortinet-exp",
        title: "Fortinet — Enterprise Firewall Security",
        area: "Firewall Engineering & Centralized Security Management",
        summary:
          "Configured firewall operating modes, security policies, network management services, time synchronization, logging, and centralized administration through FortiManager.",
        technologies: [
          "FortiGate",
          "FortiManager",
          "FortiOS",
          "Firewall Policies",
          "Transparent Mode",
          "Syslog",
        ],
        caseStudyUrl: "/case-studies/fortinet",
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
          "VLAN",
          "Inter-VLAN Routing",
          "VRRP",
          "SPAN",
        ],
        caseStudyUrl: "/case-studies/hirschmann",
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
        caseStudyUrl: "/case-studies/data-diode",
      },
      {
        id: "kvm-exp",
        title: "KVM/QEMU — Virtualization Infrastructure",
        area: "Linux Virtualization & Testbed Deployment",
        summary:
          "Deployed virtual-machine infrastructure on Ubuntu-based KVM/QEMU servers, including QCOW2 image provisioning, Linux bridge networking, and VM creation via virt-manager.",
        technologies: [
          "Ubuntu Linux",
          "KVM",
          "QEMU",
          "virt-manager",
          "QCOW2",
          "Linux Bridge",
        ],
        caseStudyUrl: "/case-studies/kvm",
      },
    ],
  },
};

import { CaseStudy } from "@/types/portfolio";

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "fortinet",
    title: "Enterprise Firewall Deployment & Centralized Security Management",
    category: "Network Security / Firewall Security / Enterprise Security",
    technologies: [
      "FortiGate",
      "FortiManager",
      "FortiOS",
      "Firewall Policies",
      "Transparent Mode",
      "NTP",
      "Syslog",
      "Centralized Management",
    ],
    publicDescription:
          "Internship project experience supporting enterprise Fortinet firewall infrastructure, including firewall deployment and configuration, security policy administration, network-service configuration, logging, time synchronization, and centralized management through FortiManager.",
        metricSummary: "90+ Firewalls · 3 Sites · FortiManager HA",
    metrics: [
      {
        value: "90+",
        label: "Fortinet Firewalls",
      detail: "Supported a firewall infrastructure of 90+ FortiGate units across 3 sites during a cybersecurity internship",
      },
      {
        value: "3",
        label: "Operational Sites",
        detail: "Multi-site operational infrastructure",
      },
      {
        value: "18",
        label: "FortiManager-Managed Devices",
        detail: "Centralized management in HA deployment",
      },
    ],
    myRole: [
      "Configured FortiGate interface parameters, operating modes, and zone assignments.",
      "Implemented stateful firewall policies governing transit and inter-zone communication.",
      "Configured network management services including NTP time synchronization and remote Syslog forwarding.",
      "Registered and authorized FortiGate units within FortiManager, verifying synchronization and managed status.",
      "Applied offline FortiGuard licensing procedures for network enclaves lacking direct Internet access.",
      "Supported policy deployment workflows and firmware management procedures through FortiManager.",
    ],
    objective:
      "Deploy, configure, and administer enterprise Fortinet firewall infrastructure across designated security zones, establishing granular security policies, reliable logging, time synchronization, and centralized policy orchestration.",
    environment:
      "Enterprise security infrastructure utilizing Fortinet FortiGate security appliances and FortiManager centralized administration platform across segmented network environments.",
    responsibilities: [
      "Configured FortiGate operating modes and network interface parameters.",
      "Defined and applied stateful firewall policies governing inter-zone traffic flow.",
      "Configured network management services including NTP time synchronization and Syslog event forwarding.",
      "Executed FortiGate device registration, authorization, and policy synchronization within FortiManager.",
      "Applied offline FortiGuard licensing procedures for restricted network environments without direct Internet access.",
      "Verified operational status, policy enforcement, and management plane connectivity.",
    ],
    implementation:
      "The deployment involved provisioning FortiGate firewall appliances within enterprise network segments, defining security policies for controlled communications, and configuring network management services. To streamline ongoing governance, FortiGate units were integrated into FortiManager for centralized device management, status verification, policy administration, and firmware management workflows. For segmented environments lacking direct Internet access, offline FortiGuard licensing procedures were executed to maintain signature and security subscription capabilities.",
    configurationAreas: [
      {
        title: "Firewall Operating Modes & Interface Configuration",
        description:
          "Configured FortiGate operating modes—including Transparent Mode deployments—to inspect and filter transit traffic without requiring architectural IP redesign.",
        points: [
          "Operating mode selection based on network boundary requirements",
          "Interface binding, zone assignment, and administrative access controls",
          "Network service connectivity verification",
        ],
      },
      {
        title: "Security Policy Administration & Access Control",
        description:
          "Constructed granular firewall rulebases controlling source/destination addresses, service ports, and action parameters across defined security zones.",
        points: [
          "Stateful inspection rules for permitted communication paths",
          "Explicit deny rules and default-drop security baselines",
          "Logging enablement for policy hit tracking and traffic auditing",
        ],
      },
      {
        title: "Network Management Services (NTP & Syslog)",
        description:
          "Standardized time synchronization and event telemetry forwarding across all managed security gateways.",
        points: [
          "Configured authoritative NTP sources for synchronized event timestamps",
          "Established remote Syslog forwarding for security monitoring and audit compliance",
          "Validated telemetry delivery and log message formatting",
        ],
      },
      {
        title: "FortiManager Centralized Administration & Device Authorization",
        description:
          "Configured FortiGate integration with FortiManager for centralized device management, policy administration, and firmware management workflows.",
        points: [
          "Initiated device registration and administrative authorization",
          "Verified managed status, configuration checksums, and in-sync state",
          "Centralized policy package structuring and deployment workflows",
          "Firmware management and image repository maintenance",
        ],
      },
      {
        title: "Offline FortiGuard Licensing Procedures",
        description:
          "Worked with offline FortiGuard licensing procedures for environments where direct Internet connectivity was unavailable.",
        points: [
          "Managed entitlement validation for isolated security enclaves",
          "Applied offline license packages and signature updates to managed nodes",
          "Confirmed active feature state and operational validation",
        ],
      },
    ],
    validationChecklist: [
      "Verified firewall policy enforcement and traffic filtering behavior.",
      "Confirmed NTP time synchronization accuracy across security appliances.",
      "Validated Syslog telemetry generation and receipt on central logging endpoints.",
      "Verified FortiManager managed connection status, device authorization, and in-sync policy state.",
      "Confirmed offline FortiGuard license activation and security capability status.",
    ],
    keyTechnicalLearnings: [
      "Practical understanding of FortiOS policy rulebases and evaluation order.",
      "Operational workflows for enterprise centralized management via FortiManager.",
      "Implementation requirements for isolated/offline licensing and security service maintenance.",
      "Importance of precise time synchronization (NTP) for security log correlation.",
    ],
    architectureFlow: [
      { label: "Protected Network Zone", sublabel: "Workloads / Subnets", type: "source" },
      { label: "FortiGate Firewall", sublabel: "Stateful Policy & Inspection", type: "security" },
      { label: "FortiManager & Syslog", sublabel: "Centralized Orchestration & Logging", type: "destination" },
    ],
    sanitizationDisclaimer:
      "All internal IP addresses, serial numbers, credentials, hostnames, and license identifiers have been omitted in compliance with confidentiality standards.",
  },
  {
    slug: "hirschmann",
    title: "Industrial Network Infrastructure & Layer 3 Switching",
    category: "Industrial Networking / OT Networking / Network Engineering",
    technologies: [
      "Hirschmann MTS2848",
      "Layer 3 Switching",
      "VLAN",
      "Inter-VLAN Routing",
      "Static Routing",
      "SFP Uplinks",
      "VRRP Gateway Redundancy",
      "SNMP",
      "NTP",
      "Syslog",
      "SPAN",
      "OT Network Segmentation",
    ],
    publicDescription:
          "Internship project experience configuring Hirschmann industrial switching infrastructure supporting Layer 2/Layer 3 networking, VLAN segmentation, inter-VLAN routing, static routing, redundancy and monitoring capabilities.",
        metricSummary: "16+ Switches · Layer 3 Routing · VRRP",
    metrics: [
      {
        value: "16+",
        label: "Hirschmann Industrial Switches",
        detail: "Layer 2/3 industrial switching infrastructure",
      },
    ],
    myRole: [
      "Configured 802.1Q VLANs, access ports, and 802.1Q trunking on Hirschmann MTS2848 switches.",
      "Implemented Layer 3 routing interfaces (SVIs), inter-VLAN routing, and static routes.",
      "Configured SFP optical/copper uplink interfaces connecting aggregation and access tiers.",
      "Configured Virtual Router Redundancy Protocol (VRRP) gateway redundancy, setting master/backup priorities.",
      "Configured SPAN port mirroring sessions to export traffic to security analysis endpoints.",
      "Configured SNMP monitoring parameters, NTP time synchronization, and remote Syslog forwarding.",
    ],
    objective:
      "Deploy and configure Hirschmann industrial switching hardware to provide deterministic Layer 2/3 network segmentation, inter-VLAN routing, default gateway redundancy, and traffic visibility for security monitoring.",
    environment:
      "Industrial network infrastructure utilizing Hirschmann MTS2848 managed industrial switches operating in operational technology environments.",
    responsibilities: [
      "Configured Layer 2 switching parameters including 802.1Q VLANs, access ports, and 802.1Q trunking.",
      "Implemented Layer 3 routing interfaces, inter-VLAN routing, and static routes.",
      "Configured SFP uplink interfaces for switch interconnection.",
      "Configured Virtual Router Redundancy Protocol (VRRP) for default gateway resilience.",
      "Implemented traffic-monitoring capabilities using SPAN / port mirroring for security analysis.",
      "Integrated network event logging with Syslog/SIEM collectors, SNMP monitoring, and NTP time synchronization.",
      "Performed interface validation, routing verification, and failover testing.",
    ],
    implementation:
      "The deployment established an industrial network foundation using Hirschmann MTS2848 switches. VLAN segmentation was established to isolate distinct functional zones, with inter-VLAN routing and static routing configured to govern controlled communication paths between subnets. Virtual Router Redundancy Protocol (VRRP) was configured with master/backup priority settings to provide default-gateway resilience. To support security monitoring, SPAN port mirroring, SNMP monitoring, and centralized Syslog logging were implemented.",
    configurationAreas: [
      {
        title: "Layer 2 Segmentation, Trunking & SFP Uplinks",
        description:
          "Partitioned broadcast domains into distinct functional VLANs to enforce network boundary isolation across industrial endpoints.",
        points: [
          "Configured access ports for dedicated endpoint connections",
          "Configured 802.1Q trunk links carrying tagged traffic between industrial switches",
          "Provisioned SFP optical/copper interfaces for inter-switch uplink connectivity",
          "Enforced VLAN pruning and native VLAN security practices",
        ],
      },
      {
        title: "Layer 3 Switching & Inter-VLAN Routing",
        description:
          "Configured switched virtual interfaces (SVIs) and static routing tables to provide deterministic Layer 3 forwarding between isolated VLANs.",
        points: [
          "Configured IP interfaces for inter-VLAN default gateways",
          "Defined static route entries for deterministic next-hop path selection",
          "Verified routing table state and packet forwarding paths",
        ],
      },
      {
        title: "Gateway Redundancy (VRRP Master/Backup Priority)",
        description:
          "Implemented Virtual Router Redundancy Protocol (VRRP) to provide high-availability default gateway services across redundant switches.",
        points: [
          "Configured virtual IP addresses shared between switch pairs",
          "Configured master/backup priority levels and preemption parameters",
          "Tested gateway failover and convergence behavior",
        ],
      },
      {
        title: "SPAN / Port Mirroring & Network Telemetry",
        description:
          "Implemented traffic-monitoring capabilities using SPAN/port mirroring and integrated network logging to support security monitoring and analysis.",
        points: [
          "Configured source monitoring ports and destination analyzer interfaces",
          "Directed mirrored traffic to network inspection and security sensors",
          "Validated non-intrusive packet capture across monitored interfaces",
        ],
      },
      {
        title: "SNMP, NTP & Remote Syslog Integration",
        description:
          "Standardized administrative telemetry, SNMP monitoring, and time synchronization across industrial switches.",
        points: [
          "Configured SNMP community strings and trap destinations for infrastructure monitoring",
          "Established NTP synchronization for accurate switch system time",
          "Forwarded system audit logs to central Syslog/SIEM platforms",
        ],
      },
    ],
    validationChecklist: [
      "Verified VLAN tagging and isolation across access and trunk interfaces.",
      "Tested inter-VLAN routing and static next-hop reachability.",
      "Validated VRRP master/backup election states and virtual IP availability.",
      "Confirmed SPAN mirror session traffic delivery to analyzer interfaces.",
      "Verified Syslog event forwarding and NTP time synchronization accuracy.",
    ],
    keyTechnicalLearnings: [
      "Operational characteristics of Hirschmann industrial switching platforms and CLI/web management.",
      "Practical application of Layer 3 switching and VRRP in segmented industrial network topologies.",
      "Configuration of SPAN sessions for non-intrusive traffic inspection and threat detection.",
      "Implementation of deterministic routing, SFP uplinks, and gateway redundancy.",
    ],
    architectureFlow: [
      { label: "Industrial Endpoints / Subnets", sublabel: "Segmented VLANs", type: "source" },
      { label: "Hirschmann MTS2848", sublabel: "Layer 3 Routing & Gateway Redundancy", type: "process" },
      { label: "SPAN / Syslog Output", sublabel: "Traffic Mirror & SIEM Logging", type: "destination" },
    ],
    sanitizationDisclaimer:
      "All physical plant locations, switch serials, internal IP schemes, and proprietary control systems are redacted in accordance with strict confidentiality protocols.",
  },
  {
    slug: "data-diode",
    title: "OT Security — Hardware-Enforced Unidirectional Data Flow",
    category: "OT Security / Industrial Security / Network Segmentation",
    technologies: [
      "Rail Data Diode",
      "Hirschmann HiOS",
      "VLAN",
      "Layer 3 Routing",
      "Static ARP",
      "Static Routing",
      "OT/IT Segmentation",
    ],
    publicDescription:
          "Internship project experience with Rail Data Diode infrastructure designed to enforce hardware-level unidirectional communication between network segments. Enforced hardware-level unidirectional OT-to-IT data transfer while eliminating the return communication path across the protected boundary.",
        metricSummary: "16+ Data Diodes · Unidirectional OT→IT · Static ARP",
    metrics: [
      {
        value: "16+",
        label: "Rail Data Diodes",
        detail: "Hardware-enforced unidirectional boundary units",
      },
    ],
    myRole: [
      "Configured boundary VLANs on Hirschmann HiOS switches interfacing with diode transmit and receive ports.",
      "Configured static ARP mappings to enable unidirectional MAC address resolution without reverse ARP.",
      "Defined deterministic static routes directing outbound telemetry toward the diode transmitter interface.",
      "Verified physical and logical one-way data transport between OT and IT monitoring segments.",
      "Validated the receipt and parsing of telemetry payloads on the destination IT monitoring collector.",
    ],
    objective:
      "Implement and validate a hardware-enforced unidirectional communication boundary between critical OT systems and higher-level IT/monitoring networks, enforcing hardware-level unidirectional OT-to-IT data transfer while eliminating the return communication path across the protected boundary.",
    environment:
      "Operational technology (OT) network boundary integrated with Rail Data Diode hardware and Hirschmann HiOS industrial switching platforms.",
    responsibilities: [
      "Configured VLAN and routing interfaces supporting the unidirectional boundary architecture.",
      "Configured static ARP bindings and static routes required for hardware-enforced one-way data transport.",
      "Configured Hirschmann HiOS industrial switch interfaces interfacing with the data diode transmit/receive ports.",
      "Verified the physical and logical elimination of reverse-path data transmission.",
      "Validated telemetry egress from the OT source to the destination IT monitoring collector.",
    ],
    implementation:
      "The deployment established a physical-layer unidirectional boundary between critical OT operational networks and IT monitoring infrastructure using Rail Data Diode hardware. Because true hardware data diodes physically disconnect the return transmit path, ensuring that the protected OT-side interface has no physical return communication path across the diode boundary, dedicated static ARP entries, VLAN interfaces, and deterministic static routing were configured across the Hirschmann HiOS switching layer. This enabled continuous operational telemetry transfer while enforcing strict physical simplex flow.",
    configurationAreas: [
      {
        title: "Hardware-Enforced Unidirectional Boundary",
        description:
          "Established physical and optical single-direction transmission path ensuring absolute physical separation of inbound and outbound signals.",
        points: [
          "Physical separation of Data OUT (transmit only) and Data IN (receive only) interfaces",
          "Elimination of backchannel signaling and reverse network communication paths",
          "Verification of physical-layer unidirectional enforcement",
        ],
      },
      {
        title: "Boundary VLANs & Interface Segregation",
        description:
          "Configured isolated boundary VLANs on Hirschmann HiOS switches to segregate diode ingress and egress data streams.",
        points: [
          "Configured dedicated source VLAN on OT aggregation switch",
          "Configured dedicated destination VLAN on IT monitoring receiver switch",
          "Enforced strict interface isolation preventing bypass paths",
        ],
      },
      {
        title: "Static ARP & Deterministic Routing",
        description:
          "Configured VLAN and routing interfaces and supported static ARP and routing requirements associated with the hardware-enforced one-way communication architecture.",
        points: [
          "Configured static ARP mappings on source switches to resolve destination MACs without bidirectional ARP queries",
          "Configured static route entries directing telemetry payloads toward the diode transmitter",
          "Maintained deterministic packet forwarding under unidirectional constraints",
        ],
      },
      {
        title: "Simplex Telemetry Export & Boundary Verification",
        description:
          "Enforced strict architectural separation between operational networks and enterprise monitoring tiers.",
        points: [
          "Validated one-way data flow from OT source network to IT destination",
          "Confirmed zero packet leakage or reverse communication channels",
          "Validated monitoring receiver ingestion of operational data",
        ],
      },
    ],
    validationChecklist: [
      "Confirmed forward data transmission across the hardware-enforced diode channel.",
      "Verified complete absence of reverse network path (zero return packets across diode boundary).",
      "Validated static ARP entry persistence and forwarding accuracy on Hirschmann HiOS switches.",
      "Tested static routing paths directing telemetry toward the transmitter port.",
      "Validated boundary interface and VLAN isolation adhering to OT security segmentation guidelines.",
    ],
    keyTechnicalLearnings: [
      "Technical operational principles of hardware data diodes vs. software firewalls.",
      "Protocol handling requirements for simplex/unidirectional data transmission (handling absence of TCP ACK/ARP).",
      "Network interface and static ARP tuning on industrial switches running HiOS.",
      "Best practices for secure OT telemetry export without compromising critical network isolation.",
    ],
    architectureFlow: [
      { label: "OT / Source Network", sublabel: "Critical Control / Telemetry", type: "source" },
      { label: "Data OUT", sublabel: "Egress Interface", type: "process" },
      { label: "Hardware-Enforced One-Way Communication", sublabel: "Physical Diode Boundary", type: "security" },
      { label: "Data IN", sublabel: "Ingress Interface", type: "process" },
      { label: "IT / Monitoring Network", sublabel: "Centralized Telemetry Analysis", type: "destination" },
    ],
    sanitizationDisclaimer:
      "All physical facility details, IP addresses, MAC addresses, internal VLAN IDs, device identifiers, and proprietary protocols are omitted for security confidentiality.",
  },
  {
    slug: "kvm",
    title: "KVM/QEMU Virtualization & Linux Infrastructure Deployment",
    category: "Linux / Virtualization / Infrastructure",
    technologies: [
      "Ubuntu Linux",
      "KVM",
      "QEMU",
      "virt-manager",
      "QCOW2",
      "Linux Bridge",
      "Bash/Shell",
    ],
    publicDescription:
<<<<<<< HEAD
      "Internship project experience deploying Ubuntu-based KVM/QEMU infrastructure with QCOW2 provisioning, Linux bridge networking, and virt-manager.",
    teaserMetric: "5+ Servers · KVM/QEMU · Ubuntu Linux",
=======
      "Internship project experience deploying virtual-machine infrastructure on Ubuntu-based KVM/QEMU servers, including QCOW2 image provisioning, Linux bridge networking and VM creation through virt-manager.",
    metricSummary: "5+ Servers · KVM/QEMU · Ubuntu Linux",
>>>>>>> e16a524 (Fix: Resolve Vercel production build syntax error in src/app/page.tsx)
    metrics: [
      {
        value: "5+",
        label: "Bare-Metal Virtualization Servers",
        detail: "Ubuntu Server KVM/QEMU hosts",
      },
    ],
    myRole: [
      "Configured KVM kernel modules and QEMU hypervisor services on Ubuntu Server hosts.",
      "Configured Linux network software bridge interfaces (br0) bound to physical network adapters.",
      "Provisioned QCOW2 virtual disk storage images for guest virtual machine deployments.",
      "Created and configured virtual machines using virt-manager and virsh command-line tools.",
      "Configured vCPU, RAM, storage, and network interface allocations per virtual machine.",
      "Validated guest virtual machine network connectivity, bridge forwarding, and host service operation.",
    ],
    objective:
      "Deploy, configure, and maintain Linux-based kernel virtualization infrastructure to host virtualized security appliances and testbed systems using open-source hypervisor tooling.",
    environment:
      "Ubuntu Server bare-metal infrastructure hosting Kernel-based Virtual Machine (KVM) and QEMU hypervisor components.",
    responsibilities: [
      "Configured KVM kernel modules, QEMU virtualization engine, and libvirt daemon on Ubuntu Server.",
      "Configured Linux software bridging (br0) to connect virtual machine interfaces to physical networks.",
      "Provisioned QCOW2 virtual disk images for guest instances.",
      "Created, configured, and managed virtual machines using virt-manager and virsh CLI.",
      "Performed VM resource allocation (vCPU, RAM, storage, network interfaces) and configuration.",
      "Validated VM network connectivity, hypervisor operation, and service availability.",
    ],
    implementation:
      "The deployment established virtualization infrastructure on Ubuntu Server utilizing KVM and QEMU. Linux network bridging was configured to provide Layer 2 network connectivity between hosted virtual machines and physical network segments. Virtual machine storage was configured using the QCOW2 format to support virtual disk provisioning. VM creation, configuration, and resource assignments were orchestrated through virt-manager and virsh management tools.",
    configurationAreas: [
      {
        title: "KVM/QEMU Hypervisor Host Setup",
        description:
          "Configured the Linux host operating system for hardware-assisted virtualization.",
        points: [
          "Verified CPU virtualization extensions (Intel VT-x / AMD-V)",
          "Installed and configured KVM kernel modules, QEMU, and libvirt daemon",
          "Managed hypervisor permissions and administrative access",
        ],
      },
      {
        title: "Linux Bridge Network Configuration",
        description:
          "Configured software bridge interfaces allowing VMs to participate directly in designated physical network segments.",
        points: [
          "Created and configured Linux network bridge interfaces (e.g., br0)",
          "Bound physical network adapters to bridge devices",
          "Attached virtual TAP interfaces to provide VM network access",
        ],
      },
      {
        title: "QCOW2 Virtual Disk Provisioning",
        description:
          "Configured VM virtual disk storage utilizing QEMU Copy-On-Write format.",
        points: [
          "Provisioned QCOW2 disk images via qemu-img command-line utilities",
          "Configured storage directory paths and volume allocations",
          "Attached disk images to virtual machine storage controllers",
        ],
      },
      {
        title: "VM Deployment & Resource Allocation via virt-manager",
        description:
          "Orchestrated virtual machine creation and ongoing administration across GUI and CLI interfaces.",
        points: [
          "Configured VM hardware definitions (vCPU, memory, storage bus, NIC models)",
          "Created and provisioned guest instances via virt-manager",
          "Executed management commands using virsh CLI",
        ],
      },
    ],
    validationChecklist: [
      "Verified KVM kernel module acceleration status on Ubuntu Server hosts.",
      "Tested Linux bridge forwarding and guest IP reachability on the local network.",
      "Confirmed QCOW2 disk provisioning and storage allocation for virtual machines.",
      "Validated virtual machine deployment, boot sequence, and resource assignment via virt-manager.",
      "Validated guest network connectivity and host service stability.",
    ],
    keyTechnicalLearnings: [
      "Architecture of Linux kernel-level virtualization and QEMU device emulation.",
      "Configuration and debugging of Linux software bridges for hypervisor networking.",
      "Storage management and provisioning using QCOW2 disk formats.",
      "Management workflows combining virt-manager GUI with virsh command-line tooling.",
    ],
    architectureFlow: [
      { label: "Ubuntu Server", sublabel: "Host OS & Hardware Layer", type: "source" },
      { label: "KVM/QEMU", sublabel: "Hypervisor & Emulation", type: "process" },
      { label: "Linux Bridge", sublabel: "Layer 2 Virtual Switching", type: "process" },
      { label: "Security VM", sublabel: "Guest Workload", type: "security" },
      { label: "QCOW2 Virtual Disk", sublabel: "Storage Volume", type: "destination" },
    ],
    sanitizationDisclaimer:
      "Server IP addresses, credentials, hostnames, file paths, and internal identifiers are omitted for security confidentiality.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find((study) => study.slug === slug);
}

import { CaseStudy } from "@/types/portfolio";

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "fortinet",
    title: "Enterprise Fortinet Firewall Deployment & Centralized Security Management",
    category: "Network Security / Firewall Engineering",
    technologies: [
      "FortiGate",
      "FortiManager",
      "FortiOS",
      "Firewall Policies",
      "NAT",
      "Transparent Mode",
      "IPS/IDS",
      "NTP",
      "Syslog",
      "Centralized Management",
    ],
    publicDescription:
      "Hands-on technical experience during my Cybersecurity Analyst Internship supporting Fortinet firewall deployment, policy administration, logging, and centralized management through FortiManager.",
    teaserMetric: "90+ Firewalls · 3 Sites · FortiManager HA",
    metrics: [
      {
        value: "90+",
        label: "Fortinet Firewalls",
        detail:
          "Hands-on experience supporting the deployment and configuration of Fortinet firewall infrastructure across 90+ FortiGate firewalls at 3 operational sites.",
      },
      {
        value: "3",
        label: "Operational Sites",
        detail: "Multi-site enterprise security infrastructure",
      },
      {
        value: "18",
        label: "FortiManager-Managed Devices",
        detail: "Centralized policy & firmware orchestration in HA deployment",
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
        title: "Firewall Operating Modes & Interfaces",
        description:
          "Configured interfaces and operational modes based on security zone requirements.",
        points: [
          "Configured interfaces for routed mode operation with IP addressing",
          "Provisioned interfaces for transparent mode inline inspection where layer-2 insertion was required",
          "Configured administrative access control lists (ACLs) per interface",
        ],
      },
      {
        title: "Security Policies & Traffic Control",
        description:
          "Implemented stateful security policies regulating traffic flow between defined network zones.",
        points: [
          "Defined source/destination address objects, services, and port profiles",
          "Constructed firewall policy rulebases with explicit deny-by-default rules",
          "Configured NAT parameters for outbound translation requirements",
        ],
      },
      {
        title: "Centralized Management Integration",
        description:
          "Enrolled FortiGate firewalls into FortiManager for centralized policy administration.",
        points: [
          "Registered and authorized FortiGate devices within FortiManager management domains",
          "Verified configuration synchronization and policy package push status",
          "Utilized device groups for standardized management across operational sites",
        ],
      },
      {
        title: "Network Services & Offline Licensing",
        description:
          "Configured infrastructure services and executed offline licensing workflows.",
        points: [
          "Configured NTP server references to maintain uniform timestamp accuracy across logs",
          "Configured remote Syslog forwarding for security event collection",
          "Applied offline license files and entitlement updates for isolated network environments",
        ],
      },
    ],
    validationChecklist: [
      "Verified management-plane reachability (SSH/HTTPS) across designated subnets.",
      "Confirmed firewall policy enforcement using test traffic streams.",
      "Validated remote Syslog delivery and event ingestion on central log servers.",
      "Confirmed NTP time synchronization across all managed FortiGate appliances.",
      "Verified FortiManager synchronization and policy deployment status.",
    ],
    keyTechnicalLearnings: [
      "Practical understanding of FortiOS policy rulebases and evaluation order.",
      "Operational workflows for enterprise centralized management via FortiManager.",
      "Implementation requirements for isolated/offline licensing and security service maintenance.",
      "Importance of precise time synchronization (NTP) for security log correlation.",
    ],
    architectureFlow: [
      { label: "Protected Network Zone", sublabel: "Workloads / Segmented Subnets", type: "source" },
      { label: "FortiGate Firewall", sublabel: "Stateful Inspection & Policy Enforcement", type: "security" },
      { label: "FortiManager HA", sublabel: "Centralized Policy & Firmware Orchestration", type: "process" },
      { label: "Syslog / SIEM Collector", sublabel: "Security Event Logging & Audit Trails", type: "destination" },
    ],
    operationalRelevance:
      "Provides a practical foundation for enterprise network troubleshooting, security policy evaluation, and fault isolation in my current NOC role. Hands-on exposure to FortiManager centralized administration and Syslog event correlation directly informs alarm analysis, incident escalation workflows, and security posture monitoring.",
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
      "Hands-on technical experience during my Cybersecurity Analyst Internship configuring Hirschmann industrial switching with Layer 2/Layer 3 networking, VLAN segmentation, routing, redundancy, and monitoring.",
    teaserMetric: "16+ Switches · Layer 3 Routing · VRRP",
    metrics: [
      {
        value: "16+",
        label: "Hirschmann Industrial Switches",
        detail: "Hirschmann MTS2848 Layer 2/3 industrial switching infrastructure",
      },
      {
        value: "Layer 3",
        label: "Routing & Segmentation",
        detail: "Inter-VLAN routing, static routes & VRRP gateway redundancy",
      },
      {
        value: "HiOS",
        label: "Operating System",
        detail: "Industrial switch configuration, SPAN port mirroring & SNMP",
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
          "Assigned IP addresses and subnet masks to switched virtual interfaces (SVIs)",
          "Configured static routes directing traffic toward upstream networks",
          "Verified inter-VLAN routing tables and forwarding behavior",
        ],
      },
      {
        title: "Default Gateway Redundancy (VRRP)",
        description:
          "Configured Virtual Router Redundancy Protocol (VRRP) to eliminate single points of failure for industrial subnet gateways.",
        points: [
          "Defined VRRP virtual router IDs (VRIDs) and virtual IP addresses per VLAN",
          "Set priority values to establish deterministic Master and Backup switch roles",
          "Verified preemption behavior and deterministic failover responsiveness",
        ],
      },
      {
        title: "Network Visibility & Management Services",
        description:
          "Configured diagnostic, telemetry, and administrative services across all industrial switch units.",
        points: [
          "Configured SPAN port mirroring to deliver duplicate packet streams to analysis probes",
          "Configured SNMP monitoring parameters for health and link-state polling",
          "Configured NTP time synchronization and remote Syslog export",
        ],
      },
    ],
    validationChecklist: [
      "Confirmed VLAN segmentation and port-assignment verification across all access ports.",
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
      { label: "Industrial Endpoints", sublabel: "Field Workstations & Control Subnets", type: "source" },
      { label: "Hirschmann MTS2848", sublabel: "VLAN Segmentation & Layer 3 Routing", type: "process" },
      { label: "VRRP Gateway Redundancy", sublabel: "Master / Backup Virtual Gateway", type: "security" },
      { label: "SPAN & Syslog Monitoring", sublabel: "Traffic Mirror & Central SIEM Logging", type: "destination" },
    ],
    operationalRelevance:
      "Directly strengthens Layer 2 and Layer 3 fault isolation, VLAN segmentation diagnostics, and static routing troubleshooting across live telecom infrastructure. Practical experience with VRRP gateway failover, SFP uplinks, and SPAN traffic analysis supports rapid root-cause identification during network incident response.",
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
      "Hands-on technical experience during my Cybersecurity Analyst Internship with Rail Data Diode infrastructure enforcing unidirectional OT-to-IT communication and protected network segmentation.",
    teaserMetric: "16+ Data Diodes · Unidirectional OT→IT · Static ARP",
    metrics: [
      {
        value: "16+",
        label: "Rail Data Diodes",
        detail: "Hardware-enforced unidirectional boundary units configured",
      },
      {
        value: "Hardware-Enforced",
        label: "Simplex Isolation",
        detail: "Hardware-Enforced Physical Unidirectional Isolation with zero return path",
      },
      {
        value: "Static ARP",
        label: "One-Way Routing",
        detail: "Deterministic simplex telemetry delivery from OT to IT",
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
        title: "Diode Interface & Boundary Integration",
        description:
          "Configured the designated OT-side and IT-side interfaces according to the approved unidirectional deployment architecture.",
        points: [
          "Configured the designated OT-side and IT-side interfaces according to the approved unidirectional deployment architecture",
          "Assigned static IP configurations per interface segment",
          "Verified physical link state and optical transceivers on both sides of the boundary",
        ],
      },
      {
        title: "Switch Static Routing & ARP Configuration",
        description:
          "Configured connected Hirschmann switches to support unidirectional transmission.",
        points: [
          "Configured static ARP entries for diode interface addresses to enable MAC resolution without reverse queries",
          "Configured deterministic static routes directed through the diode transmission path",
          "Maintained strict one-way packet delivery without bidirectional signaling",
        ],
      },
      {
        title: "Validation & Testing",
        description:
          "Conducted functional and security testing of the diode deployment.",
        points: [
          "Verified forward telemetry transmission (OT to IT) operated correctly",
          "Confirmed complete failure of reverse connection attempts (IT to OT)",
          "Verified syslog and telemetry flow to destination collectors",
          "Documented test procedures and results for operational handover",
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
      { label: "OT / Source Network", sublabel: "Critical Operational Subnet", type: "source" },
      { label: "DATA-OUT (OT TX)", sublabel: "Simplex Egress & Static ARP", type: "process" },
      { label: "Hardware Diode Barrier", sublabel: "Hardware-Enforced Simplex (Zero Reverse Path)", type: "security" },
      { label: "DATA-IN (IT RX)", sublabel: "Simplex Ingress Interface", type: "process" },
      { label: "IT / Monitoring Network", sublabel: "Centralized Telemetry Analysis", type: "destination" },
    ],
    operationalRelevance:
      "Reinforces rigorous mental models of deterministic one-way traffic flow, static ARP packet handling, and strict network boundary segmentation. This foundation enables rapid diagnostic triage of interface anomalies, transit flow disruptions, and secure boundary enforcement in operational environments.",
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
      "Hands-on technical experience during my Cybersecurity Analyst Internship provisioning Ubuntu-based KVM/QEMU virtualization with QCOW2 storage, Linux bridge networking, and virt-manager.",
    teaserMetric: "16+ Servers · KVM/QEMU · Ubuntu Linux",
    metrics: [
      {
        value: "16+",
        label: "Tyrone Bare-Metal Servers",
        detail: "Ubuntu Server bare-metal KVM/QEMU virtualization hosts",
      },
      {
        value: "KVM / QEMU",
        label: "Hypervisor Engine",
        detail: "Kernel-based Virtual Machine virtualization with virt-manager & virsh",
      },
      {
        value: "Linux Bridge",
        label: "Virtual Networking",
        detail:
          "Layer 2 software bridge (br0) providing network connectivity between guest VMs and physical network segments.",
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
      "Ubuntu Server bare-metal infrastructure hosting Kernel-based Virtual Machine (KVM) and QEMU hypervisor components across 16+ Tyrone bare-metal servers.",
    responsibilities: [
      "Configured KVM kernel modules, QEMU virtualization engine, and libvirt daemon on Ubuntu Server.",
      "Configured Linux software bridging (br0) to connect virtual machine interfaces to physical networks.",
      "Provisioned QCOW2 virtual disk images for guest instances.",
      "Created, configured, and managed virtual machines using virt-manager and virsh CLI.",
      "Performed VM resource allocation (vCPU, RAM, storage, network interfaces) and configuration.",
      "Validated VM network connectivity, hypervisor operation, and service availability.",
    ],
    implementation:
      "The deployment established virtualization infrastructure on Ubuntu Server utilizing KVM and QEMU across 16+ Tyrone bare-metal servers. Linux network bridging was configured to provide Layer 2 network connectivity between hosted virtual machines and physical network segments. Virtual machine storage was configured using the QCOW2 format to support virtual disk provisioning. VM creation, configuration, and resource assignments were orchestrated through virt-manager and virsh management tools.",
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
      { label: "Tyrone Bare-Metal Host", sublabel: "Ubuntu Server Host OS & Hardware Virtualization", type: "source" },
      { label: "KVM / QEMU Hypervisor", sublabel: "Kernel Modules & virt-manager / virsh CLI", type: "process" },
      { label: "Linux Bridge (br0) & Storage", sublabel: "Layer 2 Virtual Switching + QCOW2 Volumes", type: "process" },
      { label: "Guest Security VMs", sublabel: "Isolated Ubuntu Security Appliances & Rsyslog", type: "security" },
    ],
    operationalRelevance:
      "Underpins Linux-level host/guest diagnostics, virtual bridge (br0) network troubleshooting, and server resource monitoring. Hands-on administration of hypervisor storage, interface binding, and rsyslog telemetry directly translates to diagnosing virtual appliance availability and infrastructure monitoring alerts.",
    sanitizationDisclaimer:
      "Server IP addresses, credentials, hostnames, file paths, and internal identifiers are omitted for security confidentiality.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find((study) => study.slug === slug);
}

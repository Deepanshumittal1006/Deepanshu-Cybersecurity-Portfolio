# Deepanshu Mittal — Cybersecurity & Network Engineering Portfolio

A modern, enterprise-grade, Next.js-based interactive portfolio showcasing professional experience, deep-dive technical case studies, and core competencies in Network Security, OT/IT Infrastructure, and Telecom NOC Operations.

## 📌 Overview

This repository contains the source code for my professional portfolio. Designed with a dark, cinematic cybersecurity aesthetic, it serves as a central hub for recruiters, engineering managers, and technical peers to review my hands-on enterprise networking and security deployments. 

The platform is built using modern web technologies (**Next.js 14 App Router, React 18, Tailwind CSS, TypeScript**) and follows a strict editorial layout.

## 🚀 Key Features

* **Premium Cybersecurity Aesthetic**: Dark navy/black theme with electric blue and cyan accents, subtle radial glows, and a technical network grid background.
* **Dynamic Active Navigation**: Real-time, DOM-aware scrollspy navbar that accurately highlights the visible section regardless of manual array ordering or routing states.
* **In-Depth Case Studies**: Dedicated routes for major infrastructure deployments featuring architecture flows, metric telemetry strips, and expandable technical deep-dives.
* **Interactive UI Components**: Responsive mobile drawers, glowing hover states, and clean taxonomy badges powered by Tailwind CSS and Lucide React.
* **Static Site Generation (SSG)**: Optimized build output ensuring blazing-fast performance.

---

## 📂 Portfolio Sections

The single-page homepage application (`/`) features the following interconnected sections:

1. **Hero**: Professional summary, role, and direct call-to-actions (Resume & Contact).
2. **Experience**: Career timeline detailing my current NOC engineering role and previous cybersecurity engineering internship.
3. **Skills**: Categorized technical expertise (Network Security, Telecom, OT/Industrial, Systems, Programming).
4. **Case Studies**: High-level telemetry cards summarizing four major infrastructure projects with links to dedicated deep-dive pages.
5. **Certifications**: Track record of industry-recognized vendor certifications (Fortinet, Palo Alto).
6. **Education**: Academic background in Computer Science (AI & ML).
7. **Contact**: Formspree-integrated communication form.

---

## 💼 Professional Experience

### Network Engineer — NOC / L1 Support
**iLayer Solution LLP** *(Aug 2026 — Present)*
* **Role**: Providing Level-1 NOC support for enterprise telecom network infrastructure and operational fault management.
* **Responsibilities**: Level-1 network monitoring, alarm handling, fault isolation, ticket management, and rapid escalation.
* **Tech / Tools**: Huawei U2000 / NCE NMS, DWDM, MPLS, BRAS, SBC, MSAN, Alarm Correlation.

### Cybersecurity Analyst Intern
**ARPR Techsol Pvt. Ltd.** *(Feb 2026 — May 2026)*
* **Domain**: Enterprise & Industrial OT/IT Security
* **Role**: Hands-on engineering intern supporting production OT/IT cybersecurity infrastructure, centralized firewall policy enforcement, industrial network switching, and bare-metal virtualization.
* **Key Achievements**: 
  * Deployed 90+ Fortinet Firewalls across 3 operational sites.
  * Configured 16+ Hirschmann MTS2848 Industrial Switches.
  * Implemented 16+ Rail Data Diodes for hardware-enforced OT/IT unidirectional security.
  * Provisioned 16+ Tyrone bare-metal servers using KVM/QEMU virtualization.

---

## 🔍 Technical Case Studies

### 1. Enterprise Fortinet Firewall Deployment & Centralized Security Management
* **Objective**: Deploy, configure, and administer enterprise Fortinet firewall infrastructure across designated security zones, establishing granular security policies, reliable logging, time synchronization, and centralized policy orchestration.
* **Environment**: Enterprise security infrastructure utilizing FortiGate appliances and FortiManager across segmented environments.
* **Metrics**: 90+ Firewalls · 3 Operational Sites · 18 FortiManager-Managed Devices in HA.
* **Implementation & Responsibilities**: 
  * Provisioned FortiGate interfaces (routed and transparent modes) and zone assignments.
  * Implemented stateful firewall policies with explicit deny-by-default rules and NAT parameters.
  * Integrated appliances into FortiManager for centralized device management, status verification, and firmware workflows.
  * Executed offline FortiGuard licensing procedures for isolated enclaves lacking internet access.
  * Configured NTP time synchronization and remote Syslog forwarding for SIEM correlation.
* **Validation**: Verified management-plane reachability, policy enforcement, Syslog ingestion, and FortiManager sync status.

### 2. Industrial Network Infrastructure & Layer 3 Switching
* **Objective**: Deploy and configure Hirschmann industrial switching hardware to provide deterministic Layer 2/3 network segmentation, inter-VLAN routing, default gateway redundancy, and traffic visibility.
* **Environment**: Operational Technology (OT) network utilizing Hirschmann MTS2848 managed industrial switches.
* **Metrics**: 16+ Switches · Layer 3 Routing & Segmentation · HiOS Operating System.
* **Implementation & Responsibilities**: 
  * Configured 802.1Q VLANs, access ports, trunking, and SFP optical/copper uplinks.
  * Implemented Layer 3 Switched Virtual Interfaces (SVIs) and static routing tables.
  * Established Virtual Router Redundancy Protocol (VRRP) for default gateway resilience with Master/Backup priority states.
  * Implemented SPAN port mirroring sessions to export traffic to security analysis endpoints.
  * Integrated SNMP, NTP, and remote Syslog monitoring capabilities.

### 3. OT Security — Hardware-Enforced Unidirectional Data Flow
* **Objective**: Implement a physical-layer unidirectional communication boundary between critical OT systems and IT monitoring networks, eliminating the reverse communication path across the protected boundary.
* **Environment**: OT network boundary integrated with Rail Data Diode hardware and Hirschmann HiOS switches.
* **Metrics**: 16+ Rail Data Diodes · Hardware-Enforced Simplex Isolation · Static ARP.
* **Implementation & Responsibilities**: 
  * Configured boundary VLANs on Hirschmann switches interfacing with diode TX and RX ports.
  * Configured Static ARP mappings to enable unidirectional MAC address resolution without relying on reverse ARP queries.
  * Defined deterministic static routes directing outbound telemetry toward the diode transmitter.
  * Validated physical and logical one-way data transport (zero return packets) and telemetry parsing on the destination IT collector.

### 4. KVM/QEMU Virtualization & Linux Infrastructure Deployment
* **Objective**: Deploy and maintain Linux-based kernel virtualization infrastructure to host virtualized security appliances and testbed systems.
* **Environment**: Ubuntu Server bare-metal infrastructure hosting KVM and QEMU across 16+ Tyrone servers.
* **Metrics**: 16+ Tyrone Bare-Metal Servers · KVM/QEMU Hypervisor Engine · Linux Bridge Virtual Networking.
* **Implementation & Responsibilities**: 
  * Configured KVM kernel modules and QEMU hypervisor services.
  * Created Linux network software bridge interfaces (`br0`) bound to physical adapters for Layer 2 connectivity.
  * Provisioned QCOW2 virtual disk storage images.
  * Orchestrated VM creation, vCPU, RAM, and network assignments utilizing `virt-manager` and `virsh` command-line tools.
  * Configured centralized `rsyslog` telemetry collection across the guest security VMs.

---

## 🛠️ Technical Skills

* **Network Security**: Fortinet Firewalls (FortiGate), FortiManager HA, Firewall Policy Management, IPS/IDS, Network Segmentation, Transparent & NAT Modes.
* **Networking & Telecom**: NOC & L1 Troubleshooting, Huawei NMS (U2000 / NCE), Layer 2 & Layer 3 Networking, VLANs & Inter-VLAN Routing, VRRP Gateway Redundancy, DWDM, MPLS, BRAS.
* **OT / Industrial Infrastructure**: Hirschmann MTS2848 (HiOS), Rail Data Diode (Unidirectional), OT/IT Perimeter Isolation, Static ARP & Diode Routing, SPAN Port Traffic Mirroring.
* **Systems & Monitoring**: KVM / QEMU Virtualization, Ubuntu / Linux Administration, FortiSIEM & Syslog Analysis, Alarm Correlation, `virt-manager` & Bridge Networking, SNMP & NTP.
* **Programming & Tools**: Python, Bash Scripting, Git & GitHub, Linux CLI, VS Code, Cisco Packet Tracer.

---

## 🎓 Education & Certifications

* **Certifications**: 
  * Fortinet Certified Fundamentals in Cybersecurity (NSE 1 & NSE 2) — *Certified*
  * Deloitte Cybersecurity Virtual Internship — *Training Completed*
  * Palo Alto Networks Certified Cybersecurity Practitioner — *In Progress*
* **Education**: 
  * B.Tech in Computer Science (AI & ML) — Panipat Institute of Engineering and Technology (2022 - 2026).
  * Higher Secondary Education (Class XII) — Govt. Sr. Sec. School (86%).

---

## 🏗️ Architecture & Tech Stack

* **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
* **Library**: [React 18](https://react.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Utility**: `clsx` & `tailwind-merge` for robust CSS class composition.

---

## 📁 Project Structure

```
deepanshu-cybersecurity-portfolio/
├── public/                 # Static assets (Resume, Images, audio)
├── src/
│   ├── app/                # Next.js App Router pages (Home, Case Studies)
│   ├── components/         # Reusable React components
│   │   ├── case-study/     # Case study specific UI (Header, Metrics, Deep Dive)
│   │   ├── common/         # Layout primitives (Container, SectionHeader)
│   │   ├── layout/         # Global layout components (Navbar, Footer)
│   │   └── ui/             # Core UI elements (Buttons, Badges, TechTags)
│   ├── data/               # Static TypeScript data stores driving the content
│   ├── lib/                # Utility functions (e.g., cn wrapper)
│   └── types/              # Global TypeScript interfaces
├── package.json            # Dependencies & Scripts
├── tailwind.config.ts      # Tailwind & Custom Theme Configuration
└── README.md               # You are here
```

---

## 💻 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Deepanshumittal1006/Deepanshu-Cybersecurity-Portfolio.git
   cd Deepanshu-Cybersecurity-Portfolio
   ```

2. **Install dependencies:**
   Ensure Node.js is installed, then run:
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:3000`.*

4. **Production Build:**
   ```bash
   npm run build
   npm run start
   ```

*(Note: There are no hidden `.env` requirements to run this project locally. The contact form points to a public Formspree endpoint).*

---

## 🎨 UI/UX & Design Philosophy

The portfolio was strictly designed to mirror enterprise-grade security dashboards and premium technical documentation. 
* **Whitespace & Typography over Boxes**: Emphasizes content hierarchy through padding and cinematic borders rather than nested, heavy cards.
* **Telemetry Strips**: Metrics are presented as clean, horizontal data strips.
* **No Decorative Numbering**: The UI explicitly avoids decorative indexing (`01`, `02`) to maintain a serious, factual layout.
* **Performance**: Built completely modularly utilizing server-side rendering (SSR) and static generation (SSG). 

---
*Developed & Maintained by Deepanshu Mittal.*

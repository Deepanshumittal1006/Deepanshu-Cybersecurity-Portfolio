import React from "react";
import {
  Shield,
  Server,
  Network,
  Database,
  ArrowRight,
  Lock,
  Cpu,
  Layers,
  HardDrive,
  Activity,
  Radio,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { CaseStudyArchitectureNode, CaseStudySlug } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface DiagramProps {
  title?: string;
  slug?: CaseStudySlug;
  nodes?: CaseStudyArchitectureNode[];
  className?: string;
}

export function CaseStudyArchitectureDiagram({
  title = "Sanitized Conceptual Architecture Flow",
  slug,
  nodes = [],
  className,
}: DiagramProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-800 bg-cyber-surface/90 p-5 sm:p-6 backdrop-blur-sm space-y-6",
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-sky-400" />
          <h3 className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-slate-200">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Sanitized Production Flow
          </span>
        </div>
      </div>

      {/* Render Slug-Specific Architecture Diagram */}
      {slug === "fortinet" && <FortinetArchitectureDiagram />}
      {slug === "hirschmann" && <HirschmannArchitectureDiagram />}
      {slug === "data-diode" && <DataDiodeArchitectureDiagram />}
      {slug === "kvm" && <KvmArchitectureDiagram />}

      {/* Fallback Flow when slug is not matched */}
      {!slug && nodes.length > 0 && <DefaultFlowDiagram nodes={nodes} />}
    </div>
  );
}

// 1. Fortinet Firewall Architecture Diagram
function FortinetArchitectureDiagram() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Node 1: Protected Network Zone */}
        <div className="lg:col-span-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Zone 01 · Ingress
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-800/50 text-sky-400 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">Protected Zones</h4>
              <p className="text-[11px] font-mono text-slate-400">Internal & DMZ Subnets</p>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono space-y-1">
            <p>• Enterprise Workloads</p>
            <p>• Segmented VLAN Enclaves</p>
          </div>
        </div>

        {/* Connector 1 */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center text-sky-400 py-1 lg:py-0">
          <div className="hidden lg:block w-px h-2 bg-slate-800" />
          <ArrowRight className="w-4 h-4" />
          <div className="hidden lg:block w-px h-2 bg-slate-800" />
        </div>

        {/* Node 2: FortiGate Core Inspection */}
        <div className="lg:col-span-4 p-4 rounded-xl bg-sky-950/40 border border-sky-800/80 flex flex-col space-y-2 relative shadow-lg shadow-sky-950/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-sky-300 uppercase tracking-wider font-semibold">
              Security Plane · Core
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-sky-300 bg-sky-900/60 px-1.5 py-0.5 rounded border border-sky-700/60">
              90+ Firewalls · 3 Sites
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-900/80 border border-sky-600/60 text-sky-200 shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">FortiGate Security Infrastructure</h4>
              <p className="text-[11px] font-mono text-sky-300">Stateful Inspection & Policy Engine</p>
            </div>
          </div>
          <div className="pt-2 border-t border-sky-800/60 text-[11px] text-slate-300 font-mono space-y-1">
            <p>• Stateful Policy Rulebases</p>
            <p>• Inline Transparent / NAT Modes</p>
            <p>• IPS & Access Control Lists</p>
          </div>
        </div>

        {/* Connector 2 */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center text-sky-400 py-1 lg:py-0">
          <div className="hidden lg:block w-px h-2 bg-slate-800" />
          <ArrowRight className="w-4 h-4" />
          <div className="hidden lg:block w-px h-2 bg-slate-800" />
        </div>

        {/* Node 3 & 4: Management & Syslog */}
        <div className="lg:col-span-3 space-y-3">
          {/* Top: FortiManager */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider">
                Management Plane
              </span>
              <span className="text-[10px] font-mono text-slate-400">18 Managed Devices</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-teal-950/80 border border-teal-800/50 text-teal-300 shrink-0">
                <Network className="w-3.5 h-3.5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-100">FortiManager HA</h5>
                <p className="text-[10px] font-mono text-slate-400">Centralized Policy & Firmware</p>
              </div>
            </div>
          </div>

          {/* Bottom: Syslog / SIEM */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">
                Telemetry & Audit
              </span>
              <span className="text-[10px] font-mono text-slate-400">NTP Synced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-sky-950/80 border border-sky-800/50 text-sky-300 shrink-0">
                <Database className="w-3.5 h-3.5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-100">Syslog / FortiSIEM</h5>
                <p className="text-[10px] font-mono text-slate-400">Central Event Collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
        <span>[Flow]: Ingress Traffic → Stateful Inspection → Policy Decision → Centralized Log Forwarding</span>
        <span className="text-sky-400">Orchestration: FortiManager HA</span>
      </div>
    </div>
  );
}

// 2. Hirschmann Industrial Switching Architecture Diagram
function HirschmannArchitectureDiagram() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Node 1: Industrial Endpoints */}
        <div className="lg:col-span-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Access Tier
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-teal-950/80 border border-teal-800/50 text-teal-400 shrink-0">
              <Radio className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">Industrial Endpoints</h4>
              <p className="text-[11px] font-mono text-slate-400">OT Controllers & Field Devices</p>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono space-y-1">
            <p>• 802.1Q Segmented VLANs</p>
            <p>• Isolated Access Ports</p>
          </div>
        </div>

        {/* Connector 1 */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center text-teal-400 py-1 lg:py-0">
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Node 2: Hirschmann Core */}
        <div className="lg:col-span-4 p-4 rounded-xl bg-teal-950/40 border border-teal-800/80 flex flex-col space-y-2 relative shadow-lg shadow-teal-950/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-teal-300 uppercase tracking-wider font-semibold">
              Layer 3 Industrial Core
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-teal-300 bg-teal-900/60 px-1.5 py-0.5 rounded border border-teal-700/60">
              16+ Switches · HiOS
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-teal-900/80 border border-teal-600/60 text-teal-200 shrink-0">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">Hirschmann MTS2848</h4>
              <p className="text-[11px] font-mono text-teal-300">Inter-VLAN & Static Routing</p>
            </div>
          </div>
          <div className="pt-2 border-t border-teal-800/60 text-[11px] text-slate-300 font-mono space-y-1">
            <p>• SFP Optical / Copper Uplinks</p>
            <p>• SVI Layer 3 Forwarding</p>
            <p>• VLAN Tagging & Trunking</p>
          </div>
        </div>

        {/* Connector 2 */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center text-teal-400 py-1 lg:py-0">
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Node 3 & 4: VRRP & SPAN */}
        <div className="lg:col-span-3 space-y-3">
          {/* VRRP */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">
                Gateway Redundancy
              </span>
              <span className="text-[10px] font-mono text-slate-400">Active / Standby</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-sky-950/80 border border-sky-800/50 text-sky-300 shrink-0">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-100">VRRP Protocol</h5>
                <p className="text-[10px] font-mono text-slate-400">Default Gateway Failover</p>
              </div>
            </div>
          </div>

          {/* SPAN & Syslog */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider">
                Visibility & Health
              </span>
              <span className="text-[10px] font-mono text-slate-400">SNMP / SPAN</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-teal-950/80 border border-teal-800/50 text-teal-300 shrink-0">
                <Activity className="w-3.5 h-3.5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-100">SPAN Port Mirror</h5>
                <p className="text-[10px] font-mono text-slate-400">Analysis Probe & Syslog</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
        <span>[Flow]: Industrial Access → MTS2848 Inter-VLAN Routing → VRRP Gateway Redundancy → SPAN Mirror</span>
        <span className="text-teal-400">Resilience: VRRP-Based Gateway Failover</span>
      </div>
    </div>
  );
}

// 3. Rail Data Diode Architecture Diagram
function DataDiodeArchitectureDiagram() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
        {/* Node 1: OT Source Network */}
        <div className="lg:col-span-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
              OT Protected Zone
            </span>
            <span className="w-2 h-2 rounded-full bg-amber-400" />
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-950/80 border border-amber-800/50 text-amber-400 shrink-0">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">OT Source Network</h4>
              <p className="text-[11px] font-mono text-slate-400">SCADA & Industrial Telemetry</p>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono space-y-1">
            <p>• Egress-Only Telemetry</p>
            <p>• Static ARP Resolution</p>
          </div>
        </div>

        {/* Connector: Forward Simplex */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center text-emerald-400 py-1 lg:py-0">
          <div className="flex items-center gap-1 text-[10px] font-mono bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-700/60">
            <span>TX</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Node 2: Hardware-Enforced Unidirectional Diode Barrier */}
        <div className="lg:col-span-4 p-4 rounded-xl bg-emerald-950/40 border-2 border-emerald-600/80 flex flex-col space-y-2 relative shadow-lg shadow-emerald-950/50">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider font-bold">
              Hardware Diode Barrier
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-300 bg-emerald-900/80 px-1.5 py-0.5 rounded border border-emerald-700">
              16+ Rail Data Diodes
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-900/90 border border-emerald-500/70 text-emerald-200 shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">Hardware-Enforced Isolation</h4>
              <p className="text-[11px] font-mono text-emerald-300">Physical Simplex Unidirectional Data Flow</p>
            </div>
          </div>
          <div className="pt-2 border-t border-emerald-800/70 text-[11px] text-emerald-100 font-mono space-y-1">
            <p className="flex items-center gap-1 text-emerald-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Forward: DATA-OUT → DATA-IN</span>
            </p>
            <p className="text-amber-300 text-[10px]">
              ⛔ Reverse: Physical Return Path Completely Eliminated
            </p>
          </div>
        </div>

        {/* Connector: Forward Simplex */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center text-emerald-400 py-1 lg:py-0">
          <div className="flex items-center gap-1 text-[10px] font-mono bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-700/60">
            <span>RX</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Node 3: Enterprise IT / Monitoring */}
        <div className="lg:col-span-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
              IT Ingestion Tier
            </span>
            <span className="w-2 h-2 rounded-full bg-sky-400" />
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-800/50 text-sky-400 shrink-0">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">Enterprise IT / SIEM</h4>
              <p className="text-[11px] font-mono text-slate-400">Central Telemetry Collectors</p>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono space-y-1">
            <p>• Ingestion Analytics</p>
            <p>• Zero Inbound Routing Path</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
        <span>[Enforcement]: Hardware-Enforced Physical Unidirectional Isolation — Data Flows Exclusively OT → IT</span>
        <span className="text-emerald-400 font-semibold">Zero Inbound Return Path Enforced</span>
      </div>
    </div>
  );
}

// 4. KVM/QEMU Virtualization Architecture Diagram
function KvmArchitectureDiagram() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Node 1: Bare-Metal Host */}
        <div className="lg:col-span-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Layer 01 · Bare-Metal
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 shrink-0">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">Tyrone Bare-Metal</h4>
              <p className="text-[11px] font-mono text-slate-400">16+ Bare-Metal Servers</p>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono space-y-1">
            <p>• Ubuntu Server Host OS</p>
            <p>• Intel VT-x / AMD-V CPU</p>
          </div>
        </div>

        {/* Connector 1 */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center text-sky-400 py-1 lg:py-0">
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Node 2: KVM Hypervisor & Bridge Networking */}
        <div className="lg:col-span-4 p-4 rounded-xl bg-sky-950/40 border border-sky-800/80 flex flex-col space-y-2 relative shadow-lg shadow-sky-950/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-sky-300 uppercase tracking-wider font-semibold">
              Layer 02 · Hypervisor Core
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-sky-300 bg-sky-900/60 px-1.5 py-0.5 rounded border border-sky-700/60">
              Kernel Virtualization
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-900/80 border border-sky-600/60 text-sky-200 shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">KVM / QEMU Engine</h4>
              <p className="text-[11px] font-mono text-sky-300">virt-manager & virsh CLI</p>
            </div>
          </div>
          <div className="pt-2 border-t border-sky-800/60 text-[11px] text-slate-300 font-mono space-y-1">
            <p>• Linux Software Bridge (br0)</p>
            <p>• QCOW2 Virtual Disk Storage</p>
            <p>• vCPU & Memory Allocations</p>
          </div>
        </div>

        {/* Connector 2 */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center text-sky-400 py-1 lg:py-0">
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Node 3: Guest Security VMs */}
        <div className="lg:col-span-3 space-y-3">
          {/* Security VMs */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                Layer 03 · Guest VMs
              </span>
              <span className="text-[10px] font-mono text-slate-400">TAP Interfaces</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 shrink-0">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-100">Ubuntu Security VMs</h5>
                <p className="text-[10px] font-mono text-slate-400">Virtualized Appliances</p>
              </div>
            </div>
          </div>

          {/* QCOW2 Storage */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">
                Virtual Storage Pool
              </span>
              <span className="text-[10px] font-mono text-slate-400">qemu-img</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-sky-950/80 border border-sky-800/50 text-sky-300 shrink-0">
                <HardDrive className="w-3.5 h-3.5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-100">QCOW2 Disk Images</h5>
                <p className="text-[10px] font-mono text-slate-400">Copy-On-Write Storage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
        <span>[Architecture]: 16+ Bare-Metal Tyrone Hosts → KVM/QEMU Kernel Hypervisor → Linux Bridge (br0) → Guest Security VMs</span>
        <span className="text-sky-400">Storage: QCOW2 Volumes</span>
      </div>
    </div>
  );
}

// Fallback Default Flow
function DefaultFlowDiagram({ nodes }: { nodes: CaseStudyArchitectureNode[] }) {
  const getIcon = (type?: string) => {
    switch (type) {
      case "security":
        return <Shield className="w-4 h-4 text-sky-400" />;
      case "process":
        return <Network className="w-4 h-4 text-teal-400" />;
      case "destination":
        return <Database className="w-4 h-4 text-sky-300" />;
      case "source":
      default:
        return <Server className="w-4 h-4 text-slate-300" />;
    }
  };

  const getNodeStyles = (type?: string) => {
    switch (type) {
      case "security":
        return "bg-sky-950/80 border-sky-600/70 text-sky-200 shadow-sm shadow-sky-950/50";
      case "process":
        return "bg-teal-950/70 border-teal-700/60 text-teal-200";
      case "destination":
        return "bg-slate-900/90 border-slate-700/80 text-slate-200";
      case "source":
      default:
        return "bg-slate-900/90 border-slate-800 text-slate-200";
    }
  };

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto py-2">
      {nodes.map((node, index) => (
        <React.Fragment key={index}>
          <div
            className={cn(
              "w-full px-4 py-3 rounded-lg border flex items-center gap-3 transition-all",
              getNodeStyles(node.type)
            )}
          >
            <div className="p-1.5 rounded bg-slate-950/60 border border-white/5 shrink-0">
              {getIcon(node.type)}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-100 truncate">
                {node.label}
              </span>
              {node.sublabel && (
                <span className="text-[11px] font-mono text-slate-400 truncate">
                  {node.sublabel}
                </span>
              )}
            </div>
          </div>

          {index < nodes.length - 1 && (
            <div className="flex flex-col items-center my-1.5 text-sky-400/80">
              <div className="w-px h-2.5 bg-slate-700" />
              <ArrowRight className="w-3.5 h-3.5 rotate-90" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

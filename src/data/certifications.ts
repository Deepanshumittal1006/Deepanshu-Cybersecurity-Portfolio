import { CertificationItem } from "@/types/portfolio";

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "[ADD VERIFIED CERTIFICATION / TRAINING TITLE 1]",
    issuingBody: "[ADD ISSUING ORGANIZATION / VENDOR]",
    status: "Certified",
    credentialId: "[ADD CREDENTIAL ID]",
    verificationUrl: "[ADD VERIFICATION URL]",
    date: "[ADD ISSUE DATE]",
  },
  {
    id: "cert-2",
    title: "[ADD VERIFIED CERTIFICATION / TRAINING TITLE 2]",
    issuingBody: "[ADD ISSUING ORGANIZATION / VENDOR]",
    status: "Training Completed",
    credentialId: "[ADD CREDENTIAL ID / N/A]",
    verificationUrl: "[ADD VERIFICATION URL / OPTIONAL]",
    date: "[ADD DATE]",
  },
  {
    id: "cert-3",
    title: "[ADD TARGET CERTIFICATION / IN PROGRESS]",
    issuingBody: "[ADD ISSUING ORGANIZATION]",
    status: "In Progress",
    date: "Target: [ADD TARGET DATE]",
  },
];

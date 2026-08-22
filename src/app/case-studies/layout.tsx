import React from "react";
import { Container } from "@/components/common/Container";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-28 sm:pt-36 pb-12 sm:pb-16">
      <Container className="max-w-5xl">{children}</Container>
    </div>
  );
}

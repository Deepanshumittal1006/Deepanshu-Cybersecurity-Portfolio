import React from "react";
import { Container } from "@/components/common/Container";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-10 sm:py-14">
      <Container className="max-w-5xl">{children}</Container>
    </div>
  );
}

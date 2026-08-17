import { MetadataRoute } from "next";
import { caseStudiesData } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio.local";

  const caseStudyUrls = caseStudiesData.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...caseStudyUrls,
  ];
}

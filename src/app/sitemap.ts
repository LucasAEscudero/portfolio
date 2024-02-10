import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/#profile`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/#projects`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/#technologies`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/#formation`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/#contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/CV - Escudero Lucas.pdf`,
    },
  ];
}

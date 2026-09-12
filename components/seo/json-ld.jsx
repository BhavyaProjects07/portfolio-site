import { getPersonJsonLd, getWebSiteJsonLd, getProjectsJsonLd } from "@/lib/structured-data";

export function JsonLd({ siteUrl = "https://bhavya-sharma.dev" }) {
  const personData = getPersonJsonLd(siteUrl);
  const websiteData = getWebSiteJsonLd(siteUrl);
  const projectsData = getProjectsJsonLd(siteUrl);

  return (
    <>
      <script
        id="json-ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        id="json-ld-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsData) }}
      />
    </>
  );
}

import { PERSONAL_INFO, PROJECTS } from "./portfolio-data";

export function getPersonJsonLd(siteUrl = "https://bhavya-sharma.dev") {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: PERSONAL_INFO.name,
    alternateName: [
      "Bhavya Sharma",
      "Bhavya Sharma Developer",
      "Bhavya Sharma Full Stack Developer",
      "Bhavya Sharma Next.js Developer",
      "Bhavya Sharma Freelance Developer",
      "Bhavya Sharma SEO Specialist"
    ],
    jobTitle: PERSONAL_INFO.title,
    description: PERSONAL_INFO.shortBio,
    url: siteUrl,
    image: `${siteUrl}/bhavya-sharma.jpg`,
    email: `mailto:${PERSONAL_INFO.email}`,
    telephone: PERSONAL_INFO.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      addressCountry: "India"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: PERSONAL_INFO.education.university,
      location: PERSONAL_INFO.education.location
    },
    sameAs: [
      PERSONAL_INFO.linkedin,
      PERSONAL_INFO.github
    ],
    knowsAbout: [
      "Next.js",
      "React.js",
      "Django",
      "Python",
      "PostgreSQL",
      "Full Stack Web Development",
      "AI-Powered Applications",
      "Google Gemini API",
      "E-commerce Web Applications",
      "Search Engine Optimization (SEO)",
      "Technical SEO & Schema.org",
      "RESTful API Development",
      "Tailwind CSS",
      "Cloud Deployment"
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Smart Tap System AI Startup",
        url: "https://smart-tap-system.vercel.app/"
      }
    ]
  };
}

export function getWebSiteJsonLd(siteUrl = "https://bhavya-sharma.dev") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Bhavya Sharma | Freelance Full Stack Developer & SEO Specialist",
    description:
      "Production portfolio of Bhavya Sharma, Freelance Full Stack Developer specializing in Next.js, React.js, Django, PostgreSQL, and Advanced Search Engine Optimization (SEO) in Dehradun, India.",
    publisher: {
      "@id": `${siteUrl}/#person`
    },
    inLanguage: "en-US"
  };
}

export function getProjectsJsonLd(siteUrl = "https://bhavya-sharma.dev") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PROJECTS.map((proj, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "SoftwareApplication",
        name: proj.name,
        applicationCategory: proj.category,
        operatingSystem: "Web Browser",
        description: proj.description,
        url: proj.liveUrl,
        creator: {
          "@type": "Person",
          name: PERSONAL_INFO.name
        },
        softwareRequirements: proj.stack.join(", ")
      }
    }))
  };
}

export function getBreadcrumbJsonLd(items, siteUrl = "https://bhavya-sharma.dev") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`
    }))
  };
}

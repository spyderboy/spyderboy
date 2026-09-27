import { CONTACT, SITE } from '@/lib/constants';
import { PROJECTS } from '@/lib/projects';

// schema.org JSON-LD: who runs the site and what's on it, so search engines can
// tie spyderboy.com to the name and to each product.
export default function StructuredData() {
  const personId = `${SITE.url}/#person`;
  const graph = [
    {
      '@type': 'Person',
      '@id': personId,
      name: 'Jose Antonio Licon',
      alternateName: 'Spyderboy',
      url: SITE.url,
      image: SITE.avatar,
      jobTitle: 'Developer and product manager',
      address: { '@type': 'PostalAddress', addressLocality: 'Pittsburgh', addressRegion: 'PA', addressCountry: 'US' },
      sameAs: [CONTACT.github, CONTACT.twitter, CONTACT.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { '@id': personId },
    },
    {
      '@type': 'ItemList',
      name: 'Projects',
      itemListElement: PROJECTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: p.name,
          description: p.description || p.tagline,
          url: p.liveUrl ?? `${SITE.url}/#${p.id}`,
          ...(p.screenshots[0] && { image: `${SITE.url}${p.screenshots[0].src}` }),
          ...((p.appStore || p.playStore) && { sameAs: [p.appStore, p.playStore].filter(Boolean) }),
          author: { '@id': personId },
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // JSON.stringify escapes quotes; also neutralize "</" so copy can't close the tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c'),
      }}
    />
  );
}

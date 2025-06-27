// components/SeoHelmet.tsx
import { Helmet } from 'react-helmet-async';

interface SeoHelmetProps {
  title: string;
  description: string;
  keywords: string;
  path: string;
}

const SeoHelmet = ({ title, description, keywords, path }: SeoHelmetProps) => {
  const baseUrl = 'https://chitchatai.co.za';
  const canonicalUrl = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}/branding/chitchatAI.png`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ChitChat AI" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ChitChatAI" />
      <meta name="twitter:creator" content="@ChitChatAI" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": canonicalUrl,
          "publisher": {
            "@type": "Organization",
            "name": "ChitChat AI",
            "logo": {
              "@type": "ImageObject",
              "url": imageUrl
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SeoHelmet;
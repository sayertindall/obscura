import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      {/* General Meta */}
      <title>Obscura Holdings | Precision in Capital & Commodities</title>
      <meta
        name="description"
        content="Obscura Holdings - Navigating complex markets with precision and discretion."
      />
      <meta
        name="keywords"
        content="Obscura Holdings, financial markets, investment, precision trading"
      />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Obscura Holdings" />
      <meta
        property="og:title"
        content="Obscura Holdings | Precision in Capital & Commodities"
      />
      <meta
        property="og:description"
        content="Navigating complex markets with precision and discretion."
      />
      <meta
        property="og:image"
        content="https://obscura.holdings/og-image.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://obscura.holdings" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Obscura Holdings | Precision in Capital & Commodities"
      />
      <meta
        name="twitter:description"
        content="Navigating complex markets with precision and discretion."
      />
      <meta
        name="twitter:image"
        content="https://obscura.holdings/twitter-image.png"
      />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="600" />
    </Helmet>
  );
};

export default SEO;

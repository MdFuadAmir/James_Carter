// src/Components/SEO.jsx

import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "James Carter | Professional Photographer",
  description = "Professional wedding, portrait, and lifestyle photographer capturing timeless cinematic moments.",
  image = "https://i.ibb.co.com/WNqYCBcV/fuad.png",
  url = "https://james-carter-ivory.vercel.app",
}) => {
  return (
    <Helmet>
      {/* BASIC SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="photographer, wedding photography, portrait photography, cinematic photography, professional photographer"
      />

      <meta name="author" content="James Carter" />

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;

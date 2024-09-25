import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SeoPageProps {
  title: string;
  description: string;
  imageUrl: string;
  children: ReactNode;
}
export const SeoPage: React.FC<SeoPageProps> = ({
  title,
  description,
  imageUrl,
  children,
}: SeoPageProps) => {
  const location = useLocation();
  const url = location.pathname + location.search + location.hash;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="iframely:title" content={title} />
        <meta property="iframely:description" content={description} />
        <meta property="iframely:image" content={imageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta name="description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="benazoulaydev.github.io" />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      {children}
    </>
  );
};

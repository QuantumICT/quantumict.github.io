import { Helmet } from "react-helmet-async";
import type { FC } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string[] | string;
  noindex?: boolean;
}

export const PageMeta: FC<PageMetaProps> = ({
  title,
  description,
  keywords,
  noindex = false,
}) => {
  const keywordsContent = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {!!keywords?.length && (
        <meta name="keywords" content={keywordsContent} />
      )}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

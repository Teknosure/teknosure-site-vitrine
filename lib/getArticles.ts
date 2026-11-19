import { getPayload } from "payload";
import config from "@payload-config";
import { articles as staticArticles, type Article as StaticArticle } from "@/app/(frontend)/blog/data";

export type Article = StaticArticle & {
  contentType: "markdown" | "lexical";
  lexicalContent?: unknown;
};

const formatDate = (value?: string | Date | null) => {
  if (!value) return "";
  return new Date(value).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const mediaUrl = (image: unknown): string => {
  if (typeof image === "object" && image && "url" in image && typeof image.url === "string") {
    return image.url;
  }
  return "/images/blog/blog-cyberattaque.jpg";
};

const fromStatic = (article: StaticArticle): Article => ({
  ...article,
  contentType: "markdown",
});

const fromPayload = (doc: {
  slug?: string | null;
  category?: string | null;
  readTime?: string | null;
  publishedAt?: string | Date | null;
  title?: string | null;
  excerpt?: string | null;
  image?: unknown;
  featured?: boolean | null;
  content?: unknown;
  externalUrl?: string | null;
}): Article | null => {
  if (!doc.slug || !doc.title || !doc.excerpt) return null;
  return {
    slug: doc.slug,
    category: doc.category || "Veille",
    readTime: doc.readTime || "5 min",
    date: formatDate(doc.publishedAt),
    title: doc.title,
    excerpt: doc.excerpt,
    image: mediaUrl(doc.image),
    featured: Boolean(doc.featured),
    content: "",
    contentType: "lexical",
    lexicalContent: doc.content,
    externalUrl: doc.externalUrl || undefined,
  };
};

export async function getArticles(): Promise<Article[]> {
  let payloadArticles: Article[] = [];

  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      // Types régénérés après ajout de la collection Articles
      collection: "articles" as never,
      where: {
        _status: {
          equals: "published",
        },
      },
      sort: "-publishedAt",
      depth: 1,
      limit: 50,
    });
    payloadArticles = result.docs
      .map((doc) => fromPayload(doc as Parameters<typeof fromPayload>[0]))
      .filter((article): article is Article => article !== null);
  } catch (err) {
    console.error(
      "[getArticles] Payload/PostgreSQL injoignable, repli sur les articles statiques :",
      err instanceof Error ? err.message : err
    );
    payloadArticles = [];
  }

  const payloadSlugs = new Set(payloadArticles.map((article) => article.slug));
  const remainingStatic = staticArticles
    .filter((article) => !payloadSlugs.has(article.slug))
    .map(fromStatic);

  return [...payloadArticles, ...remainingStatic];
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug);
}

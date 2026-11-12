import type { CollectionConfig } from "payload";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const Articles: CollectionConfig = {
  slug: "articles",
  labels: {
    singular: "Article",
    plural: "Articles",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "featured", "_status", "publishedAt"],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      return {
        _status: {
          equals: "published",
        },
      };
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Titre",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      label: "Slug",
      admin: {
        position: "sidebar",
        description: "Identifiant dans l'URL, ex. nis2-directive-dsi",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      defaultValue: "Veille",
      options: [
        { label: "Interview", value: "Interview" },
        { label: "ETI & PME", value: "ETI & PME" },
        { label: "IA & Sécurité", value: "IA & Sécurité" },
        { label: "Conformité", value: "Conformité" },
        { label: "Cybersécurité", value: "Cybersécurité" },
        { label: "Cloud", value: "Cloud" },
        { label: "Veille", value: "Veille" },
      ],
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      label: "Chapô",
      admin: {
        description: "Court résumé affiché sur la liste des articles.",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Image",
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Contenu",
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Mettre à la une",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "readTime",
      type: "text",
      defaultValue: "5 min",
      label: "Temps de lecture",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      label: "Date de publication",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMMM yyyy",
        },
      },
    },
    {
      name: "externalUrl",
      type: "text",
      label: "Lien externe (optionnel)",
      admin: {
        position: "sidebar",
        description: "Si renseigné, le clic redirige vers cet article externe.",
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data;
        if (data.title && !data.slug) {
          data.slug = slugify(data.title);
        }
        if (!data.publishedAt) {
          data.publishedAt = new Date().toISOString();
        }
        return data;
      },
    ],
  },
};

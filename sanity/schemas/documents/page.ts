import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "page",
  title: "Page",
  icon: DocumentIcon,
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "array",
      name: "body",
      title: "Content",
      description:
        "This is where you can write the page's content. Including custom blocks like timelines for more a more visual display of information.",
      of: [
        defineArrayMember({ name: "page-text-image", type: "textImage" }),
        defineArrayMember({ name: "page-faq-block", type: "faqBlock" }),
        defineArrayMember({ name: "page-card-block", type: "cardPriceBlock" }),
        defineArrayMember({ name: "page-rich-text", type: "richText" }),
      ],
      validation: (rule) => rule.min(1).required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
});

import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "faqBlock",
  title: "FAQs",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Introduction",
      name: "intro",
      type: "array",
      of: [{ type: "block" }], // rich text example
    }),
    defineField({
      type: "array",
      name: "faqs",
      title: "Frequently Asked Questions",
      of: [{ type: "faq" }],
    }),
  ],
});

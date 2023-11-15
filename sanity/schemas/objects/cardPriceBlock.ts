import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "cardPriceBlock",
  title: "Pricing",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      validation: (rule) => rule.max(3),
      title: "Prices",
      name: "cards",
      type: "array",
      of: [{ type: "cardPrice" }],
    }),
  ],
});

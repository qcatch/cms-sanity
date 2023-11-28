import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "cardPriceBlock",
  title: "Card Block",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Price",
      name: "price",
      type: "string",
    }),
    defineField({
      validation: (rule) => rule.max(3),
      title: "Cards",
      name: "cards",
      type: "array",
      of: [{ type: "cardPrice" }],
    }),
  ],
});

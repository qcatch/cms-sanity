import { defineArrayMember, defineField } from "sanity";
import { ImageIcon } from "@sanity/icons";

export default defineField({
  type: "object",
  name: "cardPrice",
  title: "Pricing Card",
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
      title: "Term",
      name: "term",
      type: "string",
    }),
    defineField({
      title: "Button",
      name: "link",
      type: "button",
    }),
    defineField({
      title: "Options",
      name: "options",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});

import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "cardPrice",
  title: "Card",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
    }),
    defineField({
      title: "Quote",
      name: "quote",
      type: "string",
    }),
  ],
});

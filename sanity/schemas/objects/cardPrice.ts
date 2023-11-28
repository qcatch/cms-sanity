import { defineArrayMember, defineField } from "sanity";
import { ImageIcon } from "@sanity/icons";

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
    defineField({
      title: "Job",
      name: "job",
      type: "string",
    }),
  ],
});

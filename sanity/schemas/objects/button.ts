import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "button",
  title: "Button",
  fields: [
    defineField({
      type: "string",
      name: "label",
      title: "Button Label",
    }),
    defineField({
      type: "reference",
      name: "link",
      title: "Link to",
      to: [{ type: "page" }],
    }),
  ],
});

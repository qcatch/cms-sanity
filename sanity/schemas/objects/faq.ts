import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "faq",
  title: "FAQ",
  fields: [
    defineField({
      type: "string",
      name: "question",
      title: "Question",
    }),
    defineField({
      title: "Answer",
      name: "answer",
      type: "array",
      of: [{ type: "block" }], // rich text example
    }),
  ],
});

import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "homeHero",
  title: "Hero",
  fields: [
    defineField({
      name: "title",
      description: "Hero title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      description: "This hero image",
      title: "Hero",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      validation: (rule) => rule.max(2),
      name: "buttons",
      description: "Add buttons (max 2) to the hero",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "button",
        },
      ],
    }),
  ],
});

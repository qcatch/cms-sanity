import { defineArrayMember, defineField } from "sanity";
import { ImageIcon } from "@sanity/icons";

export default defineField({
  type: "object",
  name: "homeHero",
  title: "Home Hero",
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
      description: "Add buttons (max 2) to the home hero",
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

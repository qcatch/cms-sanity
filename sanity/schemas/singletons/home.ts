import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      type: "array",
      name: "body",
      title: "Content",
      description:
        "This is where you can write the page's content. Including custom blocks like timelines for more a more visual display of information.",
      of: [
        defineArrayMember({
          name: "home-hero",
          type: "homeHero",
        }),
        defineArrayMember({ name: "page-text-image", type: "textImage" }),
        defineArrayMember({ name: "page-card-block", type: "cardPriceBlock" }),
        defineArrayMember({ name: "page-rich-text", type: "richText" }),
      ],
      validation: (rule) => rule.min(1).required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Home",
        title,
      };
    },
  },
});

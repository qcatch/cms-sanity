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
      of: [defineArrayMember({ name: "home-hero", type: "homeHero" })],
      validation: (rule) => rule.min(1).required(),
    }),
  ],
});

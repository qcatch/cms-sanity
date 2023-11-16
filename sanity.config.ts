/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import button from "./sanity/schemas/objects/button";
import cardPrice from "./sanity/schemas/objects/cardPrice";
import cardPriceBlock from "./sanity/schemas/objects/cardPriceBlock";
import faq from "./sanity/schemas/objects/faq";
import faqBlock from "./sanity/schemas/objects/faqBlock";
import home from "./sanity/schemas/singletons/home";
import page from "./sanity/schemas/documents/page";
import settings from "./sanity/schemas/singletons/settings";
import textImage from "./sanity/schemas/objects/textImage";

import homeHero from "./sanity/schemas/objects/homeHero";
import { apiVersion, dataset, projectId } from "./sanity/lib/sanity.api";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singleton types
      home,
      settings,
      // Document types
      page,
      // Objects (used in documents)
      button,
      faq,
      faqBlock,
      textImage,
      cardPrice,
      cardPriceBlock,
      homeHero,
    ],
  },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

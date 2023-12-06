/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig, isDev } from "sanity";
import { deskTool } from "sanity/desk";
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
import { structure } from "@/sanity/plugins/structure";
import { presentationTool } from "@sanity/presentation";
import { debugSecrets } from "@sanity/preview-url-secret/sanity-plugin-debug-secrets";
import { locate } from "@/sanity/plugins/locate";
import { dataset, projectId } from "@/sanity/lib/api";
import richText from "@/sanity/schemas/objects/richText";
import { defaultDocumentNode } from "@/sanity/plugins/views";
import { media } from "sanity-plugin-media";
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
} from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { initialValueTemplates } from "@/sanity/plugins/initialValueTemplates";

const baseUrl = process.env.VERCEL_URL
  ? // Vercel auto-populates this environment variable
    `https://${process.env.VERCEL_URL}`
  : // Netlify auto-populates this environment variable
    process.env.URL || "";

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
      richText,
    ],
    templates: (prev) => initialValueTemplates(prev),
  },
  plugins: [
    deskTool({
      structure,
      defaultDocumentNode,
    }),
    presentationTool({
      locate,
      previewUrl: {
        origin: typeof location === "undefined" ? baseUrl : location.origin,
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    media(),
    // scheduledPublishing(),
    ...(isDev
      ? [
          dashboardTool({
            widgets: [
              projectInfoWidget(),
              projectUsersWidget(),
              netlifyWidget({
                title: "Deployment",
                sites: [
                  {
                    title: "Sanity Website",
                    apiId: process.env.SANITY_STUDIO_API_ID as string,
                    buildHookId: process.env
                      .SANITY_STUDIO_BUILD_HOOK_ID as string,
                    name: "catch-sanity",
                  },
                ],
              }),
            ],
          }),
          // Vision is a tool that lets you query your content with GROQ in the studio
          // https://www.sanity.io/docs/the-vision-plugin
          visionTool(),
          // Makes the url secrets visible in the Sanity Studio like any other documents defined in your schema
          debugSecrets(),
        ]
      : []),
  ],
});

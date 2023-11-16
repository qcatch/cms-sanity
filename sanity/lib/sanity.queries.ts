import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    title,
    body
  }
`;

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`;

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    title,
    "slug": slug.current,
  }
`;

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
  }
`;

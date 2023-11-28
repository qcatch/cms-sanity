import type { Image, PortableTextBlock } from "sanity";

export interface MenuItem {
  _type: string;
  slug?: string;
  title?: string;
}

export interface ShowcaseProject {
  _type: string;
  coverImage?: Image;
  overview?: PortableTextBlock[];
  slug?: string;
  tags?: string[];
  title?: string;
}

// Page payloads

export interface HomePagePayload {
  title?: string;
  body: any[];
}

export interface HomeHeroBlock {
  _key?: string;
  _type?: string;
  title: string;
  buttons: Button[];
  heroImage: Image;
}

export interface Button {
  _key: string;
  _type?: string;
  label?: string;
  link?: string;
}

export interface PagePayload {
  title?: string;
  slug?: string;
  body?: TextImageBlock[] | FaqBlock[] | CardPriceBlock[];
}

export interface TextImageBlock {
  _key?: string;
  _type?: string;
  image?: Image;
  content?: PortableTextBlock[];
}

export interface FaqBlock {
  _key?: string;
  _type?: string;
  title?: string;
  intro?: PortableTextBlock[];
  faqs?: FaqQuestion[];
}

export interface FaqQuestion {
  _key: string;
  _type?: string;
  question: string;
  answer: PortableTextBlock[];
}

export interface CardPriceBlock {
  _key?: string;
  _type?: string;
  title?: string;
  cards?: Card[];
}

export interface Card {
  title?: string;
  price?: number;
  options?: string[];
}

export interface ProjectPayload {
  client?: string;
  coverImage?: Image;
  description?: PortableTextBlock[];
  duration?: {
    start?: string;
    end?: string;
  };
  overview?: PortableTextBlock[];
  site?: string;
  slug: string;
  tags?: string[];
  title?: string;
}

export interface SettingsPayload {
  footer?: PortableTextBlock[];
  menuItems?: MenuItem[];
  ogImage?: Image;
}

import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Page from "@/components/documents/Page";
import PagePreview from "@/components/documents/PagePreview";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import { loadPage } from "@/sanity/loader/loadQuery";
import { Metadata, ResolvingMetadata } from "next";
import { metadata } from "@/app/layout";

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: page } = await loadPage(params.slug);

  return {
    title: `${page?.title}: ${metadata.title}`,
  };
}
type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return generateStaticSlugs("page");
}

export default async function PageSlugRoute({ params }: Props) {
  const initial = await loadPage(params.slug);

  if (draftMode().isEnabled) {
    return <PagePreview params={params} initial={initial} />;
  }

  if (!initial.data) {
    notFound();
  }

  return <Page data={initial.data} />;
}

import { AppRouteProps } from "@/models/app-route.model";
import { getPageBySlug, getPagesPaths } from "../../../sanity/lib/sanity.fetch";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { LiveQuery } from "next-sanity/preview/live-query";
import { pagesBySlugQuery } from "../../../sanity/lib/sanity.queries";
import Page from "@/components/documents/Page";
import PagePreview from "@/components/documents/PagePreview";
import { Suspense } from "react";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

export async function generateStaticParams() {
  const slugs = await getPagesPaths();
  return slugs.map((slug) => ({ slug }));
}

export default async function PageSlugRoute({ params }: AppRouteProps) {
  const data = await getPageBySlug(params.slug);
  if (!data && !draftMode().isEnabled) {
    notFound();
  }
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <LiveQuery
        enabled={draftMode().isEnabled}
        query={pagesBySlugQuery}
        params={params}
        initialData={data}
        as={PagePreview}
      >
        <Page data={data} />
      </LiveQuery>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

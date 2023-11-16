import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import { getHomePage } from "../../sanity/lib/sanity.fetch";
import { homePageQuery } from "../../sanity/lib/sanity.queries";
import HomePagePreview from "@/components/singletons/HomePagePreview";
import HomePage from "@/components/singletons/HomePage";
import { Suspense } from "react";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

export default async function IndexRoute() {
  const data = await getHomePage();

  if (!data && !draftMode().isEnabled) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage document yet!
      </div>
    );
  }

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <LiveQuery
        enabled={draftMode().isEnabled}
        query={homePageQuery}
        initialData={data}
        as={HomePagePreview}
      >
        <HomePage data={data} />
      </LiveQuery>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

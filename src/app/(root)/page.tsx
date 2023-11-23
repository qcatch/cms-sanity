import { draftMode } from "next/headers";
import HomePage from "@/components/singletons/HomePage";
import dynamic from "next/dynamic";
import Link from "next/link";
import { loadHomePage } from "@/sanity/loader/loadQuery";
import { studioUrl } from "@/sanity/lib/api";

const HomePagePreview = dynamic(
  () => import("@/components/singletons/HomePagePreview"),
);

export default async function IndexRoute() {
  const initial = await loadHomePage();

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />;
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{" "}
        <Link href={`${studioUrl}/desk/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    );
  }

  return <HomePage data={initial.data} />;
}

"use client";

import dynamic from "next/dynamic";
import { QueryResponseInitial } from "@sanity/react-loader/rsc";
import { HomePagePayload } from "@/models/sanity.model";
import { useQuery } from "@/sanity/loader/useQuery";
import { homePageQuery } from "@/sanity/lib/queries";

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const HomePage = dynamic(() => import("./HomePage"));

type Props = {
  initial: QueryResponseInitial<HomePagePayload | null>;
};

export default function HomePagePreview(props: Props) {
  const { initial } = props;
  const { data, encodeDataAttribute } = useQuery<HomePagePayload | null>(
    homePageQuery,
    {},
    { initial },
  );

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    );
  }

  return <HomePage data={data} encodeDataAttribute={encodeDataAttribute} />;
}

import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";

import FooterLayout from "./FooterLayout";
import FooterPreview from "./FooterPreview";
import { getSettings } from "../../../../sanity/lib/sanity.fetch";
import { settingsQuery } from "../../../../sanity/lib/sanity.queries";

export async function Footer() {
  const data = await getSettings();

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={settingsQuery}
      initialData={data}
      as={FooterPreview}
    >
      <FooterLayout data={data} />
    </LiveQuery>
  );
}

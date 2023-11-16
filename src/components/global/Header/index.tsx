import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import { getSettings } from "../../../../sanity/lib/sanity.fetch";
import { settingsQuery } from "../../../../sanity/lib/sanity.queries";
import HeaderLayout from "@/components/global/Header/HeaderLayout";
import HeaderPreview from "@/components/global/Header/HeaderPreview";

export async function Header() {
  const data = await getSettings();

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={settingsQuery}
      initialData={data}
      as={HeaderPreview}
    >
      <HeaderLayout data={data} />
    </LiveQuery>
  );
}

import { Viewport } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import LayoutProvider from "@/components/global/Layout/LayoutProvider";

const VisualEditing = dynamic(() => import("@/sanity/loader/VisualEditing"));

export const viewport: Viewport = {
  themeColor: "#000",
};

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutProvider>{children}</LayoutProvider>
      {draftMode().isEnabled && <VisualEditing />}
    </>
  );
}

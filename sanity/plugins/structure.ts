import { StructureBuilder, StructureResolver } from "sanity/desk";
import { CogIcon, FolderIcon, HomeIcon } from "@sanity/icons";

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      // Singleton, home page curation
      S.documentTypeListItem("home").title("Home").icon(HomeIcon),
      S.documentTypeListItem("page").title("Pages").icon(FolderIcon),
      S.divider(),
      S.documentTypeListItem("settings").title("Site config").icon(CogIcon),
    ]);

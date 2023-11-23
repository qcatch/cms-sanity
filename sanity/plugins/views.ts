import {DefaultDocumentNodeResolver, StructureBuilder, StructureContext} from "sanity/desk";
import {Iframe} from "sanity-plugin-iframe-pane";
import {SanityDocument} from "sanity";

/*
list of schema types supporting preview
*/
const previewSchemaTypes = ["home", "page"];

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S: StructureBuilder,
  { schemaType },
) => {
  const frontendUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_FRONTEND_URL || "";
  if (previewSchemaTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .title("Preview")
        .options({
          url: (doc: SanityDocument) =>
            resolveProductionUrl({ doc, context: S.context, frontendUrl }),
          defaultSize: "desktop",
          reload: {
            button: true,
          },
          attributes: {
            allow: "fullscreen",
            referrerPolicy: "strict-origin-when-cross-origin", // string, optional
            sandbox: "allow-same-origin", // string, optional
          },
        }),
    ]);
  }
};

/*
resolve production url
*/
export const resolveProductionUrl = async ({
  doc,
  context,
  frontendUrl,
}: {
  doc: SanityDocument;
  context: StructureContext;
  frontendUrl: string;
}) => {
  const { getClient } = context;

  if (!doc) {
    doc = context.document;
  }

  if (previewSchemaTypes.includes(doc._type)) {
    const client = await getClient({ apiVersion: "2022-05-04" });
    const slug = await client.fetch(`*[_id == $id][0].slug.current`, {
      id: doc._id,
    });

    // Build preview url
    const url = new URL(frontendUrl);

    // Switch for resolving doc type urls
    switch (doc._type) {
      case "home":
        url.pathname = `/`;
        break;
      case "page":
        url.pathname = `/${slug}/`;
        break;
      default:
        break;
    }

    // Add preview url params
    url.searchParams.set("preview", "true");

    return url.toString();
  }

  return "";
};

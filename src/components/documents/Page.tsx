import { PagePayload } from "@/models/sanity.model";
import PriceCardBlock from "@/components/PriceCardBlock";
import FAQBlock from "@/components/FAQBlock";
import { CustomPortableText } from "@/components/CustomPortableText";
import TextImage from "@/components/TextImage";

export interface PageProps {
  data: PagePayload | null;
}

export function Page({ data }: PageProps) {
  const { body, title } = data ?? {};

  if (body && !body.length) {
    return null;
  }

  return (
    <div className="container my-24 mx-auto md:px-6">
      {body?.map((item) => {
        switch (item._type) {
          case "page-card-block":
            // @ts-ignore
            return <PriceCardBlock key={item._key} {...item} />;
          case "page-faq-block":
            // @ts-ignore
            return <FAQBlock key={item._key} {...item} />;
          case "page-text-image":
            return <TextImage key={item._key} {...item} />;
          case "page-rich-text":
            return <CustomPortableText key={item._key} {...item} />;

          default:
            return null;
        }
      })}
    </div>
  );
}

export default Page;

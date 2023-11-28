import { HomePagePayload } from "@/models/sanity.model";
import HomeHero from "@/components/HomeHero";
import { EncodeDataAttributeCallback } from "@sanity/react-loader";
import PriceCardBlock from "@/components/PriceCardBlock";
import TextImage from "@/components/TextImage";
import { CustomPortableText } from "@/components/CustomPortableText";

export interface HomePageProps {
  data: HomePagePayload | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  const body = data?.body || [];

  if (!body.length) {
    return null;
  }

  return (
    <div className="space-y-20">
      {body.map((item) => {
        switch (item._type) {
          case "home-hero":
            // @ts-ignore
            return <HomeHero key={item._key} {...item} />;
          case "page-rich-text":
            console.log(item);
            return (
              <div className="container mx-auto bg-neutral-50 px-6 py-12 text-center md:px-12 lg:text-left my-10">
                <CustomPortableText key={item._key} value={item.content} />
              </div>
            );
          case "page-card-block":
            // @ts-ignore
            return (
              <div className="container mx-auto bg-neutral-50 px-6 py-12 text-center md:px-12 lg:text-left my-10">
                <PriceCardBlock key={item._key} {...item} />
              </div>
            );
          case "page-text-image":
            return (
              <div className="container mx-auto bg-neutral-50 px-6 py-12 text-center md:px-12 lg:text-left my-10">
                <TextImage key={item._key} {...item} />
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default HomePage;

import { HomePagePayload } from "@/models/sanity.model";
import HomeHero from "@/components/HomeHero";
import { EncodeDataAttributeCallback } from "@sanity/react-loader";

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
      {body.map((hero) => (
        <HomeHero
          key={hero._key}
          title={hero.title}
          buttons={hero.buttons}
          heroImage={hero.heroImage}
        />
      ))}
    </div>
  );
}

export default HomePage;

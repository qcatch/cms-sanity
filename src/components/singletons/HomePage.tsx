import { HomePagePayload } from "@/models/sanity.model";
import HomeHero from "@/components/HomeHero";
import { FC } from "react";

export interface HomePageProps {
  data: HomePagePayload | null;
}

const HomePage: FC<HomePageProps> = ({ data }) => {
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
};

export default HomePage;

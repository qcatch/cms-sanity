import React from "react";
import Link from "next/link";
import { HomeHeroBlock } from "@/models/sanity.model";
import { urlForImage } from "../../sanity/lib/sanity.image";

const HomeHero: React.FC<HomeHeroBlock> = ({ title, buttons, heroImage }) => {
  const imageUrl = heroImage && urlForImage(heroImage)?.fit("crop").url();

  return (
    <section className="mb-40">
      <div className="bg-neutral-50 px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              {title && (
                <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  {title}
                </h1>
              )}
              {buttons?.length &&
                buttons?.map((button, index) => {
                  return (
                    <Link
                      key={button._key}
                      href={button.link?._ref || "/"}
                      className="bg-blue-500 mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                      data-te-ripple-color="light"
                      role="button"
                    >
                      {button.label}
                    </Link>
                  );
                })}
            </div>
            <div className="mb-12 lg:mb-0">
              {imageUrl && (
                <img
                  src={imageUrl}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

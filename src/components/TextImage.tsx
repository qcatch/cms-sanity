import React, { FC, ReactNode } from "react";

interface TextImageProps {
  image: ReactNode;
  children: ReactNode;
}

const TextImage: FC<TextImageProps> = ({ image, children }) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex flex-wrap items-center">
        <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          {image}
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default TextImage;

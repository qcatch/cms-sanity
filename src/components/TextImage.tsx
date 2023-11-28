import React, { FC } from "react";
import ImageBox from "@/components/ImageBox";
import { Image } from "sanity";
import { CustomPortableText } from "@/components/CustomPortableText";

interface TextImageProps {
  image: Image;
  content: any;
}

const TextImage: FC<TextImageProps> = ({ image, content }) => {
  // console.log(content);
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="flex flex-wrap items-center">
        {image && (
          <div
            className="hidden relative overflow-hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12"
            style={{ width: "496px", height: "496px" }}
          >
            <ImageBox
              image={image}
              width={600}
              height={600}
            />
          </div>
        )}
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <CustomPortableText value={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImage;

import React from "react";
import ImageBox from "@/components/ImageBox";

export interface PriceCardProps {
  id: string;
  name: string;
  image: any;
  quote: string;
  job: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  name,
  image,
  quote,
  job,
  id,
}) => {
  return (
    <div className="overflow-hidden bg-white rounded-md shadow">
      <div className="px-8 py-12">
        <div className="relative w-24 h-24 mx-auto  overflow-hidden">
          {image && (
            <ImageBox
              image={image}
              alt={"Cover image"}
              size="10vw"
              width={600}
              height={600}
              classesWrapper={`relative object-cover w-24 h-24 mx-auto rounded-full`}
            />
          )}
          <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
            </svg>
          </div>
        </div>
        <blockquote className="mt-7">
          <p className="text-lg text-black">
            {quote ? <>&quot;{quote}&quot;</> : <>&nbsp;</>}
          </p>
        </blockquote>

        <p className="text-base font-semibold tex-tblack mt-9">{name}</p>
      </div>
    </div>
  );
};

export default PriceCard;

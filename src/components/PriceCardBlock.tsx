import React from "react";
import PriceCard, { PriceCardProps } from "@/components/PriceCard";

interface PriceCardBlockProps {
  title: string;
  cards: PriceCardProps[];
}

const PriceCardBlock: React.FC<PriceCardBlockProps> = ({ title, cards }) => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        {title && (
          <h2 className="mb-12 text-center text-3xl font-bold">{title}</h2>
        )}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
          {cards.map((item) => (
            <div className="mb-6 lg:mb-0" key={item._key}>
              <PriceCard
                title={item.title}
                options={item.options}
                price={item.price}
                term={item.term}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PriceCardBlock;

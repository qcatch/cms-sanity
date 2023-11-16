import React from "react";
import { FaqBlock } from "@/models/sanity.model";
import { PortableText } from "@portabletext/react";

const FAQBlock: React.FC<FaqBlock> = ({ title, faqs, intro }) => {
  return (
    <>
      <section className="mb-32">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="mb-6 md:mb-0">
            {title && <h2 className="mb-6 text-3xl font-bold">{title}</h2>}
            {intro && (
              <PortableText
                components={{
                  block: {
                    normal: ({ children }) => {
                      return (
                        <p className="text-neutral-500 dark:text-neutral-300">
                          {children}
                        </p>
                      );
                    },
                  },
                }}
                value={intro}
              />
            )}
          </div>
          {faqs && (
            <div className="mb-6 md:mb-0">
              {faqs?.map((item) => (
                <React.Fragment key={item._key}>
                  <p className="mb-4 font-bold">{item?.question}</p>

                  {intro && (
                    <PortableText
                      components={{
                        block: {
                          normal: ({ children }) => {
                            return (
                              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                                {children}
                              </p>
                            );
                          },
                        },
                      }}
                      value={item.answer!}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FAQBlock;

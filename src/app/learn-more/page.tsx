import TextImage from "@/components/TextImage";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <TextImage
            image={
              <img
                src="https://picsum.photos/600/900"
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            }
          >
            <h2 className="mb-4 text-2xl font-bold">
              Whats the secret of the great taste?
            </h2>
            <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                />
              </svg>
              Hot news
            </p>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor <a href={"#"}>sit amet consectetur</a>,
              adipisicing elit. Earum maxime voluptas ipsam aliquam itaque
              cupiditate provident architecto expedita harum culpa odit,
              inventore rem molestias laborum repudiandae corporis pariatur quo
              eius iste! Quaerat, assumenda voluptates! Molestias, recusandae?
              Maxime fuga omnis ducimus.
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              <em>Commodi ut nisi assumenda alias maxime</em> necessitatibus ad
              rem repellat explicabo, reiciendis illum suscipit iusto? Provident
              dignissimos similique, reiciendis inventore accusantium unde
              mollitia, deleniti quae atque error id perspiciatis illum.
              Laboriosam aperiam ab illo dignissimos obcaecati corporis
              similique a odio, <strong>optio iste quis placeat</strong> alias
              amet rerum sint quos dolor pariatur inventore possimus ad
              consequuntur fugiat perferendis consectetur laudantium.
            </p>
          </TextImage>
        </section>

        <section className="mb-32">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 text-3xl font-bold">
                Frequently asked questions
              </h2>

              <p className="text-neutral-500 dark:text-neutral-300">
                Didn't find your answer in the FAQ?
                <a
                  href="#!"
                  className="text-primary bg-blue-500 transition duration-300 hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Contact our sales team
                </a>
                .
              </p>
            </div>

            <div className="mb-6 md:mb-0">
              <p className="mb-4 font-bold">
                Anim pariatur cliche reprehenderit?
              </p>
              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem numquam dolore molestias aperiam culpa alias veritatis
                architecto eos, molestiae vitae ex eligendi libero eveniet
                dolorem, doloremque rem aliquid perferendis.
              </p>

              <p className="mb-4 font-bold">
                Non cupidatat skateboard dolor brunch?
              </p>
              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Distinctio corporis, iure facere ducimus quos consectetur ipsa
                ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed
                fugit iusto minus et suscipit? Minima sunt at nulla tenetur,
                numquam unde quod modi magnam ab deserunt ipsam sint aliquid
                dolores libero repellendus cupiditate mollitia quidem dolorem
                odit
              </p>

              <p className="mb-4 font-bold">
                Praesentium voluptatibus temporibus consequatur non aspernatur?
              </p>
              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                deserunt ipsam sint aliquid dolores libero repellendus
                cupiditate mollitia quidem dolorem.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="grow basis-[100%] items-center lg:!flex lg:basis-auto">
            <ul className="mr-auto flex flex-col lg:flex-row">
              <li className="mb-4 lg:mb-0 lg:pr-2">
                <Link
                  href={`/`}
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                >
                  Home
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2">
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href={`/features`}
                >
                  Features
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2">
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href={`/pricing`}
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2">
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href={`learn-more`}
                >
                  Learn more
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

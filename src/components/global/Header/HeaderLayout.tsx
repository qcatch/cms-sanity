import Link from "next/link";
import { MenuItem, SettingsPayload } from "@/models/sanity.model";
import { resolveHref } from "../../../../sanity/lib/sanity.links";

interface HeaderProps {
  data: SettingsPayload;
}

export default function HeaderLayout(props: HeaderProps) {
  const { data } = props;
  const menuItems = data?.menuItems || ([] as MenuItem[]);
  return (
    <header>
      <nav className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="grow basis-[100%] items-center lg:!flex lg:basis-auto">
            <ul className="mr-auto flex flex-col lg:flex-row">
              {menuItems &&
                menuItems.map((menuItem, key) => {
                  const href = resolveHref(menuItem?._type, menuItem?.slug);
                  if (!href) {
                    return null;
                  }
                  return (
                    <li className="mb-4 lg:mb-0 lg:pr-2" key={key}>
                      <Link
                        className={`block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90`}
                        href={href}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

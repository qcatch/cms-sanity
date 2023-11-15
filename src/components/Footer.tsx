import React from "react";

const LinkItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <a href={href} className="text-neutral-800 dark:text-neutral-200">
        {children}
      </a>
    </li>
  );
};

const Links = ({
  title,
  links,
}: {
  title: string;
  links: Array<{
    href: string;
    text: string;
  }>;
}) => {
  return (
    <div className="mb-6">
      <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
        {title}
      </h5>

      <ul className="mb-0 list-none">
        {links.map((link, index) => (
          <LinkItem href={link.href} key={index}>
            {link.text}
          </LinkItem>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const footerLinks = [
    {
      title: "Links",
      links: [
        { href: "#!", text: "Link 1" },
        { href: "#!", text: "Link 2" },
        { href: "#!", text: "Link 3" },
        { href: "#!", text: "Link 4" },
      ],
    },
    {
      title: "Links",
      links: [
        { href: "#!", text: "Link 1" },
        { href: "#!", text: "Link 2" },
        { href: "#!", text: "Link 3" },
        { href: "#!", text: "Link 4" },
      ],
    },
    {
      title: "Links",
      links: [
        { href: "#!", text: "Link 1" },
        { href: "#!", text: "Link 2" },
        { href: "#!", text: "Link 3" },
        { href: "#!", text: "Link 4" },
      ],
    },
    {
      title: "Links",
      links: [
        { href: "#!", text: "Link 1" },
        { href: "#!", text: "Link 2" },
        { href: "#!", text: "Link 3" },
        { href: "#!", text: "Link 4" },
      ],
    },
  ];

  return (
    <>
      <footer className="flex flex-col items-center bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
        <div className="container p-6">
          <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
            {footerLinks.map((footerLink, index) => (
              <Links
                title={footerLink.title}
                links={footerLink.links}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="w-full bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          © 2023 Copyright: Company.com
        </div>
      </footer>
    </>
  );
};

export default Footer;

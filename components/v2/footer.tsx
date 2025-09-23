import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Pin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/flipspaces/",
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/flipspaces",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      label: "Pinterest",
      href: "https://www.pinterest.com/flipspaces/",
      icon: <Pin className="h-5 w-5" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/flipspaces/",
      icon: <Linkedin className="h-5 w-5" />,
    },
  ];

  const rightSideLinkColumns = [
    {
      links: [
        { name: "Case Study", href: "/clientele/design-and-build" },
        { name: "Newsroom", href: "/news" },
        {
          name: "Turnkey Partner Program",
          href: "https://www.flipspaces.com/us/turnkey-partner-program",
        },
      ],
    },
    {
      links: [
        { name: "Careers", href: "https://www.flipspaces.com/careers" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    {
      links: [{ name: "OEM", href: "/offering/product-supply" }],
    },
  ];

  return (
    <footer className="bg-[#eeebe3] font-body">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-4 lg:col-span-5 flex flex-col">
            <Link href="/">
              <Image
                src="/FlipSpaces.png"
                alt="Flipspaces Logo"
                width={150}
                height={26}
                className=""
              />
            </Link>
            <p className="mt-8 text-sm text-gray-700">© 2023 Flipspaces</p>
            <div className="mt-6 flex space-x-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 transition-colors duration-300 hover:text-black"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              href="/blogs"
              className="mt-6 block text-sm text-gray-700 underline transition-colors duration-300 hover:text-black"
            >
              Read more
            </a>
          </div>

          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {rightSideLinkColumns.map((column, colIndex) => (
              <div key={colIndex}>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-700 transition-colors duration-300 hover:text-black"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

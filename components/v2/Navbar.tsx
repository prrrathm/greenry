"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Lightbulb,
  Package,
  Newspaper,
  Megaphone,
} from "lucide-react";

interface NavDropdownItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: NavDropdownItem[]; // optional dropdown items
}

const navItems: NavItem[] = [
  {
    name: "Our Offerings",
    href: "#",
    dropdown: [
      {
        label: "Design and Build",
        href: "/offerings/design-build",
        icon: Lightbulb,
      },
      {
        label: "Product Supply",
        href: "/offerings/product-supply",
        icon: Package,
      },
    ],
  },
  {
    name: "Clientele",
    href: "#",
    dropdown: [
      {
        label: "Design and Build",
        href: "/offerings/design-build",
        icon: Lightbulb,
      },
    ],
  },
  {
    name: "Media & Accolades",
    href: "#",
    dropdown: [
      {
        label: "Blogs",
        href: "#",
        icon: Newspaper,
      },
      {
        label: "Newsroom",
        href: "#",
        icon: Megaphone,
      },
      {
        label: "Newsletters",
        href: "#",
        icon: Newspaper,
      },
    ],
  }, // add items later
  { name: "About Us", href: "/about-us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileIndex(null);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between h-[88px]">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/FlipSpaces.png"
              alt="Flipspaces Logo"
              width={160}
              height={30}
              priority
            />
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex flex-1 items-center justify-center">
          <ul className="flex items-center space-x-10">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={
                    "flex items-center gap-1 text-[15px] font-medium transition-colors duration-300 text-black hover:text-amber-400"
                  }
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown size={16} className="opacity-70 ml-1" />
                  )}
                </a>

                {/* Desktop Dropdown */}
                {item.dropdown && item.dropdown.length > 0 && (
                  <div className="absolute left-0 mt-3 hidden group-hover:block">
                    {/* Arrow */}
                    <div className="ml-6 h-3 w-3 rotate-45 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]" />
                    <div className="mt-2 w-64 rounded-xl bg-white p-3 text-gray-800 shadow-xl ring-1 ring-black/5">
                      <ul className="space-y-1">
                        {item.dropdown.map((dd) => {
                          const Icon = dd.icon;
                          return (
                            <li key={dd.label}>
                              <a
                                href={dd.href}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50"
                              >
                                {Icon ? (
                                  <Icon
                                    size={18}
                                    className="text-[var(--color-primary-teal)]"
                                  />
                                ) : null}
                                <span className="font-medium text-[15px] text-gray-900">
                                  {dd.label}
                                </span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CONTACT BUTTON & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <a
            href="/contact-us"
            className="hidden sm:block bg-amber-400 text-primary font-medium py-2.5 px-6 rounded-md hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            <span>Contact Us</span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-black"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-amber-400 shadow-xl">
          <div className="px-6 py-4">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const hasDropdown = !!(
                  item.dropdown && item.dropdown.length > 0
                );
                return (
                  <li key={item.name} className="">
                    <div className="flex items-center justify-between">
                      <a
                        href={hasDropdown ? "#" : item.href}
                        onClick={(e) => {
                          if (hasDropdown) {
                            e.preventDefault();
                            setOpenMobileIndex(
                              openMobileIndex === index ? null : index
                            );
                          } else {
                            handleMobileLinkClick();
                          }
                        }}
                        className="py-3 text-black text-base font-medium hover:text-accent-yellow transition-colors duration-300 flex-1"
                        aria-expanded={openMobileIndex === index}
                      >
                        {item.name}
                      </a>
                      {hasDropdown && (
                        <button
                          aria-label="Toggle submenu"
                          onClick={() =>
                            setOpenMobileIndex(
                              openMobileIndex === index ? null : index
                            )
                          }
                          className="text-black p-2"
                        >
                          <ChevronDown
                            size={18}
                            className={`${
                              openMobileIndex === index
                                ? "rotate-180"
                                : "rotate-0"
                            } transition-transform`}
                          />
                        </button>
                      )}
                    </div>

                    {hasDropdown && openMobileIndex === index && (
                      <ul className="mb-2 ml-3 space-y-1 overflow-hidden rounded-md bg-[#2a2a2a] p-2">
                        {item.dropdown!.map((dd) => {
                          const Icon = dd.icon;
                          return (
                            <li key={dd.label}>
                              <a
                                href={dd.href}
                                onClick={handleMobileLinkClick}
                                className="flex items-center gap-3 rounded px-2 py-2 text-sm text-white/90 hover:text-accent-yellow"
                              >
                                {Icon ? (
                                  <Icon size={16} className="opacity-90" />
                                ) : null}
                                <span>{dd.label}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 border-t border-gray-700 pt-4">
              <a
                href="/contact-us"
                onClick={handleMobileLinkClick}
                className="block w-full text-center bg-white text-primary font-medium py-3 rounded-md hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  mobile?: boolean;
  onClick?: () => void;
}

const Nav = ({ mobile, onClick }: NavProps) => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    // { href: "/test", label: "Test" },
  ];

  return (
    <nav className={mobile ? "w-full" : ""}>
      <ul
        className={
          mobile
            ? "flex flex-col gap-2 w-full"
            : "flex gap-1 sm:gap-4 items-center"
        }
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href} className={mobile ? "w-full" : ""}>
              <Link
                href={link.href}
                onClick={onClick}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all block ${
                  mobile ? "w-full text-center text-base" : ""
                } ${
                  isActive
                    ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

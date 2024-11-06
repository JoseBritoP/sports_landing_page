"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "News",
    href: "#",
  },
  {
    label: "Post",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

export function NavCN() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="uppercase transition-colors duration-200 ease-in hover:text-red-600 p-4 font-bold text-xl"
          >
            {item.label}
          </Link>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

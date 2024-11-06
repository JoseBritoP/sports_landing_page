import Image from "next/image";
import React from "react";

const footerItems = [
  {
    title: "About Club",
    items: [
      {
        label:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus",
      },
    ],
    social: [
      {
        Icon: (
          <Image alt="Facebook" className="rounded-full" src="/images/logo.png" height={30} width={30} />
        ),
      },
      {
        Icon: (
          <Image alt="Facebook" className="rounded-full" src="/images/logo.png" height={30} width={30} />
        ),
      },
      {
        Icon: (
          <Image alt="Facebook" className="rounded-full" src="/images/logo.png" height={30} width={30} />
        ),
      },
      {
        Icon: (
          <Image alt="Facebook" className="rounded-full" src="/images/logo.png" height={30} width={30} />
        ),
      },
    ],
  },
  {
    title: "About Us",
    items: [
      {
        label: "About Club",
      },
      {
        label: "Contacts",
      },
      {
        label: "Price Table",
      },
      {
        label: "Shop",
      },
      {
        label: "Our Players",
      },
    ],
  },
  {
    title: "Quick Link",
    items: [
      {
        label: "About Club",
      },
      {
        label: "Contacts",
      },
      {
        label: "Price Table",
      },
      {
        label: "Shop",
      },
      {
        label: "Our Players",
      },
    ],
  },
  {
    title: "Get in Touch",
    items: [
      {
        label: "+012 345 67890",
      },
      {
        label: "example@gmail.com",
      },
      {
        label: "Dhanka Tangail, Bangladesh",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-gray-950 w-full px-20 py-5 gap-4">
      {footerItems.map((item, i) => (
        <section
          key={i}
          className="flex flex-col items-start justify-start w-1/3 h-26"
        >
          <h2 className="uppercase text-xl font-semibold text-gray-200">
            {item.title}
          </h2>
          {item.items.map((subI, i) => (
            <p
              key={i}
              className="font-semibold uppercase text-gray-600 text-sm"
            >
              {subI.label}
            </p>
          ))}
          {item.social && (
            <div className="flex w-full justify-start gap-x-5 items-center pt-2">
              {item.social?.map((soc, i) => (
                <>{React.cloneElement(soc.Icon, { key: i })}</>
              ))}
            </div>
          )}
        </section>
      ))}
    </footer>
  );
}

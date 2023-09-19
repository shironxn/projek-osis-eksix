"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const navbarList = [
  {
    id: 1,
    title: "HOME",
    url: "/",
  },
  {
    id: 2,
    title: "TPAS",
    url: "/tpas",
  },
];

function Navbar() {
  const [isNavbarBlurred, setIsNavbarBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;

      if (scrollY > scrollThreshold) {
        setIsNavbarBlurred(true);
      } else {
        setIsNavbarBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = isNavbarBlurred
    ? "navbar fixed bg-main text-dark shadow-xl z-50"
    : "navbar fixed bg-transparant text-light";

  return (
    <div className={navbarClasses}>
      <div className="flex-1">
        <Link
          href={"/"}
          className="btn btn-ghost hover:scale-110 hover:bg-light/30 normal-case text-xl"
        >
          EKSIX
        </Link>
      </div>
      <div className="flex-none">
        {navbarList.map((item) => (
          <ul className="menu menu-horizontal px-1" key={item.id}>
            <Link
              href={item.url}
              className="btn btn-ghost normal-case text-lg hover:scale-110 hover:bg-light/30"
            >
              {item.title}
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import Link from "next/link";
import Image from "next/image";

const logoList = [
  {
    id: 1,
    title: "48",
    img: "/logo/48.png",
    url: "https://www.instagram.com/official.sman48jakarta/",
  },
  {
    id: 2,
    title: "EKSIX",
    img: "/logo/eksix.jpg",
    url: "https://www.instagram.com/xsixs.jpg/",
  },
  {
    id: 3,
    title: "ITC",
    img: "/logo/itc.png",
    url: "https://www.instagram.com/itclub48/",
  },
];

function Footer() {
  return (
    <div>
      <footer className="footer footer-center items-center p-5 bg-base-100 text-paragraph-100 first-letter">
        <aside className="items-center grid-flow-row">
          <p className="mb-5">Copyright © 2023 - shironxn</p>
          <h1 className="text-lg font-bold">Social Media</h1>
          <div className="flex flex-row gap-5">
            {logoList.map((item) => (
              <div className="avatar" key={item.id}>
                <div className="btn btn-circle h-12 w-12 md:h-24 md:w-24 rounded-full hover:scale-110">
                  <Link href={item.url}>
                    <Image
                      src={item.img}
                      width={500}
                      height={500}
                      alt={item.title}
                      key={item.id}
                    ></Image>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;

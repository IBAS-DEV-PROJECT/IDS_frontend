"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-green-500 p-4 text-white">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="https://www.inhabas.com" className="text-lg font-bold">
            IBAS DEV 소개
          </Link>
        </li>
        <li>
          <Link href="/inquiry" className="text-lg font-bold">
            문의하기
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

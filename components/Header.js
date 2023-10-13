"use client";
import Image from "next/image";
import React from "react";

import logoBlack from "@/public/logo-black.svg";
import logoWhite from "@/public/logo-white.svg";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="w-full h-[80px] py-[5px] fixed top-0 left-0 bg-[#fdfdfd] px-2">
        <div className="h-full max-w-[1300px] mx-auto flex flex-row justify-between items-center content-center">
          <div className="w-1/5 h-full">
            <Image src={logoBlack} className="h-full w-auto" />
          </div>
          <div className="w-3/5 flex flex-row justify-center">
            Content Content Content COntent
          </div>
          <div className="w-1/5 flex flex-row justify-end">
            <Link href="#">Get a quote</Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

import Image from "next/image";

import logoWhite from "@/public/logo-white.svg";
import Link from "next/link";

import { FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[url('/images/tmp-bg.png')] bg-center">
      <div>
        <Image src={logoWhite} className="max-w-[400px] w-full mx-auto" />
        <br />
        <br />
        <h2 className="text-center text-2xl">At this moment</h2>
        <h1 className="text-center text-3xl uppercase">
          our website is under construction
        </h1>
        <br />
        <Link
          href={"tel: +40774689080"}
          className="flex flex-row items-center content-center gap-4 justify-center text-xl mb-2"
        >
          <FaPhone />
          <span>+40 774 68 90 80</span>
        </Link>
        <Link
          href={"mailto: contact@seqbyte.com"}
          className="flex flex-row items-center content-center gap-4 justify-center text-xl"
        >
          <FaEnvelope />
          <span>contact@seqbyte.com</span>
        </Link>
      </div>
    </main>
  );
}

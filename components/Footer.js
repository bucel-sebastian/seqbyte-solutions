import React from "react";
import FooterContactForm from "./FooterContactForm";

function Footer() {
  return (
    <>
      <footer className="w-full relative bg-[#fafafa] mt-[200px] pt-[100px] block bg-cover bg-center bg-[url('/images/night-view-victoria-harbor-hong-kong.jpg')]">
        <div className="relative block max-w-[1300px] mx-auto -top-[200px]">
          <div className="text-center">
            <h3>Contact us</h3>
            <h2>We arr always here to help you</h2>
          </div>
          <div className="rounded-xl w-full flex flex-row bg-[#fafafa] h-[300px] overflow-hidden ">
            <div className="w-1/3"></div>
            <div className="w-2/3">
              <FooterContactForm />
            </div>
          </div>
          <div></div>
          <div>
            <div>Copyright © 2023 Seqbyte Solutions. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

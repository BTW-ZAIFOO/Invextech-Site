import React from "react";
import FooterLogo from "./FooterLogo";
import FooterContactInfo from "./FooterContactInfo";
import FooterSitemap from "./FooterSitemap";
import FooterBottom from "./FooterBottom";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white sm:text-center">
      <div className="max-w-[1120px] mx-auto w-full mt-16 px-8">
        <div className="mx-auto grid w-full gap-9 py-12 sm:grid-cols-1 lg:grid-cols-4 text-center">
          <FooterLogo />
          <FooterContactInfo />
          <FooterSitemap />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
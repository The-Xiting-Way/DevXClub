import React from "react";
import ContactUs from "../components/ContactUs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact-Us / DevXClub",
  description: "Contact-Us page",
};

const ContactPage = () => {
  return (
    <>
      <div className="p-[2rem] absolute z-10">
        <Link href={"/"} className="font-bold text-[1.2rem] bg-gradient-to-r from-purple-400 to-emerald-300 bg-clip-text text-transparent">
          DevXClub

        </Link>

      </div>
      <ContactUs />;
    </>
  )
};

export default ContactPage;

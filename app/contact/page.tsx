import React from "react";
import ContactUs from "../components/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact-Us / DevXClub",
  description: "Contact-Us page",
};

const ContactPage = () => {
  return <ContactUs />;
};

export default ContactPage;

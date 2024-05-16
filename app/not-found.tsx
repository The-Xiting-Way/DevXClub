import { Metadata } from "next";
import React from "react";
import NotFoundComponent from "./components/NotFound";

export const metadata: Metadata = {
  title: "Not Found / DevXClub",
  description: "Not found page",
};

const NotFoundPage = () => {
  return <NotFoundComponent />;
};

export default NotFoundPage;

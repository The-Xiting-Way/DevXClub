"use client";
import React from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const handelContactUs = () => {
    // Coming soon
  };
  return (
    <>
      <main className="flex-1 py-8">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact Us</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Get in touch with us
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="Enter your email" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;

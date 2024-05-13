"use client";
import backImg from "../../public/assets/backImgg.png";
import { IoIosArrowForward } from "react-icons/io";
import { WavyBackground } from "../components/ui/wavy-background";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email!" }),
});
const SignIn = () => {
  const [showSend, setShowSend] = React.useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(data.email);
    signIn("email", {
      email: data.email,
      redirect: false,
      callbackUrl: "/dashboard",
    });

    setShowSend(false);
  }
  return (
    <>
      <div className="relative">
        <Image
          src={backImg}
          alt="backImg"
          className="w-full h-screen bg-contain"
        />

        <div className="z-50 bg-[#020617] rounded-2xl border-[#151823] border-solid border-[2px] shadow-2xl absolute top-[8%] left-28 w-[39%] h-[85%]">
          <div>
            <div className=" flex m-auto items-center justify-center mt-[67px]">
              <h1
                className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-r from-[#8c6ac2] to-green-300 bg-clip-text text-transparent  sm:text-5xl"
                data-aos="fade-in"
              >
                DevXClub
              </h1>
            </div>

            <p className="font-semibold text-[18px] text-white text-center mt-10">
              Log in or Sign up
            </p>

            <div className="w-[80%] mt-4 flex items-center justify-center m-auto text-center">
              <Button
                className="flex p-3 text-white rounded-full w-full bg-[#2563EB] items-center justify-center gap-3 text-center"
                onClick={async () => {
                  await signIn("google", { callbackUrl: "/" });
                }}
              >
                <Image
                  width={"1000"}
                  height={"1000"}
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  className="h-6 w-6"
                />
                <span className="flex items-center justify-center">
                  Continue with Google
                </span>
              </Button>
            </div>
            <div className="w-[80%] mt-4 flex items-center justify-center m-auto text-center">
              <Button
                className="flex p-3 text-white rounded-full w-full bg-[#2563EB] items-center justify-center gap-3 text-center"
                onClick={async () => {
                  await signIn("github", { callbackUrl: "/" });
                }}
              >
                <FaGithub className="h-7 w-7" />
                <span className="flex items-center justify-center">
                  Continue with Github
                </span>
              </Button>
            </div>
            <div className="flex mb-9 mt-5 gap-4 items-center justify-center w-full">
              <button className="flex items-center justify-center rounded-3xl bg-white hover:bg-transparent hover:border-white w-16 hover:transition-all hover:ease-in   border shadow-md">
                <Image
                  width={"100"}
                  height={"100"}
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
                  alt="metamask"
                  className="h-8 w-auto"
                />
              </button>
              <button className="flex items-center justify-center rounded-3xl bg-white hover:bg-transparent hover:border-white w-16 hover:transition-all hover:ease-in   border shadow-md">
                <Image
                  width={"100"}
                  height={"100"}
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="metamask"
                  className="h-8 w-auto"
                />
              </button>
              <button className="flex items-center justify-center rounded-3xl bg-white hover:bg-transparent hover:border-white w-16 hover:transition-all hover:ease-in   border shadow-md">
                <Image
                  width={"100"}
                  height={"100"}
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="metamask"
                  className="h-8 w-auto"
                />
              </button>
              <button className="flex items-center justify-center rounded-3xl bg-white hover:bg-transparent hover:border-white w-16 hover:transition-all hover:ease-in   border shadow-md">
                <Image
                  width={"100"}
                  height={"100"}
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="metamask"
                  className="h-8 w-auto"
                />
              </button>
            </div>
            <div className="grid  m-auto mt-3 items-center justify-center">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-2"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email@domain.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          We will send you a login link.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {!showSend ? (
                    <Button disabled={showSend} type="submit">
                      Send login link
                    </Button>
                  ) : (
                    <Turnstile
                      siteKey={
                        process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY ||
                        ""
                      }
                      onError={() => {
                        setShowSend(true);
                      }}
                    />
                  )}
                </form>
              </Form>
            </div>

            <div className="flex m-auto items-center justify-center text-xs text-center mt-[86px]">
              <p className="text-[#64748B]">
                By logging in or signing up using the options above, you agree
                to <br />
                DevXClub Terms & Conditions and Privacy Policy
              </p>
            </div>
          </div>
        </div>

        {/* Second Div */}
        <div className="absolute top-0 right-0 bg-transparent h-auto w-auto overflow-hidden">
          <WavyBackground className="max-w-4xl bg-transparent mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              Hardik Swaagat hai
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              Leverage the power of Community of coders who programs reality
            </p>
          </WavyBackground>
        </div>
      </div>
    </>
  );
};

export default SignIn;

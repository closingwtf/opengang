"use client";
import { BlurImage } from "@/components/ui/blur-image";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const SkeletonOne = () => {
  return (
    <div className="relative flex p-8 gap-10 h-full">
      <div className=" w-full md:w-[90%] p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 opacity-20 dark:opacity-60 ">
          <UserMessage>
            I want to generate an image of two people, fighting outside a bar.
            They fight to the core. Once they&apos;re done, they sit down and
            drink beer.
          </UserMessage>
          <AIMessage>
            Certainly, I&apos;m generating this picture for you in a while. BTW
            are you talking about THAT movie?
          </AIMessage>
          <UserMessage>
            I don&apos;t know what you&apos;re talking about.
          </UserMessage>
          <AIMessage>Are you sure?</AIMessage>
          <UserMessage>
            Yes, I&apos;m sure. But if you&apos;re generating that scene, make
            sure the fighters have clown shoes and rubber chickens instead of
            fists!
          </UserMessage>
          <AIMessage>Affirmative, here&apos;s your image.</AIMessage>
        </div>
      </div>
      <div className="flex flex-col gap-4 absolute inset-0">
        <div className="p-2 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px]  r h-[250px] w-[250px] md:h-[300px] md:w-[300px] mx-auto  flex-shrink-0  z-20 group-hover:scale-[1.02] transition duration-200">
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] flex-shrink-0">
            <BlurImage
              src="/skeleton-one.png"
              alt="header"
              width={800}
              height={800}
              className="rounded-[20px] w-full h-full object-cover object-bottom aspect-square flex-shrink-0 grayscale"
            />
          </div>
        </div>
        <div className="p-2 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px]  r h-[250px] w-[250px] md:h-[300px] md:w-[300px] mx-auto  flex-shrink-0  z-20 group-hover:scale-[1.02] transition duration-200">
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] flex-shrink-0">
            <BlurImage
              src="/tyler.jpeg"
              alt="header"
              width={800}
              height={800}
              className="rounded-[20px] w-full h-full object-cover object-bottom aspect-square flex-shrink-0 grayscale"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

const UserMessage = ({ children }: { children: React.ReactNode }) => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      className="flex flex-row rounded-2xl  p-2  items-start space-x-2 bg-white dark:bg-neutral-900"
    >
      <Image
        src="/avatar.jpeg"
        alt="avatar"
        height="100"
        width="100"
        className="rounded-full h-4 w-4 md:h-10 md:w-10"
      />
      <p className="text-[10px] sm:text-sm text-neutral-500">{children}</p>
    </motion.div>
  );
};

const AIMessage = ({ children }: { children: React.ReactNode }) => {
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={variantsSecond}
      className="flex flex-row rounded-2xl   p-2 items-center justify-start space-x-2  bg-white dark:bg-neutral-900 "
    >
      <div className="h-4 w-4 md:h-10 md:w-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      <p className="text-[10px] sm:text-sm text-neutral-500">{children}</p>
    </motion.div>
  );
};

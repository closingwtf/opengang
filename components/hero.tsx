"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { ContributeAnonymouslyForm } from "./contribute-anonymously-form";
import { Badge } from "./ui/badge";

export const Hero = () => {
  return (
    <div className="flex flex-col pt-20 md:pt-40 relative overflow-hidden">
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex justify-center"
      >
        <Link href="https://github.com/closingwtf/stats">
          <Badge className="flex flex-row gap-2 justify-centeritems-center text-md">
            <IconBrandGithub className="w-4 h-4" /> <div>100% Open Source</div>
          </Badge>
        </Link>
      </motion.div>
      <motion.h1
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10"
      >
        <Balancer>Crowdsourced Anonymized Mortgage Data</Balancer>
      </motion.h1>
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-foregournd text-center mt-6 text-base md:text-xl max-w-3xl mx-auto relative z-10"
      >
        <Balancer>
          Explore and share anonymized financial insights from everyday
          documents.
        </Balancer>

        {/* <Balancer>
          Note: This is an open source project affiliated with closing.wtf which
          helps you manage your mortgage.
        </Balancer> */}
      </motion.p>
      <ContributeAnonymouslyForm />
      {/* <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="flex items-center gap-4 justify-center mt-6 relative z-10"
      >
        <Button variant={"outline"}>View Mortgage Data</Button>
      </motion.div> */}
    </div>
  );
};

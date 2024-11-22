import Link from "next/link";
import { Logo } from "./ui/Logo";

export const Footer = () => {
  return (
    <div className="relative">
      <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
          <div>
            <div className="mr-4  md:flex mb-4">
              <Logo />
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Copyright © {new Date().getFullYear()}{" "}
                <Link href="/" className="cursor-pointer">
                  ClosingWTF INC
                </Link>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

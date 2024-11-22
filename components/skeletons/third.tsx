"use client";
import { Switch } from "@/components/ui/switch";
import { IconDots, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export const SkeletonThree = () => {
  return (
    <div className="h-full w-full sm:w-[80%] mx-auto bg-white dark:bg-neutral-800  shadow-2xl dark:shadow-white/40 mt-10 group rounded-md">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none z-[11]" />

      <div className="flex flex-1 w-full h-full flex-col space-y-2 ">
        <div className="flex justify-between border-b dark:border-neutral-700 pb-2 p-4">
          <p className="text-muted text-sm font-bold dark:text-muted-dark">
            Add LLM
          </p>
          <p className="shadow-derek text-muted dark:text-muted-dark text-sm px-2 py-1 rounded-md flex-shrink-0 flex space-x-1 items-center dark:bg-neutral-700">
            <IconPlus className="h-4 w-4 text-muted dark:text-muted-dark" />{" "}
            <span>Add</span>
          </p>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <Row title="Groq LLM" updatedAt="23rd March" />
          <Row title="OpenAI GPT0" updatedAt="21st March" active />
          <Row title="Stable DIffusion" updatedAt="3rd May" />
          <Row title="Llama 2" updatedAt="1st April" active />
          <Row title="Claude 200k" updatedAt="2nd June" active />
        </div>
      </div>
    </div>
  );
};

export const Row = ({
  title,
  updatedAt,
  active = false,
}: {
  title: string;
  updatedAt: string;
  active?: boolean;
}) => {
  const [checked, setChecked] = useState(active);
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <p className="text-muted dark:text-muted-dark text-xs shadow-aceternity dark:bg-neutral-700 px-1 py-0.5 rounded-md">
          {title}
        </p>
        <p className="text-muted dark:text-muted-dark text-xs">{updatedAt}</p>
      </div>
      <div className="flex items-center space-x-1">
        <Switch checked={checked} onCheckedChange={setChecked} />
        <IconDots className="h-4 w-4 text-muted dark:text-muted-dark" />
      </div>
    </div>
  );
};

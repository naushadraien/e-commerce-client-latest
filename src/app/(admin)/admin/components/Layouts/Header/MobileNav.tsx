"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Message from "./Message";
import Notification from "./Notification";
import { Profile } from "./Profile";
import SearchInput from "./Search";
import { ModeToggle } from "./ThemeToggle";

const MobileNav = () => {
  const [click, setClick] = useState(false);
  console.log(click);

  return (
    <div className="sm:block md:hidden cursor-pointer">
      <div
        className={`flex justify-between ${click ? "flex-col" : "flex-row"} ${
          !click && "items-center"
        } w-full ${
          click ? "min-h-40" : "h-20"
        } px-10 border-b-[1px] border-b-gray-400`}
      >
        <div
          className={`flex w-full justify-between ${click ? "pt-8" : "pt-0"}`}
        >
          <div className="font-bold text-xl">Logo</div>
          <Button variant="link" onClick={() => setClick(!click)}>
            {click ? <X /> : <Menu />}
          </Button>
        </div>
        {click && (
          <div className="flex  flex-col gap-5 mt-5">
            <div className="relative">
              <SearchInput />
            </div>
            <div className="flex flex-col gap-5 items-center">
              <div className="flex gap-5">
                <ModeToggle />
                <Notification />
                <Message />
              </div>
              <div className="mb-5">
                <Profile />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;

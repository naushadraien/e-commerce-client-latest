import { Menu, Minus, Settings } from "lucide-react";
import Message from "./Message";
import Notification from "./Notification";
import { Profile } from "./Profile";
import SearchInput from "./Search";
import { ModeToggle } from "./ThemeToggle";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <nav className="max-md:hidden md:flex justify-between items-center w-full h-20 px-10 border-b-[1px] border-b-gray-400">
        <div className="flex gap-10">
          <div className="font-bold text-xl">Logo</div>
          <div className="w-96 relative  md:flex justify-center items-center">
            <SearchInput />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <ModeToggle />
          <Notification />
          <Message />
          <Profile />
        </div>
      </nav>
      <MobileNav />
    </>
  );
};

export default Header;

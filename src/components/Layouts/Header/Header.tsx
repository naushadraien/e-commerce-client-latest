import Message from "./Message";
import Notification from "./Notification";
import SearchInput from "./Search";
import { ModeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-10 border-b-[1px] border-b-gray-400">
      <div className="flex gap-10">
        <div className="font-bold text-xl">Logo</div>
        <div className="w-96 relative flex justify-center items-center">
          <SearchInput />
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <ModeToggle />
        <Notification />
        <Message />
      </div>
    </div>
  );
};

export default Header;

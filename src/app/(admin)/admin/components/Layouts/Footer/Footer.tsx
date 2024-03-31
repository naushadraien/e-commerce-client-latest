import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-[1px] border-t-gray-400 text-center h-10">
      <div>
        Copyright © 2024 Rehan. Design with 💘 by{" "}
        <Link
          href="https://naushadraien.com.np"
          target="_blank"
          className="text-purple-500 hover:text-purple-700 font-semibold"
        >
          Naushad
        </Link>{" "}
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

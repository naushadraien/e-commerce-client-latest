"use client";
import Link from "next/link";
import { useRoutes } from "./hooks/useRoutes";
import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const SideBar = () => {
  const { routes, mainRoutes, pathname, supportRoutes, couponsRoutes } =
    useRoutes();
  const [click, setClick] = useState(true);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth > 770) {
        setClick(false);
      } else {
        setClick(true);
      }
    };

    // Call checkSize on mount
    checkSize();

    // Set up event listener for resize events
    window.addEventListener("resize", checkSize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  return (
    <div className={`${click ? "w-0 -ml-4" : "w-72 "}`}>
      <div
        className="left-40 top-6 absolute md:hidden sm:block cursor-pointer"
        onClick={() => {
          if (window.innerWidth <= 770) {
            setClick(!click);
          }
        }}
      >
        {click ? <ArrowBigRight /> : <ArrowBigLeft />}
      </div>
      <aside
        className={`h-screen  items-center gap-6 flex-col ${
          click ? "hidden" : "flex"
        }`}
      >
        <div className="flex items-start flex-col gap-5">
          <div className="flex flex-col justify-center mt-2">
            <p className="font-bold text-gray-400 uppercase">
              {mainRoutes.label}
            </p>
            <Link
              href={mainRoutes.href}
              className={`flex justify-center items-center gap-2 py-3 px-5  ${
                pathname === mainRoutes.href
                  ? "text-blue-500 bg-blue-200 rounded-md"
                  : ""
              }`}
            >
              {mainRoutes.icon}
              <p className="font-semibold">{mainRoutes.title}</p>
            </Link>
          </div>
          <div className="flex flex-col ">
            <p className="font-bold text-gray-400 uppercase">{routes.label}</p>
            {routes.value.map((item) => (
              <Link
                href={item.href}
                className={`flex gap-2 py-3 px-5  ${
                  pathname === item.href
                    ? "text-blue-500 bg-blue-200 rounded-md"
                    : ""
                }`}
                key={item.title}
              >
                {item.icon}
                <p className="font-semibold">{item.title}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col ">
            <p className="font-bold text-gray-400 uppercase">
              {couponsRoutes.label}
            </p>
            <Link
              href={couponsRoutes.href}
              className={`flex gap-2 py-3 px-5  ${
                pathname === couponsRoutes.href
                  ? "text-blue-500 bg-blue-200 rounded-md"
                  : ""
              }`}
            >
              {couponsRoutes.icon}
              <p className="font-semibold">{couponsRoutes.title}</p>
            </Link>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-400 uppercase">
              {supportRoutes.label}
            </p>
            {supportRoutes.value.map((item) => (
              <Link
                href={item.href}
                className={`flex gap-2 py-3 px-5  ${
                  pathname === item.href
                    ? "text-blue-500 bg-blue-200 rounded-md"
                    : ""
                }`}
                key={item.title}
              >
                {item.icon}
                <p className="font-semibold">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;

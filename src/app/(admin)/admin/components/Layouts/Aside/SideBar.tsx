"use client";
import Link from "next/link";
import { useRoutes } from "./hooks/useRoutes";

const SideBar = () => {
  const { routes, mainRoutes, pathname, supportRoutes, couponsRoutes } =
    useRoutes();

  return (
    <aside className="h-screen flex items-center gap-6 flex-col">
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
  );
};

export default SideBar;

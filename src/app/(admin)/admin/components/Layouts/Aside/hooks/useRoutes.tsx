import {
  CircleHelp,
  FilePlus,
  FileText,
  Headset,
  LayoutGrid,
  ShoppingBag,
  TicketPercent,
  UserRound,
} from "lucide-react";
import { usePathname } from "next/navigation";
export const useRoutes = () => {
  const pathname = usePathname();
  const routes = {
    label: "All Page",
    value: [
      {
        title: "Orders",
        href: "/admin/orders",
        icon: <FilePlus />,
      },
      {
        title: "Users",
        href: "/admin/users",
        icon: <UserRound />,
      },
      {
        title: "Products",
        href: "/admin/products",
        icon: <ShoppingBag />,
      },
    ],
  };
  const mainRoutes = {
    label: "Main Home",
    title: "Dashboard",
    href: "/admin",
    icon: <LayoutGrid />,
  };
  const supportRoutes = {
    label: "Support",
    value: [
      {
        title: "Help Center",
        href: "/admin/help",
        icon: <CircleHelp />,
      },
      {
        title: "FAQs",
        href: "/admin/faqs",
        icon: <Headset />,
      },
      {
        title: "Privacy Policy",
        href: "/admin/policy",
        icon: <FileText />,
      },
    ],
  };
  const couponsRoutes = {
    label: "Coupons",
    title: "Coupon",
    href: "/admin/coupon",
    icon: <TicketPercent />,
  };
  return { routes, mainRoutes, pathname, supportRoutes, couponsRoutes };
};

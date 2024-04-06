import {
  DollarSign,
  File,
  LaptopMinimal,
  ShoppingBag,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

const salesData = [
  {
    icon1: <LaptopMinimal size={60} />,
    icon2: <ShoppingBag />,
    title: "Total Sales",
    price: "34,945",
    icon3: <TrendingUp />,
    percent: "1.56%",
  },
  {
    icon1: <LaptopMinimal size={60} />,
    icon2: <DollarSign />,
    title: "Total Income",
    price: "$37,802",
    icon3: <TrendingDown />,
    percent: "1.56%",
  },
  {
    icon1: <LaptopMinimal size={60} />,
    icon2: <File />,
    title: "Orders Paid",
    price: "34,945",
    icon3: <TrendingUp />,
    percent: "0.00%",
  },
  {
    icon1: <LaptopMinimal size={60} />,
    icon2: <Users />,
    title: "Total Visitor",
    price: "34,945",
    icon3: <TrendingUp />,
    percent: "1.56%",
  },
];
export { salesData };

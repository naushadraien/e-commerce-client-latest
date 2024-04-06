import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
interface TopProductsPropstype {
  data: {
    image: string;
    title: string;
    items: string;
    coupon: {
      title: string;
      code: string;
    };
  }[];
}
const TopProducts = ({ data }: TopProductsPropstype) => {
  return (
    <Card className="flex flex-col h-96">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Top Products</CardTitle>
        <CardTitle className="cursor-pointer font-medium text-gray-400 text-sm">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex justify-center items-end
            "
            >
              <p className="">View all</p> <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>3 days</DropdownMenuItem>
              <DropdownMenuItem>7 days</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardTitle>
      </CardHeader>
      {data.map((item, idx) => (
        <CardContent className="flex justify-between" key={idx}>
          <div className="flex gap-4">
            <div className="bg-[#eff4f8] rounded-md p-2">
              <Image
                src={item.image}
                alt="Product-Image"
                width={40}
                height={40}
                className="w-8 h-8 rounded-sm"
              />
            </div>
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="text-gray-400">{item.items}</p>
            </div>
          </div>
          <div>
            <p className="text-gray-400">{item.coupon.title}</p>
            <p className="font-light">{item.coupon.code}</p>
          </div>
        </CardContent>
      ))}
    </Card>
  );
};

export default TopProducts;

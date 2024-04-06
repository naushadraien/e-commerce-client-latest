import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface SellerPropsType {
  data: {
    label: string;
    desc: {
      name?: string;
      title?: string;
      image?: string;
      purchase?: string;
      price?: string;
    }[];
  }[];
}
const Seller: FC<SellerPropsType> = ({ data }) => {
  return (
    <Card className="flex flex-col h-full w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Best Shop Sellers</CardTitle>
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
      <CardContent className="flex justify-between">
        {data.map((item, idx) => (
          <div className="flex flex-col gap-2" key={idx}>
            <p className="font-semibold">{item.label}</p>
            {item.label === "Shop"
              ? item.desc.map((item, idx) => (
                  <div className="flex gap-4" key={idx}>
                    {item.image && (
                      <Image
                        src={item.image}
                        alt="Product-Image"
                        width={40}
                        height={40}
                        className="w-12 h-12 rounded-full mb-4"
                      />
                    )}
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-400">{item.purchase}</p>
                    </div>
                  </div>
                ))
              : item.label === "Categories"
              ? item.desc.map((item, idx) => (
                  <p className="mt-2" key={idx}>
                    {item.title}
                  </p>
                ))
              : item.desc.map((item, idx) => (
                  <p className="mt-2" key={idx}>
                    {item.price}
                  </p>
                ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Seller;

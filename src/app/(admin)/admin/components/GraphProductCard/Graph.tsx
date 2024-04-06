"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface GraphPropsType {
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}
const Graph: FC<GraphPropsType> = ({ data }) => {
  return (
    <Card className="flex flex-col h-96">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Recent orders</CardTitle>
        <CardTitle className="cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger>...</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>This Week</DropdownMenuItem>
              <DropdownMenuItem>Last Week</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Graph;

import { Card, CardContent } from "@/components/ui/card";
import { salesData } from "./SalesData";

const SalesCard = () => {
  return (
    <div className="container grid grid-cols-1 gap-4 md:flex md:flex-wrap md:gap-10">
      {salesData.map((item, idx) => (
        <Card key={idx} className="flex justify-center items-center p-4">
          <CardContent className="flex justify-between items-center gap-3">
            <div className="flex justify-center items-center relative">
              {item.icon1}
              <div className="absolute top-[13px]">{item.icon2}</div>
            </div>
            <div>
              <p>{item.title}</p>
              <p className="font-bold">{item.price}</p>
            </div>
          </CardContent>
          <div>
            <div>
              <p
                className={`${
                  idx === 0
                    ? "text-green-500"
                    : idx === 1
                    ? "text-red-500"
                    : idx === 2
                    ? "text-gray-500"
                    : "text-green-500"
                }`}
              >
                {item.icon3}
              </p>
              <p className="font-semibold text-gray-400">{item.percent}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SalesCard;

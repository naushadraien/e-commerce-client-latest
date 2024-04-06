import React from "react";
import Seller from "./Seller";
import { categororiesData, sellerData, totalData } from "./sellerData";

const SellerProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container h-full">
      <Seller data={sellerData} />
      <div>product</div>
    </div>
  );
};

export default SellerProductCard;

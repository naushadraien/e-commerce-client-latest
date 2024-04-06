import GraphProductCard from "../components/GraphProductCard/GraphProductCard";
import SalesCard from "../components/SalesCard/SalesCard";
import SellerProductCard from "../components/SellerProductCard/SellerProductCard";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <SalesCard />
      <GraphProductCard />
      <SellerProductCard />
    </div>
  );
};

export default page;

import GraphProductCard from "../components/GraphProductCard/GraphProductCard";
import SalesCard from "../components/SalesCard/SalesCard";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <SalesCard />
      <GraphProductCard />
    </div>
  );
};

export default page;

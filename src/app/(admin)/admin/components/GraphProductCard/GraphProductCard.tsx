import Graph from "./Graph";
import { data } from "./graphData";
import { productData } from "./productData";
import TopProducts from "./TopProducts";

const GraphProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container h-full">
      <Graph data={data} />
      <TopProducts data={productData} />
    </div>
  );
};

export default GraphProductCard;

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlices";
import { useFetch } from "@/hooks/useFetch";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { ArrowDown, ArrowUp } from "lucide-react";





const ProductList = () => {
  const [filter, setFilter] = useState('')
  const { data: products, isLoading } = useFetch(filter);
  const dispatch = useDispatch();
  const [more, setMore] = useState(8)

  const filterCategory = [
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing"
  ]
  const [sortOption, setSortOption] = useState("default");
  const sortedProducts = () => {
    if (!products) return [];

    return [...products].sort((a, b) => {
      if (sortOption === "Asc") return a.price - b.price;
      if (sortOption === "Desc") return b.price - a.price;
      return 0;
    });
  };
  if (isLoading) return <div className="w-full h-[90vh] flex items-center justify-center"><div className="lds-dual-ring"></div></div>;
  return (
    <div className="flex flex-col">
      <div className="items-start px-5 mt-2 flex gap-3">
        <DropdownMenu filter={filter} setFilter={setFilter} filterCategory={filterCategory} />
        <div className="flex gap-2">
          <Button onClick={() => setSortOption('Asc')}>Asc<ArrowUp /></Button>
          <Button onClick={() => setSortOption('Desc')}>Desc<ArrowDown /></Button>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 p-5">
        {sortedProducts() && sortedProducts()?.slice(0, more)?.map((product: any) => (
          <Card key={product.id} className="border flex justify-between flex-col items-center p-4">
            <img src={product.image} alt={product.title} className="h-40 object-contain" />
            <h3 className="text-lg">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <Button
              className="bg-blue-500 text-white p-2 rounded mt-2"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
      {more === 8 && <Button onClick={() => setMore(sortedProducts().length)} className="mx-auto">
        Load More
      </Button>}
      {more > 8 && <Button onClick={() => setMore(8)} className="mx-auto">
        Show Less
      </Button>}
    </div>
  );
};

export default ProductList;

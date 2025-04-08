import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function SimilarProduct({ data }) {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Start loading
    setProducts([]); // Clear previous products

    const timer = setTimeout(() => {
      setProducts([...data]); // Simulate fetching new data
      setLoading(false); // Stop loading when products are set
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount or re-run
  }, [searchParams,data]); // Trigger effect when searchParams change

  return (
    <div className="w-full ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading ? (
          <p className="text-xl ">Loading...</p>
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p className="text-xl">No data found</p>
        )}
      </div>
    </div>
  );
}

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);

  return (
    <Link to={`/${product.gender}/${product.category}/${product.sku}`}>
      <div onClick={() => window.scrollTo(0, 0)}>
        <img
          onMouseEnter={() =>
            setCount((prev) => (prev + 1) % product.images.length)
          }
          onMouseLeave={() => setCount(0)}
          src={product.images[count]?.url}
          className="rounded-lg w-full h-[250px] md:h-[300px] hover:cursor-pointer lg:h-[350px] object-cover block"
          alt={product.name}
        />
        <div className="ml-1 py-2">
          <h3 className="font-semibold tracking-tighter">{product.name}</h3>
          <p className="tracking-tighter text-red-700 ">
            ${product.discountPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

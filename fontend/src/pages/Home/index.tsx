
import { useState, useEffect } from "react";

import { getProducts } from "../../api/product";
import { Link } from "react-router-dom";
import { TProduct } from "../../interfaces/product.type";


export default function Home() {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const fetchAllProduct = async () => {
      const { data } = await getProducts({});
      setProducts(data.data?.docs as TProduct[]);
    };
    fetchAllProduct();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products && products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            style={{
              width: "calc(33.33% - 16px)",
              margin: "8px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <Link to={`/products/${product._id}`}>
              <img
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                alt={product.name}
                src={product.image}
              />
            </Link>
            <div style={{ padding: "8px" }}>
              <h3 style={{ margin: 0 }}>{product.name}</h3>
              <p style={{ margin: 0 }}>{product.price}</p>
            </div>
          </div>
        ))
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
}

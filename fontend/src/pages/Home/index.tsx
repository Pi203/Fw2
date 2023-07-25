
import { useState, useEffect } from "react";

import { getProducts } from "../../api/product";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/product.type";


export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchAllProduct = async () => {
      const { data } = await getProducts({});
      setProducts(data.data?.docs as IProduct[]);
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
         
            <div className="product-item men">
            <div className="product discount product_filter">
                <div className="product_image">
                <Link to={`/products/${product._id}`}>
              <img
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
            
                src={product.image}
              />
            </Link>
                </div>
                <div className="favorite favorite_left"></div>
                <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
                <div className="product_info">
                    <h6 className="product_name"><a href="single.html">{product.name}</a></h6>
                    <div className="product_price">{product.price}</div>
                </div>
            </div>
            <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
        </div>

          </div>
        ))
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
     
        </div>
      )}
    </div>
  );
}

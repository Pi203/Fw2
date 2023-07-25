import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getProducts } from "../../api/product";
import { IProduct } from "../../interfaces/product.type";

export default function ProductDetail() {
  const { id } = useParams();
  
  const [product, setProduct] = useState<IProduct>({}as IProduct);
  const [similarProducts, setSimilarProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const { data } = await getProduct(id);
          setProduct(data.data as IProduct);
          const { data: dataProductsSimilar } = await getProducts({
            _categoryId: data.data?.categoryId,
          });
          // Filter out the current product from similar products
          setSimilarProducts(
            (dataProductsSimilar.data?.docs as IProduct[]).filter(
              (p) => p._id !== id
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {product && (
        <>
          <div>
            <img width="50%" src={product.image} />
          </div>
          <div>
            <h3>{product.name}</h3>
            <h4>Giá: {product.price}</h4>
            <p>{product.description}</p>
          </div>
        </>
      )}
    </>
  );
}
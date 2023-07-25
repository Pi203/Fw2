import { Card, Col, Divider, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct, getProducts } from "../../api/product";
import { TProduct } from "../../interfaces/product.type";


export default function ProductDetail() {
  const { Title, Text } = Typography;
  const { id } = useParams();
  const [product, setProduct] = React.useState<TProduct>({} as TProduct);
  const [similarProducts, setSimilarProducts] = React.useState<TProduct[]>([]);
  const { Meta } = Card;

  useEffect(() => {
    (async () => {
      if (id) {
        const { data } = await getProduct(id);
        setProduct(data.data as TProduct);
        const { data: dataProductsSimilar } = await getProducts({
          _categoryId: data.data?.categoryId,
        });
        setSimilarProducts(
          (dataProductsSimilar.data?.docs as TProduct[]).filter(
            (p) => p._id !== id
          )
        );
      }
    })();
  }, [id]);
  return (
    <>
      <Row gutter={12}>
        {product && (
          <>
            <Col span={12}>
              <img width="50%" src={product.image} />
            </Col>
            <Col span={12}>
            <Divider>
              
              </Divider>
              <Title level={3}>{product.name}</Title>
              <Title level={4}>Giá: {product.price}</Title>
           
              <Text>{product.description}</Text>
            </Col>
          </>
        )}
      </Row>
     
    </>
  );
}

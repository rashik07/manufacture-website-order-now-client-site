import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Product from "./Product";
import { Avatar, Card, Col, Row } from "antd";

const Products = () => {
  const { isLoading, error, data } = useQuery(["product"], () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  if (isLoading) {
    return <h1>efrewf</h1>;
  }
  return (
    <div>
      {/* {console.log(data)} */}
      <br />
      <h1>Products</h1>
      <Row justify="space-between" gutter={16}>
        {data.slice(0, 3).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;
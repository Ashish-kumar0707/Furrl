import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayItems from "./DisplayItems";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://api.furrl.in/api/v2/listing/getListingProducts";
        const requestData = {
          input: {
            page: 1,
            pageSize: 100,
            filters: [],
            id: "#NightFlea",
            entity: "vibe",
          },
        };
        const response = await axios.post(apiUrl, requestData);
        setProducts(response?.data?.data?.getListingProducts?.products || []);
        console.log(response?.data?.data?.getListingProducts?.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="main-container" style={{
        padding: 0,
        margin: 0,
        boxSizing: 'border-box'
      }}>
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1} padding={1}>
          {products.map((product, index) => (
            <DisplayItems key={index} product={product}/>
          ))}
        </Box>
      </div>
    </>
  );
}

export default ProductList;

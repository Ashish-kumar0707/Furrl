import React, { useState } from "react";
import Link from "next/link";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
function Product() {
  const [selected, setselected] = useState("products");
  const [selectedButton, setSelectedButton] = useState(0);

  

  const styleSelected = {
    background: "white",
    paddingInline: "25px",
    paddingBlock: "8px",
    width: "auto",
    borderRadius: "5px",
  };
  const styleNotSelected = {
    paddingInline: "25px",
    paddingBlock: "8px",
    width: "auto",
    borderRadius: "5px",
  };

  const changeSelected = () => {
    if (selected === "products") {
      setselected("brands");
    } else {
      setselected("products");
    }
  };

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const dummyNames = [
    "All",
    "Apparel",
    "Accessories",
    "Home",
    "Kurta And Kurta Sets",
    "Topwear",
  ];
  return (
    <div style={{ marginBlock: "10px", padding: "10px" }}>
      <Box
        sx={{
          background: "#ddd",
          paddingBlock: "5px",
          paddingInline: "40px",
          borderRadius: "5px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={
              selected === "products"
                ? { ...styleSelected }
                : { ...styleNotSelected }
            }
            onClick={changeSelected}
          >
            Products
          </Typography>
          <Typography
            sx={
              selected === "brands"
                ? { ...styleSelected }
                : { ...styleNotSelected }
            }
            onClick={changeSelected}
          >
            Brands
          </Typography>
        </Box>
      </Box>
      <Box>
        <p style={{ color: "#64748B" , marginBlock:"10px"}}>1342 products</p>
      </Box>
      <Box
      sx={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        maxWidth: "100%",
      }}
    >
      {dummyNames.map((name, index) => (
        <Button
          key={index}
          onClick={() => handleButtonClick(index)}
          sx={{
            display: "inline-block",
            margin: "5px",
            borderRadius:"20px",
            border:'0.2px solid black',
            backgroundColor: selectedButton === index ? "purple" : "transparent",
            color: selectedButton === index ? "white" : "black",
          }}
        >
          {name}
        </Button>
      ))}
    </Box>

      

      
      
    </div>
  );
}

export default Product;

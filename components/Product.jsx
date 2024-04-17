import React, { useState } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
function Product() {

  const [selected, setselected]= useState('products');

  const styleSelected={
    background:"white", paddingInline:"25px",paddingBlock:"8px", width:"auto", borderRadius:"5px",
  }
  const styleNotSelected={
    paddingInline:"25px",paddingBlock:"8px", width:"auto", borderRadius:"5px",
  }

  

  const changeSelected=()=>{
    if(selected==='products'){
      setselected("brands");
    }
    else{
      setselected("products");
    }
  }
  return (
    <div style={{ marginBlock: "10px", padding: "10px" }}>
        <Box sx={{background:"#ddd", paddingBlock:"5px",paddingInline:"40px", borderRadius:"5px"}}>
           <Box sx={{display:"flex", justifyContent:"space-between",}}>
            <Typography sx={selected==='products' ? {...styleSelected} : {...styleNotSelected}} onClick={changeSelected}
             >
              Products
            </Typography>
            <Typography sx={selected==='brands' ? {...styleSelected} : {...styleNotSelected}} onClick={changeSelected}>
              Brands
            </Typography>
           </Box>
        </Box>
      <Box>
        <p style={{ color: "#64748B" }}>1342 products</p>
      </Box>
      <div
        style={{ display: "flex", justifyContent: "spaceAround", gap: "10px" }}
      >
        <div>
          <Link
            href="/wishlist"
            style={{
              padding: "5px",
              paddingInline: "10px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              color: "black",
              background: "white",
            }}
            onMouseOver={(e) => {
              (e.target.style.background = "#a45bd9"),
                (e.target.style.color = "white");
            }} // Change color on hover
            onMouseOut={(e) => {
              (e.target.style.background = "white"),
                (e.target.style.color = "black");
            }}
          >
            All{" "}
          </Link>
        </div>
        <div>
          <Link
            href="/wishlist"
            style={{
              padding: "5px",
              paddingInline: "10px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              color: "black",
              background: "white",
            }}
            onMouseOver={(e) => {
              (e.target.style.background = "#a45bd9"),
                (e.target.style.color = "white");
            }} // Change color on hover
            onMouseOut={(e) => {
              (e.target.style.background = "white"),
                (e.target.style.color = "black");
            }}
          >
            Home{" "}
          </Link>
        </div>
        <div>
          <Link
            href="/wishlist"
            style={{
              padding: "5px",
              paddingInline: "10px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              color: "black",
              background: "white",
            }}
            onMouseOver={(e) => {
              (e.target.style.background = "#a45bd9"),
                (e.target.style.color = "white");
            }} // Change color on hover
            onMouseOut={(e) => {
              (e.target.style.background = "white"),
                (e.target.style.color = "black");
            }}
          >
            Apparel{" "}
          </Link>
        </div>
        <div>
          <Link
            href="/wishlist"
            style={{
              padding: "5px",
              paddingInline: "10px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              color: "black",
              background: "white",
            }}
            onMouseOver={(e) => {
              (e.target.style.background = "#a45bd9"),
                (e.target.style.color = "white");
            }} // Change color on hover
            onMouseOut={(e) => {
              (e.target.style.background = "white"),
                (e.target.style.color = "black");
            }}
          >
            Accessories{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;

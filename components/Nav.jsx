import React from "react";
import Link from "next/link";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
function Nav() {
  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems:"center",
        gap: "90px",
        background:"white",
        padding:'15px'
      }}
    >
      <div>
        <Link href="https://web.furrl.in/cart" >
          #Vibe Page
        </Link>
      </div>
      <div style={{display:"flex", gap:"15px", alignItems:"center"}}>
        <Link href="https://web.furrl.in/wishlist">
          <BookmarkBorderOutlinedIcon style={{height:'22px', width:"22px"}} /> 
        </Link>
        <Link href="/cart">
        <ShoppingBagOutlinedIcon style={{height:'22px', width:"22px"}}/> 
        </Link>
      </div>
    </div>
    <div>

    </div>
    </>
  );
}

export default Nav;

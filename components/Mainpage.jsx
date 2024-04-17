import { Box, Typography } from "@mui/material";
import React from "react";

function Mainpage() {
  return (
    <div style={{}}>
      <div style={{ height: "250px", overflow:"hidden" }}>
        <img
          style={{ maxWidth: "400px" }}
          src="https://cdn.furrl.in/vibes/VibeCard_HomeHunts.jpg"
          alt=""
        />
      </div>
      <Box sx={{color:"white", marginBlockStart:"-50px",display:"flex", justifyContent:"center",}}>
      <Typography sx={{fontSize:"30px", fontFamily:"Montserrat, sans-serif"}} >
        #HomeHunts
      </Typography>
      </Box>
      
    </div>
  );
}

export default Mainpage;

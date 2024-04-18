import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const DisplayItems = ({ product }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1.5}
    >
      <Box>
        <img
          src={product.images[0].src}
          alt={"Product  Image "}
          width="100%"
          height="180px"
        />
      </Box>
      <Box sx={{ paddingInline: "3px" }}>
        <Typography color="textSecondary" gutterBottom>
          {product.brand[0].name}
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          sx={{ overflow: "hidden" }}
        >
          {product.title}
        </Typography>
        <Box sx={{ display: "flex", gap: "3px", alignItems: "center" }}>
          <Typography
            color="textPrimary"
            gutterBottom
            fontSize={15}
            fontWeight={30}
          >
            Rs {product.price.value}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            fontSize={15}
            sx={{ textDecoration: "line-through" }}
          >
            Rs {product.MRP.value}
          </Typography>
          <Typography color="textSecondary" gutterBottom fontSize={15}>
            {product.discountPercent}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
// const DisplayItems = ({product}) => {
//   return (
//     <Grid
//       sx={{ border: "2px solid red" }}
//       item
//       xs
//       justifyContent="space-evenly"
//       direction="row"
//       alignItems="center"
//     >
//       <Box>
//         <Box>
//           <img
//             src={product.images[0].src}
//             alt={"Product  Image "}
//             // sx={imageStyle}
//             height={190}
//             width={190}
//           />
//         </Box>
//         <Box sx={{ paddingInline: "3px" }}>
//           <Typography color="textSecondary" gutterBottom>
//             {product.brand[0].name}
//           </Typography>
//           <Typography
//             color="textSecondary"
//             gutterBottom
//             sx={{ overflow: "hidden" }}
//           >
//             {product.title}
//           </Typography>
//           <Box sx={{ display: "flex", gap: "3px", alignItems: "center" }}>
//             <Typography
//               color="textPrimary"
//               gutterBottom
//               fontSize={15}
//               fontWeight={30}
//             >
//               Rs {product.price.value}
//             </Typography>
//             <Typography
//               color="textSecondary"
//               gutterBottom
//               fontSize={15}
//               sx={{ textDecoration: "line-through" }}
//             >
//               Rs {product.MRP.value}
//             </Typography>
//             <Typography color="textSecondary" gutterBottom fontSize={15}>
//               {product.discountPercent}%
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

export default DisplayItems;

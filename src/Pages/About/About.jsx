import React from 'react'
import { Box, styled, Typography} from "@mui/material"; 




const About = () => {
const CustomBox= styled (Box) (({ theme }) => ({
width: "30%",
[theme.breakpoints.down("md")]: {
width: "85%",
},
}));


  return (
    <Box sx={{
display: "flex", 
flexDirection: "column",
 justifyContent: "center", 
 alignItems: "center", 
 padding: '40px',
  mt:'65px',
   mb: '100px'
    }}>

    
<div style={{
    width:"5%",
    height:"5px",
    backgroundColor:"#000339",
    margin:"0 auto"
}} >
</div>

<Typography 
variant="h3" 
sx={{ 
    fontSize: "35px", 
    fontweight: "bold", 
    color: "#000339",  my: 3
     }}>
About Us
</Typography>

<CustomBox>
    <Typography
variant="body2"
 sx={{ fontSize: "16px",
  fontweight: "500", 
 color: "#5A6473", 
 textAlign: "center",
  }} >
Welcome to our restaurant, where culinary excellence meets warm hospitality
</Typography>
</CustomBox>
</Box>
);

    
}

export default About

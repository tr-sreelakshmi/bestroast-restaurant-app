import React from 'react'
import {styled, Typography} from '@mui/material';
import { Box, Container } from '@mui/system';
import deliveryImg from "../../assets/DeliveryImg.png";
import CustomButton from '../../Components/CustomButton/CustomButtom';


const  Delivery = ()=> {

    const CustomContainer = styled (Container) (({theme}) => ({
        backgroundColor: "#FED801",
        height: "416px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center", 
        [theme.breakpoints.down("md")]: {
        height: "auto",
        flexDirection: "column", 
        alignItems: "center", 
        padding: theme.spacing(3, 3, 0, 3),
        width: "90%",
        },
        }));

        const CustomBox = styled (Box) (({ theme }) => ({
            padding: theme.spacing(10, 0, 10, 0),
            margin: theme.spacing(0, 2, 0, 2),
            [theme.breakpoints.down("md")]: {
            padding: "0",
            },
        }));

  return (

    <CustomBox>
<CustomContainer>
<Box>
<Typography sx={{ 
    fontSize: "35px",
     color: "white",
      fontweight: "700",
       fontFamily: "monospace" }}
       >
Super Fast Home Delivery
</Typography>
<Typography sx={{ 
    fontSize: "16px", 
    color: "#000",
     fontWeight: "800", 
     my: 3,
      fontFamily: "monospace" }}>
Door to Door Delivery!
</Typography>
<CustomButton
backgroundColor="#fff"
color="#17275F"
buttonText="Order Now!!"
/>
</Box>
<img src={deliveryImg} 
alt="delivery"
style={{maxwidth :"100%"}} />
</CustomContainer>
</CustomBox>


    )
}

export default Delivery



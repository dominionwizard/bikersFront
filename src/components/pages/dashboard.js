import styled from "styled-components"
// import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button'
// import ModalComponent from "../../Modal/Modal";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Delivery from "./CourierService/delivery";


const HeroComponent = styled.header `
padding: 5rem 0;
height: 80vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image :url("https://th.bing.com/th/id/OIP.tIWYHp2UToqlqifSs6zeqAAAAA?pid=ImgDet&rs=1");
`;

const HeaderContainer = styled.div`
background-color: rgb(5, 148, 112);
padding: 3rem;
color: gold;
width: 30rem

`;
const Header = styled.h1`
font-size: 4rem
`

const SubHeading = styled.h3`
margin: 1rem 0;
font-weight: 400

`
export default function Dashboard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <div>
           
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          > 
           <p style={{marginLeft: "60rem"}}> Dashboard</p>
          </Button>
          <HeroComponent/>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem href="delivery"  target="_blank" component="a" 
          onClick={handleClose}>Send for Delivery</MenuItem>
            <MenuItem href="signinsignup"  target="_blank" component="a"  onClick={handleClose}>Logout</MenuItem>
          </Menu>
          
        </div>
        
      );
    }




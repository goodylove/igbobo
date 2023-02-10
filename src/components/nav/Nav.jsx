import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoNav from ".././assets/Logo (1).png";

const Nav = () => {
  return (
    <Box className="nav">
      <Box className="log-con">
        <Image src={LogoNav} alt="LOGO" />
        <span>igbobo</span>
      </Box>
      <Box className="menu-con">
        <ul>
          <li>Shop</li>
          <li>Plant care</li>
          <li>Worh-shop</li>
          <li>Blog</li>
        </ul>
      </Box>
      <Box className="cart-con"></Box>
    </Box>
  );
};
export default Nav;

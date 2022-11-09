import { Container, Button, Nav, Navbar as NavBarbs } from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import IMG from "../icons/shoppingCart.svg";
import styled from "styled-components";
import { useShoppingCart } from "../context/ShoppingCartContext";

//Test how to combine styled compoents
// with bootstrap library

const StyledButton = styled(Button)`
  color: red;
  background-color: blue;
`;

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavBarbs sticky="top" className="bg-white shadow-lg mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>

        {cartQuantity > 0 && (
          <StyledButton
            onClick={openCart}
            className="rounded-circle"
            variant="primary"
            style={{ position: "relative" }}
          >
            <img
              src={IMG}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
            />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
              }}
            >
              {cartQuantity}
            </div>
          </StyledButton>
        )}
      </Container>
    </NavBarbs>
  );
};

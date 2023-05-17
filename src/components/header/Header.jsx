import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function Header() {
  return (
    <>
      <MainHeader>
        <LinkMain to="/">iStore</LinkMain>
        <DivDiv>
          <LinkMain to="/Products">Products</LinkMain>
          <LinkMain to="/MyCart">My Cart</LinkMain>
          <LinkMain to="/MyOrders">My Orders</LinkMain>
        </DivDiv>
      </MainHeader>
    </>
  );
}

export default Header;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding-left: 20px;
  align-items: center;
  background-color: #416ea2;
  font-size: 20px;
  width: 100%;
  height: 100px;
  list-style: none;
`;
const LinkMain = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 25px;
  font-weight: 600;
  &:hover {
    color: #034371;
  }
  &.active {
    color: #000000;
  }
`;
const DivDiv = styled.div`
  display: flex;
  gap: 80px;
`;

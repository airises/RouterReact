import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Products from "../pages/Product";
import MyCart from "../pages/MyCart";
import MyOrders from "../pages/MyOrders";
import NotFound from "../pages/NotFound";
import { styled } from "styled-components";
import Button from "../../UI/Button";
import ProductDetails from "../pages/ProductDetails";

function AppRoutes() {
  const navigate = useNavigate();
  const clikedButtons = () => {
    navigate(-1);
  };
  return (
    <div>
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id/details" element={<ProductDetails />} />
        <Route path="/MyCart" element={<MyCart />} />
        <Route path="/MyOrders" element={<MyOrders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <DivButton>
        <Button onClick={clikedButtons}>Go Back</Button>
      </DivButton>
    </div>
  );
}

export default AppRoutes;

const DivButton = styled.div`
  display: flex;
  align-items: center;
  padding-left: 100px;
  padding-top: 50px;
`;

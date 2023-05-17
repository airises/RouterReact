import React from "react";
import { styled } from "styled-components";

function MyOrders() {
  return (
    <Div>
      <Div1>My Orders</Div1>
    </Div>
  );
}

export default MyOrders;

const Div = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;
const Div1 = styled.div`
  background-color: #f4f4f4;
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

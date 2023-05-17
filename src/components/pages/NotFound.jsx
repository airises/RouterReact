import React from "react";
import { styled } from "styled-components";

function NotFound() {
  return (
    <Div>
      <NotFoundPage>
        <h1>404</h1>
        <h2>Not Found Page</h2>
      </NotFoundPage>
    </Div>
  );
}

export default NotFound;

const NotFoundPage = styled.div`
  width: 500px;
  background-color: #ff0000;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

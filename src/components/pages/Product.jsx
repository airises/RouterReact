import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Product() {
  const products = [
    {
      id: '1',
      title: "Iphone 14",
      price: 1400,
      url: "https://i.pinimg.com/564x/df/e8/f3/dfe8f35fe032368fef7ee882f54c8d4b.jpg",
      information:
      "смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A16 Bionic. Устройство было представлено вместе с iPhone 14 и iPhone 14 Plus 7 сентября 2022 года на специальном мероприятии Apple в Apple Park в Купертино. Предзаказы стартовали 9 сентября 2022 года, смартфоны поступили в продажу 16 сентября 2022 года",

    },
    {
      id: '2',
      title: "Iphone 13",
      price: 1300,
      url: "https://i.pinimg.com/564x/38/30/3b/38303b1678b8bb0b50626675754253b9.jpg",
    },
    {
      id:'3',
      title: "Iphone 13",
      price: 1200,
      url: "https://i.pinimg.com/564x/cf/a9/2f/cfa92f3cfa6aa4f018266469c2483f17.jpg",
    },
  ];
  return (
    <Products>
      {products.map((el) => (
        <ProductsDiv to={`${el.id}/details`}>
          <Images src={el.url} alt="phones" />
          <h2>{el.title}</h2>
          <p>$ {el.price}</p>
          <StyledLink to={`${el.id}/details`}> details</StyledLink>
        </ProductsDiv>
      ))}
    </Products>
  );
}

export default Product;

const Products = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;
const ProductsDiv = styled.div`
  border-radius: 12px;
  width: 300px;
  height: 450px;

  background-color: #fff;
`;
const Images = styled.img`
  margin-top: 30px;
  width: 250px;
  border-radius: 12px;
`;
const StyledLink = styled(Link)`
  padding: 8px 12px;
  text-decoration: none;
  color: #fff;
  background-color: #0dc2b9;
  border-radius: 20px;

  :hover {
    background-color: #0caea6;
  }
`;
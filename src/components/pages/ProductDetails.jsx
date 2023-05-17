import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../UI/Button";

const products = [
  {
    id: "1",
    url: "https://i.pinimg.com/564x/df/e8/f3/dfe8f35fe032368fef7ee882f54c8d4b.jpg",
    name: "Iphone 14 ",
    price: 1400,

    about:
      "смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A16 Bionic. Устройство было представлено вместе с iPhone 14 и iPhone 14 Plus 7 сентября 2022 года на специальном мероприятии Apple в Apple Park в Купертино. Предзаказы стартовали 9 сентября 2022 года, смартфоны поступили в продажу 16 сентября 2022 года",
  },
  {
    id: "2",
    url: "https://i.pinimg.com/564x/38/30/3b/38303b1678b8bb0b50626675754253b9.jpg",
    name: "Iphone 13 ",
    price: 1300,
    about:
      "смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A16 Bionic. Устройство было представлено вместе с iPhone 14 и iPhone 14 Plus 7 сентября 2022 года на специальном мероприятии Apple в Apple Park в Купертино. Предзаказы стартовали 9 сентября 2022 года, смартфоны поступили в продажу 16 сентября 2022 года",
  },
  {
    id: "3",
    url: "https://i.pinimg.com/564x/cf/a9/2f/cfa92f3cfa6aa4f018266469c2483f17.jpg",
    name: "Iphone 13",
    price: 1200,

    about:
      "смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A16 Bionic. Устройство было представлено вместе с iPhone 14 и iPhone 14 Plus 7 сентября 2022 года на специальном мероприятии Apple в Apple Park в Купертино. Предзаказы стартовали 9 сентября 2022 года, смартфоны поступили в продажу 16 сентября 2022 года",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <Container>
      {products.map((el) => {
        return (
          id === el.id && (
            <div key={el.id}>
              <FirstCont>
                <Images src={el.url} alt="" />
                <SecondCont>
                  <h2>{el.name}</h2>
                  <h3>$ {el.price}</h3>
                </SecondCont>
              </FirstCont>
              <p>{el.about}</p>
            </div>
          )
        );
      })}
    </Container>
  );
};

export default ProductDetails;

const Container = styled.div`
  font-size: 20px;
  width: 1000px;
  background-color: #fff;
  margin: 0 auto;
  height: 400px;
  margin-top: 80px;
  /* text-align: left; */
`;

const Images = styled.img`
  width: 250px;
`;
const FirstCont = styled.div`
  display: flex;
`;
const SecondCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

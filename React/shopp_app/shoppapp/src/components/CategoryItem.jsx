import React from "react";
import styled from "styled-components";

const Contanier = styled.div`
  flex: 1;
  margin: 4px;
  height: 70vh;
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
const CategoryItem = ({ item }) => {
  return (
    <Contanier>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Contanier>
  );
};

export default CategoryItem;

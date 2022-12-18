import React from "react";
import styled from "styled-components";

// import icons from react-icon
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "@material-ui/core";


//  styled components
const Container = styled.div`
  height: 60px;
  margin-bottom: 40px;
  /* background-color: gray; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// left part
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Languages = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
    border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 35px;
  padding: 5px;
`;
const Input = styled.input`
  margin-right: 10px;
  padding: 8px;
  border: none;
`;

// center part
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

// right part
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItme = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;




const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input placeholder="Search" />
            <BsSearch style={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA</Logo>
        </Center>
        <Right>
          <MenuItme> REGISTER</MenuItme>
          <MenuItme> SING IN</MenuItme>
          <MenuItme>
              <Badge badgeContent={4} color="primary">
                 <AiOutlineShoppingCart style={{color: "gray" , fontSize:25}}/>
              </Badge>
          </MenuItme>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcements from "../../components/announcements/Announcements";
import Products from "../../components/products/Products";
import NewsLetter from "../../components/news/NewsLetter";
import Footer from "../../components/footer/Footer";
import {mobile } from '../../responsive';
const Conatiner = styled.div`
  text-align: left;
`;

const Title = styled.h1`
  margin: 1rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: "0px 20px",display: "flex", flexDirection: "column" } )}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600px;
  margin-right:.5rem;
  ${mobile({margin: "0px 20px"})}
`;
const Select = styled.select`
  padding: .5rem 1rem;
  margin-right: 20px;
  border-radius: .4rem;
  color:#000000;
  font-weight: 600px;
  background-color: #e3e3e3;
  border:none;
  outline:none;
`;
const Options = styled.option` 
`;

const ProductsList = () => {
  return (
    <Conatiner>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>

      <FilterContainer>
        <Filter>
          {" "}
          <FilterText>Filter Products</FilterText>{" "}
          <Select>
            <Options disabled selected>
              Color
            </Options>
            <Options>White</Options>
            <Options>Red</Options>
            <Options>Black</Options>
            <Options>Blue</Options>
            <Options>Green</Options>
            <Options>Yellow</Options>
          </Select>
          <Select>
            <Options disabled selected>
              Size
            </Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>L</Options>
            <Options>XL</Options>
            <Options>XXL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Options selected>Newest</Options>
            <Options>Price (asc)</Options>
            <Options>Price (desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <NewsLetter />
      <Footer />
    </Conatiner>
  );
};

export default ProductsList;

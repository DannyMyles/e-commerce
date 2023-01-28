import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcements from "../../components/announcements/Announcements";
import Products from "../../components/products/Products";
import NewsLetter from "../../components/news/NewsLetter";
import Footer from "../../components/footer/Footer";

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
  margin: 1rem;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600px;
`;
const Select = styled.span`
  font-size: 20px;
  font-weight: 600px;
`;
const Options = styled.span`
  font-size: 20px;
  font-weight: 600px;
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
            <O
          </Select>
        </Filter>
        <Filter>
          {" "}
          <FilterText>Sort Products</FilterText>{" "}
        </Filter>
      </FilterContainer>

      <Products />
      <NewsLetter />
      <Footer />
    </Conatiner>
  );
};

export default ProductsList;

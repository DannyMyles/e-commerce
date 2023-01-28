import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcements from "../../components/announcements/Announcements";
import Footer from "../../components/footer/Footer";

const Conatiner = styled.div`
  text-align:left;
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

const ProductsList = () => {
  return (
    <Conatiner>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          filter1
        </Filter>
        <Filter>
          filter2
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLett
      <Footer />
    </Conatiner>
  );
};

export default ProductsList;

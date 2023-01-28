import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcements from "../../components/announcements/Announcements";

const Conatiner = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`

`;

const Filter = styled.div``;

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
    </Conatiner>
  );
};

export default ProductsList;

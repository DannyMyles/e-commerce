import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcements from "../../components/announcements/Announcements";

const Conatiner = styled.div`
  text-align
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
    </Conatiner>
  );
};

export default ProductsList;

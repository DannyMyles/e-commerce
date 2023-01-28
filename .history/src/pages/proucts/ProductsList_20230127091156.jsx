import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcements from "../../components/announcements/Announcements";

const Conatiner = styled.div``;
const Title = styled.div``;
const FilterContainer = styled.div``;

const Filter = styled.div``;

const ProductsList = () => {
  return (
    <Conatiner>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          
        </Filter>
      </FilterContainer>
    </Conatiner>
  );
};

export default ProductsList;

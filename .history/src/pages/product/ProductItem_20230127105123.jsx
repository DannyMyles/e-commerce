import styled from "styled-components";
import Announcements from "../../components/announcements/Announcements";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/news/NewsLetter";

const Container = styled.div`
  text-align: left;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;  
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right:.5rem;
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
  cursor: pointer;  
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color: ${props =>props.color};
  margin: 0 5px;
  cursor: pointer; 
`;

const Options = styled.option`
`;
const ProductItem = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />

      <Wrapper>
        <ImageContainer>
          <Image src="https://i.pinimg.com/564x/d9/7e/2b/d97e2bb5be41b03fd669cab3a8ec4862.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jeans</Title>
          <Desc>
            Quality cloth, in other words, should feel good, wash and wear well,
            and provide good service. But also be aware that for certain
            fabrics, that will be the same depending on whether it's a 'cheap'
            version or a 'luxury' one
          </Desc>
          <Price>Price: $50</Price>

        <FilterContainer>
        <Filter>
          <FilterText>Color</FilterText>{" "}
            <FilterColor color="black"></FilterColor>
            <FilterColor color="darkblue"></FilterColor>
            <FilterColor color="gray"></FilterColor>
        </Filter>

        <Filter>
          {" "}
          <FilterText>Size</FilterText>{" "}
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
      </FilterContainer>

      <AddContainer
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductItem;

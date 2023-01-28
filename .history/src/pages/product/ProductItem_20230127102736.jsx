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

const ProductItem = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />

      <Wrapper>
        <ImageContainer>
          <Image src="https://i.pinimg.com/564x/25/95/f4/2595f49c4e8be9d4f09e2d2927892b0c.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jeans</Title>
          <Desc>
            Quality cloth, in other words, should feel good, wash and wear well,
            and provide good service. But also be aware that for certain
            fabrics, that will be the same depending on whether it's a 'cheap'
            version or a 'luxury' one
          </Desc>
          <Price>Price :$ 50</Price>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductItem;

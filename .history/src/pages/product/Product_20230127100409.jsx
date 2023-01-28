import styled from "styled-components"
import Announcements from "../../components/announcements/Announcements"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import NewsLetter from "../../components/news/NewsLetter"

const Container = styled.div``

const Wrapper = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.img`

`;
const InfoContainer = styled.img`

`;
const Title = styled.img`

`;
const Desc = styled.img`

`;
const Price = styled.img`

`;
const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcements /> 
        
        <Wrapper>
            <ImageContainer>
                <Image />
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jeans</Title>
                <Desc>Quality cloth, in other words, should feel good, wash and wear well, and provide good service. But also be aware that for certain fabrics, that will be the same depending on whether it's a 'cheap' version or a 'luxury' one</Desc>
                <Price>$ 50</Price>
            </InfoContainer>
        </Wrapper>

        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product
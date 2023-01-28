import styled from "styled-components"
import Announcements from "../../components/announcements/Announcements"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import NewsLetter from "../../components/news/NewsLetter"

const Container = styled.div``

const Wrapper = styled.div``

const Wrapper = styled.div``

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcements /> 
        
        <Wrapper>
            <ImageContainer>
                <Image></Image>
            </ImageContainer>
        </Wrapper>

        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product
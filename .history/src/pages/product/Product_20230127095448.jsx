import styled from "styled-components"
import Announcements from "../../components/announcements/Announcements"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import NewsLetter from "../../components/news/NewsLetter"

const Container = styled.div``

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product
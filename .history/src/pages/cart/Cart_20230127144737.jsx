import styled from 'styled-components'
import Navbar from  '../../components/navbar/Navbar'
import Announcements  from  '../../components/announcements/Announcements'
import Footer  from  '../../components/footer/Footer'

const Container =styled.div``

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
`;
const Top =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const TopButton =styled.button`
padding: 10px;
font-weight: 600px;
cursor: pointer;
`;
const Bottom =styled.div`

`



const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>COUNT</TopButton>
        </Top>
        <Bottom></Bottom>
      </Wrapper>
      <Footer />
    </Container> 
  )
}

export default Cart

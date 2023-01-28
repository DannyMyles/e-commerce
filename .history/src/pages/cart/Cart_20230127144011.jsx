import styled from 'styled-components'
import Navbar from  '../../components/navbar/Navbar'
import Announcements  from  '../../components/announcements/Announcements'
import Footer  from  '../../components/footer/Footer'

const Container =styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        
      </Wrapper>
      <Footer />
    </Container> 
  )
}

export default Cart

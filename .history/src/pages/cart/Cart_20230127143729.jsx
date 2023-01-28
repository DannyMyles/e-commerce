import styled from 'styled-components'
import Navbar from  '../../components/navbar/Navbar'
import Announcements  from  '../../components/announcements/Announcements'
import Footer  from  '../../components/footer/Footer'

const Container =styled.div``

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      Cart
      <Footer />
    </Container>
  )
}

export default Cart

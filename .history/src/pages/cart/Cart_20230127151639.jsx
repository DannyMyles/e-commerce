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
padding: 20px;
`
const TopButton =styled.button`
padding: 10px;
font-weight: 600px;
cursor: pointer;
border: ${props =>props.type === 'filled' && "none"};
background-color: ${props =>props.type === 'filled' ? "black" : "transparent" };
color: ${props =>props.type === 'filled' && "white"};

`;
const TopTexts =styled.div`

`;

const TopText =styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom =styled.div`
display: flex;
justify-content: space-between;
`;

const Info =styled.div`
    flex: 3;
`;

const Product =styled.div`

`;

const ProductDetail =styled.div`

`;

const PriceDetails =styled.div`

`;
const Image =styled.div`

`;
const Details =styled.div`

`;

const ProductName =styled.div`

`;
const ProductId =styled.div`

`;
const ProductColor =styled.div`

`;
const ProductSize =styled.div`

`;
const Summary =styled.div`
flex: 1;
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>COUNTINUE SHOPPIND</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Whishlist(0)</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                <ProductDetail>
                    <Image src=""/>
                    <Details>
                        <ProductName><b>Product:</b>JUMSUIT DENIM </ProductName>
                        <ProductId><b>ID:</b>789564</ProductId>
                        <ProductColor />
                        <ProductSize>XS</ProductSize>
                    </Details>
                </ProductDetail>
                <PriceDetails>
                    price
                </PriceDetails>
                </Product>
            </Info>
            <Summary>summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container> 
  )
}

export default Cart

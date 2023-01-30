import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcements from "../../components/announcements/Announcements";
import Footer from "../../components/footer/Footer";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Container = styled.div`
  text-align:left;
`;

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;


const Image = styled.img`
  width: 200px;
  border-radius: 15px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;
const ProductSize = styled.span``;

const Hr = styled.hr`
  background-color: #dbd9d9;
  border: none;
  height: 1px;
  margin: 1.5rem;
`
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
    
`
const ProductAmount = styled.span`
  font-size: 24px;
`
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300px;
  
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryItem = styled.div`
`;

const SummaryTitle = styled.h1`
`;

const SummaryItemPrice = styled.span`
`;

const SummaryItemText = styled.span`
`;
const Button = styled.button`

`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>COUNTINUE SHOPPIG</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/564x/13/34/26/1334267ac996840ecfd2d653d0109878.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>CASUAL WALKING SHOES {" "}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 789564
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> XS</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                    <AddIcon/>
                    <ProductAmount>2</ProductAmount>
                    <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetails>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/564x/11/01/0e/11010e959049f295fa3aa58b5df4416e.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>CASUAL WALKING SHOES {" "}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 789564
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> XS</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                    <AddIcon/>
                    <ProductAmount>2</ProductAmount>
                    <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetails>
            </Product>

          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText type='total'>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>

            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

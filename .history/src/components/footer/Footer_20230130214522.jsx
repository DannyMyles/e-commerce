import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from "styled-components";
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {mobile } from '../../responsive'
const Container = styled.div`
  display: flex;
  text-align:left;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column;
  padding: 20px;
  text-align: left;
  align-items: start;
`;
const Logo = styled.h1`
  font-size: 2rem;
  
`;
const Desc = styled.p`
  font-size: 1rem;
  margin: 20px 0;
`;
const SocialConatiner = styled.div`
  display: flex;
  align-items: center;
  margin-top: .4rem;

`;

const SocialIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:#e8e8e8;
    margin-right: .2rem;
    cursor: pointer;
    //passing background-color as props
    background-color: #${props=>props.color};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile( {textAlign: "center" } )}
`;
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom:30px;

  
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap:wrap;
  
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom:10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom:20px;
  display: flex;
  align-items: start;
  cursor: pointer;

`;
const Payment = styled.img`
width: 100%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DM.</Logo>
        <Desc>
          These t-shirts are a comfortable and durable alternative to standard
          cotton tees. It’s designed to be worn all day by the man in demand.
          This classic design will keep you looking presentable on the go with a
          gentle fabric for comfort all day.
        </Desc>
        <SocialConatiner>
            <SocialIcon color='3b5998'> <FacebookIcon/> </SocialIcon>
            <SocialIcon color='E60023'> <PinterestIcon/> </SocialIcon>
            <SocialIcon color='405DE6'> <InstagramIcon/> </SocialIcon>
            <SocialIcon color='00acee'> <TwitterIcon/> </SocialIcon>
        </SocialConatiner>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contacts</Title>
        <ContactItem>
        <PlaceIcon  style={{marginRight:"10px"}}/> 001 3746 Nairobi Kenya
        </ContactItem>
        <ContactItem>
         <CallIcon style={{marginRight:"10px"}}/> +254 700254267
        </ContactItem>
        <ContactItem>
       <EmailOutlinedIcon style={{marginRight:"10px"}}/> contact@dm.dev
        </ContactItem>
        <Payment src="https://www.pngitem.com/pimgs/m/179-1792550_payment-methods-images-png-transparent-png.png"/>
      </Right>
    </Container>
  );
};

export default Footer;

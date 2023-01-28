import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    //animation
    opacity: 0;
    transition:all 0.5 ease;
    //animation
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
`;
const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid lightgray;
    border-radius:.7rem;
    background-color: #f5fbfd;
    position: relative;

    //Adding hover effect on the info container
     &:hover ${Info}{
        opacity: 1;
     }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:white;
    position:absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;


const Icon = styled.div`
    width:40px;
    height:40px;
    margin: 10px;
    border-radius:50%;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;

    //animation
    transition: all 0.5s ease ;

    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1)
    }
`;

const Product = ({ popular }) => {
  return (
    <Container>
      <Circle />
      <Image src={popular.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../../responsive'
const Container = styled.div`
  height: 60px;
  padding:1rem;
  ${mobile({
    backgroundColor: #fff
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//left container
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Input = styled.input`
  border: none;
  padding: 0.5rem;
  &:focus {
        outline: none;
    }
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`;
const SearchContaner = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 1rem;
  border-radius: 20px;
`;
//center container
const Center = styled.div`
  flex: 1;
  text-align: center;
  color: linear-gradient(to bottom, #66ffff 2%, #3399ff 100%);
`;
const Logo = styled.span`
  font-weight: bolder;
  font-size: 30px;
`;
//Right container
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContaner>
            <Input placeholder="Search by title"/>
            <SearchIcon  style={{color:'gray'   }}/>
          </SearchContaner>
        </Left>

        <Center>
          <Logo>DM.</Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar

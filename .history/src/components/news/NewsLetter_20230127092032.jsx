import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';
const  Container = styled.div`
    height:50vh;
    background-color: #fcf5f5;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top
`
const  Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const  Description = styled.p`
    font-size: 24px;
    font-weight: 300px;
    margin-bottom: 20px;
`
const  InputConatiner = styled.div`
    width: 50%;
    height: 40px;
    background-color:#fff;
    display: flex;
    justify-content: space-between;
    border:1px solid #d8d8d8;
    border-radius: 1rem;
`
const  Input = styled.input`
    border:none;
    flex: 7;
    padding-left: 20px;
    &:focus{
        outline:1px solid #a2a2a2;  
    }
`
const  Button = styled.button`
    flex:1;
    background-color:teal;
    border:none;
    color:white;
`
const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourite products</Description>
        <InputConatiner>
            <Input placeholder="Your email" />
            <Button>
                <SendIcon />
            </Button>
        </InputConatiner>
    </Container>
  )
}

export default NewsLetter
import styled from "styled-components";

const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.pinimg.com/564x/98/e3/dd/98e3dd604f1e834d175fac86184237b7.jpg")
      center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 0.5rem;
  border: 1px solid #cdcdcd;
  outline: 1px solid #dbdbdb;
`;

const Wrapper = styled.div`
  width: 25%;
  background-color: #fbfbfb;
  padding: 20px;
  border-radius: 0.5rem;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  border-radius: 1rem;
  padding: 15px 20px;
  background-color: teal;
  color: #ffffff;
  cursor: pointer;
`;

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
`;

const Login = () => {
  return (
    <Conatiner>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>DON'T YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Conatiner>
  )
}

export default Login

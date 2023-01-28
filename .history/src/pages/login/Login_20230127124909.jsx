import styled from "styled-components";

const Container = styled.div`

`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 0.5rem;
  border: 1px solid #cdcdcd;
  outline: 1px solid #dbdbdb;
`;
const Conatiner = styled.div`

`
const Wrapper = styled.div`
  width: 40%;
  background-color: #fbfbfb;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

import styled from "styled-components";

const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.pinimg.com/originals/ac/19/43/ac19434a09dea61c3166fa4879282aa2.jpg")
      center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 30%;
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
const Input = styled.input`
  flex: 1;
  min-height: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 0.5rem;
  border: 1px solid #cdcdcd;
  outline: 1px solid #dbdbdb;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 25%;
  border: none;
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: teal;
  color: #ffffff;
  line-height: 1px;
  cursor: pointer;
`;
const Register = () => {
  return (
    <Conatiner>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Agreement>
            By creating an account, I consent to the process of my personal data
            in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Conatiner>
  );
};

export default Register;

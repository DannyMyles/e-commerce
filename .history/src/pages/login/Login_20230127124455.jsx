import styled from "styled-components";

const Conatiner = styled.div`

`

const Login = () => {
  return (
    <Conatiner>
      <Wrapper>
        <Title>SO</Title>
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
  )
}

export default Login

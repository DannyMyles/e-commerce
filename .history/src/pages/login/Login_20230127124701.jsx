import styled from "styled-components";

const Conatiner = styled.div`

`

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
        </Form>
      </Wrapper>
    </Conatiner>
  )
}

export default Login

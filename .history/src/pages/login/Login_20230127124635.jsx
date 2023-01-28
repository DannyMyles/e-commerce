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
          <Link>FOG</Link>
        </Form>
      </Wrapper>
    </Conatiner>
  )
}

export default Login

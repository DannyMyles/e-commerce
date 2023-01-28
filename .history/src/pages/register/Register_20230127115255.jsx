import styled from "styled-components";

const Conatiner = styled.div`

`
const Wrapper = styled.div`

`
const Title = styled.h1`

`
const Form = styled.h1`

`
const Input = styled.h1`

`
const Register = () => {
  return (
    <Conatiner>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder='First Name'/>
            <Input placeholder='Last Name'/>
            <Input placeholder='Username'/>
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
            <Input placeholder='Confirm password'/>
            <Agreement>By creating an account, I consent to </Agreement>
        </Form>
      </Wrapper>
    </Conatiner>
  )
}

export default Register

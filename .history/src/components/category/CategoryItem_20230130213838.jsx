import styled from "styled-components";
import {mobile } from '../../responsive'
const Container =styled.div`
    margin: 3px;
    height: 70vh;
    position: relative;
    border:1px solid lightgray;
    border-radius:.7rem;
    background-color: #f5fbfd;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({width:50%, he})}
`
const Info = styled.p`
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100%;
    
`
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`
const Button = styled.button`
    padding: 1rem;
    border-radius:.5rem 1.2rem;
    border:none;
    background-color:teal;
    cursor: pointer;
    font-weight:600px;
`
const CategoryItem = ({category}) => {
  return (
    <Container>
    <Image  src={category.img}/>
    <Info>
        <Title>{category.title}</Title>
        <Button>SHOP NOW</Button>
    </Info>
</Container>
  )
}

export default CategoryItem

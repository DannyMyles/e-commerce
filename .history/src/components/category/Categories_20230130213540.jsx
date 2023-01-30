import styled from "styled-components";
import { categories } from "../../data/data";
import CategoryItem from './CategoryItem.jsx';
import {mobile } from '../../responsive'

const Container  = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`
const Categories = () => {
  return (
    <Container>
        {
            categories.map((category)=>(
                <CategoryItem category={category} key={category.id}/>
            ))
        }
    </Container>
  )
}

export default Categories

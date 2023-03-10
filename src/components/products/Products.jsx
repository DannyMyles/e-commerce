import styled from "styled-components"
import { popularProducts } from "../../data/data"
import Product from "./Product"

const Container =styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
      {
        popularProducts.map(popular =>(
            <Product  popular={popular} key={popular.id}/>
        ))
      }
    </Container>
  )
}

export default Products

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.1rem;
    font-weight: 500px;
    height: 30px;
    background-color: teal;
    color: white;
    m
  `;
const Announcements = () => {
  return (
    <Container>Super Deal! Free shipping on Orders over $50</Container>
  )
}

export default Announcements

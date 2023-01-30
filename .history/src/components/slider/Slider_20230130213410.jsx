import styled from "styled-components";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import { slideItems } from "../../data/data";
import { useState } from 'react';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  margin-top: 1rem;
  overflow: hidden;
  justify-content
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  background-color: #f2f2f1;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100 }vw);
  transition: all 1.5s ease;
`;
const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImageConatiner = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 1rem;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 2rem;
`;
const Title = styled.h1`
  font-size: 5rem;
`;
const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 10px;
  letter-spacing: 0.1rem;
`;
const Button = styled.button`
  border-radius:.9rem 1.6rem;
  padding: 1rem;
  border: none;
  cursor: pointer;
  background-color: teal;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if( direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    
  };
  return (
    <Container>
    <Arrow direction="left">
      <ArrowLeftOutlinedIcon direction="left" onClick={() => handleClick("left")} />
    </Arrow>
    <Wrapper slideIndex={slideIndex} >
      {slideItems.map((slideItem) => (
        <SlideContainer bg={slideItem.bg} key={slideIndex.id}>
          <ImageConatiner>
            <Image src={slideItem.img} />
          </ImageConatiner>
          <InfoContainer>
            <Title>{slideItem.title}</Title>
            <Description>
              {slideItem.desc}
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </SlideContainer>
      ))}
    </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("right")}>
      <ArrowRightOutlinedIcon />
    </Arrow>
  </Container>
  )
}

export default Slider

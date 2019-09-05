import * as React from "react";
import assets from "./assets";;
import styled from "styled-components";

const pages: number[] = [1, 2, 3, 4];

interface IProps {
  pageHighlighted: number;
}

const Pagination = (props: IProps) => {
  return (
    <Wrapper>
      <LeftArrow src={assets.LeftArrowSVG} alt='left arrow' />
      <NumbersBox>
        {pages.map(page => (
          <Number isHighlighted={page === props.pageHighlighted}>{page}</Number>
        ))}
      </NumbersBox>
      <RightArrow src={assets.RightArrowSVG} alt='right arrow' />
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 147px;
`;

const LeftArrow = styled.img``;

const NumbersBox = styled.div`
  width: 72px;
  display: flex;
  justify-content: space-between;
`;

const Number = styled.span`
  font-size: 12px;
  padding: 0px 5px;
  background-color: ${p => (p.isHighlighted ? "#FFF" : "transparent")};
  border: 2px solid ${p => (p.isHighlighted ? "#D6D8DA" : "transparent")};
  cursor: pointer;
`;

const RightArrow = styled.img``;

import * as React from "react";
import assets from "./assets";
import IssueCard from "./IssueCard/IssueCard";
import IssueCardsMock from "./IssueCard/IssueCardsMock";
import Pagination from "./Pagination/Pagination";
import styled from "styled-components";
import Button from "../../components/Button/Button";

const Details = () => {
  return (
    <StyledMain>
      <BackButton>
        <LeftArrow src={assets.LeftArrowSVG} alt='left arrow' />
        go back
      </BackButton>

      <IssueCardsList>
        {IssueCardsMock.map((mock, idx) => (
          <IssueCard key={idx} mock={mock} />
        ))}
      </IssueCardsList>

      <HorizontalLine />
      <Pagination pageHighlighted={2} />
    </StyledMain>
  );
};

export default Details;

const StyledMain = styled.main`
  position: relative;
  height: 804px;
`;

const BackButton = styled(Button)`
  position: absolute;
  top: 25px;
  left: 27px;
  background: transparent;
  text-transform: uppercase;
  color: #666;
`;

const LeftArrow = styled.img`
  width: 7.41px;
  margin-right: 7.59px;
`;

const IssueCardsList = styled.div`
  position: absolute;
  top: 65px;
`;

const HorizontalLine = styled.hr`
  position: absolute;
  width: 974px;
  text-align: center;
  bottom: 67px;
  margin: 0 auto;
  right: 0;
  left: 0;
  border-color: #ddd;
  border-style: solid;
`;

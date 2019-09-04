import * as React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";
import styled from "styled-components";

const App: React.FC = () => {
  return (
    <StyledApp>
      <Router>
        <Header />
        <Route exact path='/' render={() => <Redirect to='/details' />} />
        <Route exact path='/details' component={Details} />
        <Route render={() => <Redirect to='/details' />} />
      </Router>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  position: absolute;
  width: 1024px;
  height: 904px;
  left: 208px;
  top: 70px;
  background: #f4f5f9;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

export const Hyperlink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

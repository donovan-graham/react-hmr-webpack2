import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import './global-style';
import Nav from 'components/navigation';

/* styled */
const Body = styled.div`
  width: 600px;
  margin: 0 auto;
  border: 2px solid #333;
`;

const Content = styled.div`
  text-size-adjust: none;
  font-family: helvetica, arial, sans-serif;
  line-height: 200%;
  padding: 6px 20px 30px;
  background-color: #efefef;
  color: #444;
`;

/* component */
const Layout = ({ children }) => (
  <Body>
    <Nav>
      <ul>
        <li><Nav.Link to="/">Home</Nav.Link></li>
        <li><Nav.Link to="/about">About</Nav.Link></li>
      </ul>
    </Nav>
    <Content>
      {children}
    </Content>
  </Body>
);

/* propTypes */
Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;

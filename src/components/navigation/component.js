import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

/* styled */
const Nav = styled.nav`
  ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
  }
  ul li {
    float: left
  }
`;

Nav.Link = styled(Link)`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #4CAF50;
  }
`;

/* component */

export default Nav;

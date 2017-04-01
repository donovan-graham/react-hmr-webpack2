import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color:#44c767;
	border-radius:4px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
  margin: 5px 10px 5px 0;

  &:hover {
	   background-color: red;
  }

  &:active {
  	position:relative;
  	top:1px;
  }
`;

export default Button;

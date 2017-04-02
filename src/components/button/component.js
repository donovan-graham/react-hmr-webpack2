import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: ${props => props.primary ? '#44c767' : 'deepskyblue'};
	border-radius: 4px;
	border: 1px solid ${props => props.primary ? '#18ab29' : 'dodgerblue'};;
	color: #ffffff;
	cursor: pointer;
	display: inline-block;
	font-family: Arial;
	font-size: ${props => props.large ? '40px' : '17px'};
	margin: 5px 10px 5px 0;
	padding: 16px 31px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #2f6627;

  &:hover {
		background-color: ${props => props.primary ? '#18ab29' : 'dodgerblue'};
  }

  &:active {
  	position: relative;
  	top: 1px;
  }
`;

export default Button;

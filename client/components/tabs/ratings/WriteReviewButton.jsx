import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block !important;
  cursor: pointer !important;
  float: right;
  width: auto !important;
  white-space: nowrap !important;
  color: #fff !important;
  font-size: 12px !important;
  line-height: 22px !important;
  font-family: "Verdana", sans-serif !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-variant: normal !important;
  text-decoration: none !important;
  text-transform: none !important;
  text-shadow: none !important;
  background-color: #0e7fd5 !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
  padding-top: 0.5em !important;
  padding-right: 1em !important;
  padding-bottom: 0.5em !important;
  padding-left: 1em !important;
  border-radius: 3px 3px 3px 3px !important;
  border-top-width: 0 !important;
  border-top-style: none !important;
  border-top-color: transparent !important;
  border-right-width: 0 !important;
  border-right-style: none !important;
  border-right-color: transparent !important;
  border-bottom-width: 0 !important;
  border-bottom-style: none !important;
  border-bottom-color: transparent !important;
  border-left-width: 0 !important;
  border-left-style: none !important;
  border-left-color: transparent !important;
  margin-right: 70px;
`;

const WriteReviewButton = () => {
    return (<Button>Write a review</Button>);
};

export default WriteReviewButton;
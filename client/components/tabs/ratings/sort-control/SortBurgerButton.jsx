import React from 'react';
import styled from 'styled-components';

const FilterButton = styled.button`
  margin: 4px 10px !important;
  display: block !important;
  height: 32px !important;
  width: 36px !important;
  line-height: 14px !important;
  font-size: 14px !important;
  white-space: nowrap !important;
  float: right !important;
  font-family: Arial, Helvetica, "Bitstream Vera", sans-serif !important;
  background-color: #ededed !important;
  color: #333 !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-variant: normal !important;
  text-decoration: none !important;
  text-transform: none !important;
  text-shadow: none !important;
  background-image: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.1) 0,
    rgba(255, 255, 255, 0) 100%
  ) !important;
  cursor: pointer !important;
  padding: 0 !important;
  border: 0 !important;
  vertical-align: baseline !important;
  text-align: center !important;
  box-sizing: border-box !important;
`;

const FilterButtonSpan = styled.div`
  display: inline-block !important;
  font-size: 24px !important;
  line-height: 24px !important;
  color: #000 !important;
`;

const SortBurgerButton = () => {
    return <FilterButton>
        <FilterButtonSpan>≡</FilterButtonSpan>
      </FilterButton>;
}

export default SortBurgerButton;
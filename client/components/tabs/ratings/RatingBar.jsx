import React from 'react';
import styled from 'styled-components';


const RowContainer = styled.tr`
    display: table-row !important;
`;


const RatingBarCell = styled.td`
  width: 100% !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
  padding-bottom: 3px !important;
  padding-top: 5px !important;
  display: table-cell !important;
`;

const Cell = styled.td`
  display: table-cell !important;
  letter-spacing: 0.2em !important;
  padding-left: 5px !important;
  padding-bottom: 3px !important;
  text-align: right !important;
  font-size: 11px !important;
  color: #333 !important;
  font-weight: 400 !important;
  white-space: nowrap !important;
  padding-top: 5px !important;
`;

const Glyph = styled.span`
  white-space: nowrap !important;
`;

const RatingBarBackground = styled.span`
  height: 10px !important;
  display: block !important;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.25) !important;
  border-radius: 2px !important;
  position: relative !important;
  background-color: #fff !important;
`;

const RatingBarFill = styled.span`
  width: 80% !important;
  height: 10px !important;
  display: block !important;
  border-radius: 2px !important;
  background-color: #fc0 !important;
  background-image: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.3) 0,
    rgba(255, 255, 255, 0) 100%
  ) !important;
`;

const RatingBar = (props) => {
    return <RowContainer role="presentation">
        <Cell>
            {props.stars}<Glyph>★</Glyph>
        </Cell>
        <RatingBarCell>
          <RatingBarBackground>
            <RatingBarFill></RatingBarFill>
          </RatingBarBackground>
        </RatingBarCell>
        <Cell>
            4
        </Cell>
      </RowContainer>;
}

export default RatingBar;
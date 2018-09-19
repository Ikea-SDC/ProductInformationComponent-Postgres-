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
  width: ${props => props.rating} !important;
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



class RatingBar extends React.Component {
  constructor(props) {
    super(props);

  }

  renderRating() {
    if (this.props.stars === 5) {
      return <RatingBarFill rating="100%"></RatingBarFill>
    } else if (this.props.stars === 4) {
      return <RatingBarFill rating="80%"></RatingBarFill>
    } else if (this.props.stars === 3) {
      return <RatingBarFill rating="60%"></RatingBarFill>
    } else if (this.props.stars === 2) {
      return <RatingBarFill rating="40%"></RatingBarFill>
    } else if (this.props.stars === 1) {
      return <RatingBarFill rating="20%"></RatingBarFill>
    }
}

render() {
  return <RowContainer role="presentation">
    <Cell>
      {this.props.rating}<Glyph>★</Glyph>
    </Cell>
    <RatingBarCell>
      <RatingBarBackground>
        <RatingBarFill rating={((this.props.count / this.props.total) * 100).toString() + "%"}></RatingBarFill>
      </RatingBarBackground>
    </RatingBarCell>
    <Cell>
      {this.props.count}
    </Cell>
  </RowContainer>;
}


}


export default RatingBar;
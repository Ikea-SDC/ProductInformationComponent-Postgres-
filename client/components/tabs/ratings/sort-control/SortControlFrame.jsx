import React from 'react';
import styled from 'styled-components';
import SortBurgerButton from './SortBurgerButton.jsx';
import SortDropFilter from './SortDropFilter.jsx';
import SortStarFilter from './SortStarFilter.jsx';


const ReviewCount = styled.div`
  text-transform: inherit !important;
  position: relative !important;
  float: left !important;
  padding: 10px !important;
  margin-right: auto !important;
  display: block !important;
`;

const ReviewCountSpan = styled.span`
  color: #333 !important;
  display: inline-block !important;
  vertical-align: middle !important;
  white-space: nowrap !important;
`;

const SortControlContainer = styled.div`
  position: relative !important;
  display: flex !important;
  flex-wrap: wrap !important;
  -webkit-box-align: center !important;
  align-items: center !important;
  zoom: 1 !important;
  color: #333 !important;
  font-size: 11px !important;
  font-family: "Verdana", sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-variant: normal !important;
  text-decoration: none !important;
  text-transform: none !important;
  padding-top: 0 !important;
  padding-right: 0 !important;
  padding-bottom: 0 !important;
  padding-left: 0 !important;
  margin-top: 0 !important;
  margin-right: 10px !important;
  margin-left: 10px !important;
  background: transparent !important;
  line-height: 18px !important;
  margin-bottom: 10px !important;
`;


class SortControlFrame extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (<SortControlContainer>
            <ReviewCount>
                <ReviewCountSpan>1-5 of 5 Reviews</ReviewCountSpan>
            </ReviewCount>
            <SortDropFilter />
            <SortBurgerButton />
        </SortControlContainer>);
    }
}

export default SortControlFrame;
import React from 'react';
import styled from 'styled-components';
import RatingBar from "./RatingBar.jsx";

const RatingTable = styled.table`
  margin: 10px 10px 20px !important;
  width: 60% !important;
  min-width: 200px !important;
  display: block !important;
`;

const TableBody = styled.tbody`
  display: table-row-group !important;
`;

const Caption = styled.caption`
  font-family: "Verdana", sans-serif !important;
  font-size: 11px !important;
  color: #333 !important;
  font-weight: 400 !important;
  margin-bottom: 5px !important;
  text-align: left !important;
  display: block !important;
`;




const RatingSnapshot = (props) => {
    return <RatingTable role="presentation">
        <Caption>Select a row below to filter reviews.</Caption>
        <TableBody>
          <RatingBar rating={5} total={props.reviews.length} count={props.reviews.filter((review) => {if(review.rating === 5){return review}}).length}/>
        <RatingBar rating={4} total={props.reviews.length} count={props.reviews.filter((review) => { if (review.rating === 4) { return review } }).length}/>
        <RatingBar rating={3} total={props.reviews.length} count={props.reviews.filter((review) => { if (review.rating === 3) { return review } }).length}/>
        <RatingBar rating={2} total={props.reviews.length} count={props.reviews.filter((review) => { if (review.rating === 2) { return review } }).length}/>
        <RatingBar rating={1} total={props.reviews.length} count={props.reviews.filter((review) => { if (review.rating === 1) { return review } }).length}/>
        </TableBody>
      </RatingTable>;
}

export default RatingSnapshot;
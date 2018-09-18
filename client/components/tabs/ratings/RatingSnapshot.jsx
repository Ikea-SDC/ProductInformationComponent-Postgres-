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




const RatingSnapshot = () => {
    return <RatingTable role="presentation">
        <Caption>Select a row below to filter reviews.</Caption>
        <TableBody>
          <RatingBar stars={5}/>
          <RatingBar stars={4}/>
          <RatingBar stars={3}/>
          <RatingBar stars={2}/>
          <RatingBar stars={1}/>
        </TableBody>
      </RatingTable>;
}

export default RatingSnapshot;
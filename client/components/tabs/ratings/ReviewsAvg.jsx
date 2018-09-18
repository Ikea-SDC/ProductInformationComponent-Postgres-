import React from 'react';
import styled from 'styled-components';
import AvgBar from "./AvgBar.jsx";

const Table = styled.table`
  margin: 10px 10px 20px !important;
  display: table !important;
`;

const TableBody = styled.tbody`
  display: table-row-group !important;
`;

const Row = styled.tr`
  display: table-row !important;
`;

const BarCell = styled.td`
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  width: 180px !important;
  padding: 0 10px !important;
  vertical-align: top !important;
  display: table-cell !important;
`;

const BarSpan = styled.span`
  display: block !important;
  position: relative !important;
  float: left !important;
  width: 80% !important;
  margin-top: 8px !important;
`;


const BarList = styled.ul`
  height: 8px !important;
  border-radius: 2px !important;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.25) !important;
  position: relative !important;
  width: 100% !important;
  z-index: 1 !important;
  background-color: #fff !important;
  background-image: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.3) 0,
    rgba(255, 255, 255, 0) 100%
  ) !important;
  padding: 0 !important;
  margin: 0 !important;
  list-style-type: none !important;
  display: block !important;
`;

const Bar = styled.li`
  width: 20% !important;
  border-radius: 2px 0 0 2px !important;
  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.5),
    inset -1px 0 0 rgba(0, 0, 0, 0.25) !important;
  float: left !important;
  height: 8px !important;
  position: relative !important;
  z-index: 3 !important;
  display: list-item !important;
  min-height: auto !important;
  min-width: auto !important;
`;

const BarFill = styled.li`
  width: 80% !important;
  display: block !important;
  height: 8px !important;
  border-radius: 2px !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  z-index: 2 !important;
  background-color: #fc0 !important;
  background-image: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.3) 0,
    rgba(255, 255, 255, 0) 100%
  ) !important;
  min-height: auto!important;
  min-width: auto!important;
`;

const ScoreSpan = styled.span`
  display: table-cell !important;
  float: right !important;
  width: 5% !important;
  margin-top: 5px !important;
  white-space: nowrap !important;
  font-family: "Verdana", sans-serif !important;
  font-size: 11px !important;
  color: #333 !important;
  font-weight: 400 !important;
  text-align: center !important;
  padding-left: 10px !important;
`;

const DescriptionCell = styled.td`
  padding-top: 5px !important;
  padding-bottom: 15px !important;
  font-family: "Verdana", sans-serif !important;
  font-size: 11px !important;
  color: #333 !important;
  font-weight: 400 !important;
  text-align: center !important;
  text-align: left !important;
  padding-right: 0px !important;
  float: none !important;
  vertical-align: top !important;
  display: table-cell !important;
`;

const StarsContainer = styled.span`
  display: block !important;
  position: relative !important;
  float: left !important;
  line-height: 0px;
`;

const StarsBlock = styled.span`
  margin-right: 0.3em !important;
  vertical-align: middle !important;
  -webkit-font-smoothing: antialiased !important;
  overflow: hidden !important;
  font-family: "times new roman" !important;
  text-decoration: none !important;
  word-wrap: normal !important;
`;

const StarsBackground = styled.div`
  border-bottom-style: none !important;
  position: relative !important;
  overflow: hidden !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  vertical-align: middle !important;
  font-size: 24px !important;
  color: #eee !important;
  line-height: 1em !important;
  height: 1em !important;
`;

const StarsFill = styled.span`
  width: 77% !important;
  position: relative !important;
  float: left !important;
  white-space: nowrap !important;
  display: block !important;
  overflow: hidden !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  font-size: 24px !important;
  color: #fc0 !important;
  margin-top: -1em !important;
  line-height: 1em !important;
  height: 1em !important;
`;


const ReviewsAvg = () => {
    return <Table>
        <TableBody>
          <Row>
            <DescriptionCell>Overall</DescriptionCell>
            <BarCell>
              <StarsContainer>
                <StarsBlock>
                <StarsBackground>★★★★★</StarsBackground>
                  <StarsFill>★★★★★</StarsFill>
                </StarsBlock>
              </StarsContainer>
              <ScoreSpan>4.8</ScoreSpan>
            </BarCell>
          </Row>
          <Row>
            <DescriptionCell>Value for money</DescriptionCell>
            <BarCell>
              <BarSpan>
                <BarList>
                  <Bar />
                  <Bar />
                  <Bar />
                  <Bar />
                  <Bar />
                  <BarFill />
                </BarList>
              </BarSpan>
              <ScoreSpan>4.8</ScoreSpan>
            </BarCell>
          </Row>
          <Row>
            <DescriptionCell>Product quality</DescriptionCell>
            <BarCell>
              <BarSpan>
                <BarList>
                  <Bar />
                  <Bar />
                  <Bar />
                  <Bar />
                  <Bar />
                  <BarFill />
                </BarList>
              </BarSpan>
              <ScoreSpan>4.8</ScoreSpan>
            </BarCell>
          </Row>
          <Row>
            <DescriptionCell>Appearance</DescriptionCell>
            <BarCell>
              <BarSpan>
                <BarList>
                  <Bar />
                  <Bar />
                  <Bar />
                  <Bar />
                  <Bar />
                  <BarFill />
                </BarList>
              </BarSpan>
              <ScoreSpan>4.8</ScoreSpan>
            </BarCell>
          </Row>
          <Row>
            <DescriptionCell>Ease of assembly/installation</DescriptionCell>
            <BarCell>
              <BarSpan>
                <BarList>
                  <Bar />
                  <Bar />
                  <Bar />
                  <Bar />
                  <Bar />
                  <BarFill />
                </BarList>
              </BarSpan>
              <ScoreSpan>4.8</ScoreSpan>
            </BarCell>
          </Row>
          <Row>
            <DescriptionCell>Works as expected</DescriptionCell>
            <BarCell>
              <BarSpan>
                <BarList>
                  <Bar />
                  <Bar />
                  <Bar />
                  <Bar />
                  <Bar />
                  <BarFill />
                </BarList>
              </BarSpan>
              <ScoreSpan>4.8</ScoreSpan>
            </BarCell>
          </Row>
        </TableBody>
      </Table>;
}

export default ReviewsAvg;
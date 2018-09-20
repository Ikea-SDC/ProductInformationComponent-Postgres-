import React from 'react';
import styled from 'styled-components';
import ReviewBody from './ReviewBody.jsx';
import ReviewFilter from './ReviewFilter.jsx';
import ReviewHelpful from './ReviewHelpful.jsx';
import ReviewsAvg from './ReviewsAvg.jsx';
import RatingSnapshot from './RatingSnapshot.jsx';
import WriteReviewButton from './WriteReviewButton.jsx';
import SortControlFrame from './sort-control/SortControlFrame.jsx';

const Container = styled.div`
  display: block !important;
  width: 1060px;
  padding-right: 20px !important;
  padding: 20px; 15px;
  text-align: left;
  overflow: hidden;
`;

const Headline = styled.div`
  float: left !important;
  color: #333 !important;
  font-size: 18px !important;
  font-family: "Verdana", sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 39px !important;
  content: "" !important;
`;

const RatingSnapshotHeadline = styled.div`
  width: auto !important;
  float: none !important;
  color: #333 !important;
  font-size: 11px !important;
  line-height: 18px !important;
  padding-top: 37px !important;
  padding-right: 10px !important;
  padding-bottom: 10px !important;
  padding-left: 10px !important;
  clear: left !important;
`;

const Table = styled.table`
  width: 100% !important;
  display: table !important;
`;

const TableBody = styled.tbody`
  display: table-row-group !important;
`;

const TableRow = styled.tr`
  display: table-row !important;
`;

const SnapshotTableCell = styled.td`
  width: 50% !important;
  vertical-align: top !important;
  display: table-cell !important;
  margin: 0 !important;
  position: relative !important;
`;

const AvgTableCell = styled.td`
  width: 50% !important;
  margin: 0 !important;
  position: relative !important;
  vertical-align: top !important;
  border: 1px solid transparent !important;
  display: table-cell !important;
`;

const SnapshotCellContainer = styled.div`
  width: 100% !important;
  margin: 0 !important;
  float: left !important;
  position: relative !important;
  display: block !important;
`;

const Header = styled.div`
    display: block;
    width: 100%
    height: auto;
`;



class RatingsBodyFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<div>
            <Container>
                    <Headline>Reviews</Headline>
                    <WriteReviewButton />
                <Table>
                    <TableBody>
                        <TableRow>
                            <SnapshotTableCell>
                                <SnapshotCellContainer>
                                    <RatingSnapshotHeadline>Rating Snapshot</RatingSnapshotHeadline>
                                    <RatingSnapshot reviews={this.props.reviews}/>
                                </SnapshotCellContainer>
                            </SnapshotTableCell>
                            <AvgTableCell>
                                    <RatingSnapshotHeadline>Average Customer Ratings</RatingSnapshotHeadline>
                                    <ReviewsAvg reviews={this.props.reviews}/>
                            </AvgTableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <SortControlFrame />
                {this.props.reviews.map((review, i) => {
                    return <ReviewBody key={i} review={review}/>
                })}
            </Container>
        </div>);
    }
}

export default RatingsBodyFrame;
import React from 'react';
import styled from 'styled-components';
import ReviewBody from './ReviewBody.jsx';
import ReviewFilter from './ReviewFilter.jsx';
import ReviewHelpful from './ReviewHelpful.jsx';
import ReviewsAvg from './ReviewsAvg.jsx';
import RatingSnapshot from './RatingSnapshot.jsx';
import RatingBar from './RatingBar.jsx';

class RatingsBodyFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<div>
            <h1>Ratings body frame</h1>
            <ReviewBody />
            <ReviewFilter />
            <ReviewHelpful />
            <ReviewsAvg />
            <RatingSnapshot />
            <RatingBar />
        </div>);
    }
}

export default RatingsBodyFrame;
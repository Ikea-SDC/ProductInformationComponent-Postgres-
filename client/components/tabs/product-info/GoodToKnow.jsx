import React from 'react';
import styled from 'styled-components';


const GoodToKnowItem = styled.div`
  font-size: 13px;
  line-height: 18px;
`;

const GoodToKnow = (props) => {

    return (props.goodToKnow.map(fact => {
            return <div>
                <GoodToKnowItem>{fact}</GoodToKnowItem>
                <br />
            </div>;
        }));
}

export default GoodToKnow;
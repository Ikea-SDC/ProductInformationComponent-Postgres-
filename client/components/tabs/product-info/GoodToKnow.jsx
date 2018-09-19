import React from 'react';
import styled from 'styled-components';


const GoodToKnowItem = styled.div`
  font-size: 13px;
  line-height: 18px;
`;

const GoodToKnow = (props) => {

    return (props.goodToKnow.map((fact, i) => {
            return <div key={i}>
                <GoodToKnowItem>{fact}</GoodToKnowItem>
                <br />
            </div>;
        }));
}

export default GoodToKnow;
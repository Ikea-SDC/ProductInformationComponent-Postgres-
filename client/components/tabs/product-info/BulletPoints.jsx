import React from 'react';
import styled from 'styled-components';

const KeyFeatures = styled.div`
  display: block;
  margin-right: 0.208em;
  margin-left: 6px !important;
`;

const KeyFeaturesUl = styled.ul`
  display:block;
  padding: 0 0 0 15px;
  margin: 0;
`;

const KeyFeaturesLi = styled.li`
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 10px !important;
`;

const BulletPoints = (props) => {

    return (<KeyFeatures>
        <KeyFeaturesUl>
            {props.bullets.map(bullet => {
                return <KeyFeaturesLi>{bullet}</KeyFeaturesLi>;
            })}
        </KeyFeaturesUl>
    </KeyFeatures>);
}

export default BulletPoints;
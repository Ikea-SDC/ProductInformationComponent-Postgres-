import React from 'react';
import styled from 'styled-components';
import BulletPoints from './BulletPoints.jsx';
import GoodToKnow from './GoodToKnow.jsx';
import CareInstructions from './CareInstructions.jsx';
import ProductDimensions from './ProductDimensions';

const ProductInfoLeft = styled.div`
  column-count: 2;
  width: 75%;
  column-gap: 20px;
  padding: 20px 15px;
  padding-right: 20px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  margin-bottom: 10px;
  max-height: 450px;
`;

const ProductInfoRight = styled.div`
  width: 24.5%;
  padding: 20px;
  font-size: 11px;
  line-height: 15px;
  background-color: #fafafa;
  box-sizing: border-box;
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const DetailsContainer = styled.div`
  margin-bottom: 10px !important;
  display: block;
  max-height: 450px;
`;

const Headline = styled.div`
  font-size: 13px;
  color: #333;
  margin-bottom: 4px;
  font-weight: bold;
`;

const ProductDimensionsHeadline = styled.div`
  font-size: 11px;
  color: #333;
  margin-bottom: 4px;
  font-weight: bold;
  line-height: 15px;
`;


const ProductInfoBodyFrame = (props) => {
    return <div>
        <ProductInfoLeft>
          <BulletPoints bullets={props.bullets}/>
          <DetailsContainer>
              <Headline>Good to Know</Headline>
                <GoodToKnow goodToKnow={props.goodToKnow}/>
              <Headline>Care Instructions</Headline>
                <CareInstructions careInstructions={props.careInstructions}/>
          </DetailsContainer>
        </ProductInfoLeft>
        <ProductInfoRight>
          <ProductDimensionsHeadline>Product dimensions</ProductDimensionsHeadline>
          <ProductDimensions dimensions={props.dimensions}/>
        </ProductInfoRight>
      </div>;
}


export default ProductInfoBodyFrame;
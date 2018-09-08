import React from 'react';
import styled from 'styled-components';


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

const GoodToKnow = styled.div`
  margin-bottom: 10px !important;
  display:block;
`;

const Headline = styled.div`
  font-size: 13px;
  color: #333;
  margin-bottom: 4px;
  font-weight: bold;
`;

const DimensionsHeadline = styled.div`
  font-size: 11px;
  color: #333;
  margin-bottom: 4px;
  font-weight: bold;
  line-height: 15px;
`;

const GoodToKnowItem = styled.div`
  font-size: 13px;
  line-height: 18px;
`;

const ProductDimensions = styled.div`
  display: block;
  margin-top: 0 !important;
`;

const Designer = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
`;


const ProductInfoBodyFrame = (props) => {
    return <div>
        <ProductInfoLeft>
          <KeyFeatures>
            <KeyFeaturesUl>
              {props.keyFeatures.map(feature => {
                return <KeyFeaturesLi>{feature}</KeyFeaturesLi>;
              })}
            </KeyFeaturesUl>
          </KeyFeatures>
          <GoodToKnow>
            <Headline>Good to Know</Headline>
            {props.goodToKnow.map(fact => {
              return <div>
                  <GoodToKnowItem>{fact}</GoodToKnowItem>
                  <br />
                </div>;
            })}
            <Headline>Care Instructions</Headline>
            {props.careInstructions.map(instruction => {
              return <div>
                  <GoodToKnowItem>{instruction}</GoodToKnowItem>
                  <br />
                </div>;
            })}
          </GoodToKnow>
        </ProductInfoLeft>
        <ProductInfoRight>
          <DimensionsHeadline>Product dimensions</DimensionsHeadline>
          <ProductDimensions>
            Max.: {props.dimensions.max}
            <br />
            Shade width: {props.dimensions.width}
            <br />
            Diameter: {props.dimensions.cordLength}
            <br />
            Cord length:
            {props.dimensions.cordLength}
            <br />
            Power: {props.dimensions.power}
            <br />
            <br />
            <br />
          </ProductDimensions>
          <ProductDimensions>
            Max.: {props.dimensions.max}
            <br />
            Shade width: {props.dimensions.width}
            <br />
            Diameter: {props.dimensions.cordLength}
            <br />
            Cord length:
            {props.dimensions.cordLength}
            <br />
            Power: {props.dimensions.power}
            <br />
            <br />
            <br />
          </ProductDimensions>
          <ProductDimensions>
              This product requires assembly.
          </ProductDimensions>
          <Designer>
              <DimensionsHeadline>Designer:</DimensionsHeadline>
              <ProductDimensions>ME I MADE THIS</ProductDimensions>
          </Designer>
        </ProductInfoRight>
      </div>;
}


export default ProductInfoBodyFrame;
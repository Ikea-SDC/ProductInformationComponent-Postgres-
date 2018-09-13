import React from 'react';
import styled from 'styled-components';

const ProductDimensionsContainer = styled.div`
  display: block;
  margin-top: 0 !important;
`;

const Designer = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Headline = styled.div`
  font-size: 11px;
  color: #333;
  margin-bottom: 4px;
  font-weight: bold;
  line-height: 15px;
`;

const ProductDimensions = (props) => {
    
    return (<div>
    <ProductDimensionsContainer>
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
    </ProductDimensionsContainer>
        <ProductDimensionsContainer>
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
        </ProductDimensionsContainer>
        <ProductDimensionsContainer>
            This product requires assembly.
            <Designer>
                <Headline>Designer:</Headline>
                <ProductDimensionsContainer>ME I MADE THIS</ProductDimensionsContainer>
            </Designer>
          </ProductDimensionsContainer>
          </div>);
}

export default ProductDimensions;
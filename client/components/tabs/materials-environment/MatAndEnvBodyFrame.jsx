import React from 'react';
import styled from 'styled-components';
import PeoplePlanet from './PeoplePlanet.jsx';
import ProductDescription from './ProductDescription.jsx';

const Container = styled.div`
    display:block;
    padding-right: 20px!important;
    overflow: hidden;
    padding: 20px; 15px;
    width: 1025px;
    font-size: .6em;
    color: #333;
`;

const Headline = styled.div`
  font-size: 13px;
  color: #333;
  margin-bottom: 4px;
  font-weight: bold;
`;

const ProductDescriptionContainer = styled.div`
  padding-bottom: 0px;
  display: block;
  margin-bottom: 10px !important;
  float: right;
  width: 502.5px;
  font-size: 13px;
  line-height: 18px;
`;

const PeoplePlanetContainer = styled.div`
  font-size: 13px;
  line-height: 18px;
  display: block;
  float: left;
  width: 502.5px;
`;


class MaterialsAndEnvironment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<div>
            <Container>
                <PeoplePlanetContainer>
                    <Headline>Product description</Headline>
                    <ProductDescription materials={this.props.materials}/>
                </PeoplePlanetContainer>
                <ProductDescriptionContainer>
                    <Headline>People & Planet</Headline>
                    <PeoplePlanet />
                </ProductDescriptionContainer>
            </Container>
        </div>);
    }
}

export default MaterialsAndEnvironment;
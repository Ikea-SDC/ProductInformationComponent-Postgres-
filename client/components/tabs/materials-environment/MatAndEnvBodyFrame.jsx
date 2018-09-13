import React from 'react';
import styled from 'styled-components';
import PeoplePlanet from './PeoplePlanet.jsx';
import ProductDescription from './ProductDescription.jsx';

class MaterialsAndEnvironment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<div>
            <h1>Materials</h1>
            <PeoplePlanet />
            <ProductDescription />
        </div>);
    }
}

export default MaterialsAndEnvironment;
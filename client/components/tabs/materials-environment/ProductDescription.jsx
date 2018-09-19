import React from 'react';
import styled from 'styled-components';


class ProductDescription extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            Weight: {this.props.materials.weight.map((item, i) => {
                return item;
            }).join(', ')}
            <br />
            Shade: {this.props.materials.shade.map((item, i) => {
                return item
            }).join(', ')}
            <br />
            Tube: {this.props.materials.tube.map((item, i) => {
                return item
            }).join(', ')}
            <br />
          </div>;
    }
}

export default ProductDescription;

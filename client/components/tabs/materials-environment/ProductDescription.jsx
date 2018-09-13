import React from 'react';
import styled from 'styled-components';


class ProductDescription extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            Weight: Steel
            <br />
            Shade: Aluminum, Paint, Epoxy powder coating
            <br />
            Tube: Steel, Epoxy powder coating
            <br />
          </div>;
    }
}

export default ProductDescription;

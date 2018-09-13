import React from 'react';
import styled from 'styled-components';
import ArticleNumber from './ArticleNumber.jsx';
import Packages from './Packages.jsx';

class PackageDetailsBodyFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Package Details Body Frame</h1>
            <ArticleNumber />
            <Packages />
        </div>);
    }
}

export default PackageDetailsBodyFrame;
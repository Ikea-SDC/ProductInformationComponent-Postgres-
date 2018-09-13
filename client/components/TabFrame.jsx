import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabContainer = styled.div`
  width: 100%;
  font-size: 13px;
`;
const TabContainerUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

class TabFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    


    render() {
        return (<TabContainer>
            <TabContainerUl>
                <Tab title={this.props.title} id={this.props.id} handleClick={this.props.handleClick} activeTab={this.props.activeTab}/>
            </TabContainerUl>
        </TabContainer>);
    }
}

export default TabFrame;
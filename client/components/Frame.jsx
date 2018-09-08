import React from 'react';
import styled from 'styled-components';
import TabFrame from './TabFrame.jsx'
import Tab from './Tab.jsx';


const Container = styled.div`
  float: left;
  margin-top: 20px;
  padding-bottom: 1.04em;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px 15px;
  width: 1060px;
`;


class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabTitles: ['Product information', 'Materials and environment', 'Assembly & documents', 'Package details', 'Ratings'],
        }
    }

    //<Container> contains styling for the entire boxx
    //<TabContainer> contains styling for just the tab frame
    //<TabFrame> contains styling of the tab items
    //<Tab> contains styling for the tab and its title

    render() {
        return (
             <Container>
                {this.state.tabTitles.map(title => <TabFrame title={title}/>)}
            </Container>
        )
    }
}


export default Frame;
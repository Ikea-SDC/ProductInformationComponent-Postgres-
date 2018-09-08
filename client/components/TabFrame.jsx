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

const TabFrame = (props) => {
    return (<TabContainer>
        <TabContainerUl>
            <Tab title={props.title}/>
        </TabContainerUl>
    </TabContainer>);
}

export default TabFrame;
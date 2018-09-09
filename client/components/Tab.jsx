import React from 'react';
import styled from 'styled-components';



const TabContainer = styled.div`
  display: inline-block;
  float: left;
  box-sizing: border-box;
  font-size: 13px;
  color: #333;
  border-color: #ccc;
  border-style: solid;
  border-width: 1px 1px 1px;
  background-color: #f4f4f4;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
  margin-right: 0.5em;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  transition: background-color 0.2s, border-bottom-color 0.2s;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const TabFill = styled.div`
  border-bottom: 1px solid #bfbfbf;
  padding: 5px 15px;
  margin: 0;
  height: 32px;
  &:hover {
    background-color: #fff;
    transition: background-color 0.2s, border-bottom-color 0.2s;
    overflow: hidden;
    vertical-align: middle;
`;
const Clickable = styled.a`
  font-size: inherit;
  color: #333;
  text-decoration: none;
`;

const Tab = (props) => {
  
  return <TabContainer>
        <Clickable href={"#" + props.title}>
          <TabFill>
            {props.title}
          </TabFill>
        </Clickable>
      </TabContainer>;
}

export default Tab;
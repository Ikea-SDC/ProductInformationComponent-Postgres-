import React from 'react';
import styled from 'styled-components';

const SortByContainer = styled.div`
  float: right!important; 
  position: relative!important;
  display: block!important;
`;

const DropDown = styled.div`
  display: block !important;
  padding: 10px 25px 10px 10px !important;
  height: 22px;
`;

const DropDownSpan = styled.span`
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  white-space: nowrap !important;
  vertical-align: middle !important;
`;

const DropDownButtonText = styled.button`
  max-width: 100% !important;
  cursor: pointer !important;
  font-size: 13px;
  background-color: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  vertical-align: baseline !important;
  line-height: normal !important;
  white-space: nowrap !important;
  text-align: center !important;
  box-sizing: border-box !important;
`;

const CurrentFilterText = styled.span`
  display: inline-block !important;
  width: 100% !important;
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  white-space: nowrap !important;
  vertical-align: middle !important;
  &:hover ${DropDownMenuItem} {
    display: block;
  }
`;

const DropDownArrow = styled.span`
  font-size: 12px !important;
  line-height: 12px !important;
  font-family: "times new roman" !important;
  position: absolute !important;
  top: 50% !important;
  right: 10px !important;
  margin-top: -4px !important;
`;

const DropDownMenu = styled.ul`
  right: 5px;
  top: auto;
  width: 224px;
  background-color: #fff;
  display: block;
  position: absolute;
  padding: 0;
  z-index: 3;
  line-height: normal;
  box-sizing: border-box;
  list-style-type: circle;
  list-style: none;
  white-space: nowrap;
  color: #333;
  text-align: center !important;
  box-sizing: border-box;
  ${DropDown}: hover & {
    display: block;
    outline-style: auto;
    outline-width: 2px;
  }
`;

const DropDownMenuItem = styled.li`
  display: none;
  cursor: pointer;
  zoom: 1;
  color: #333;
  font-size: 13px;
  width: 224px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center !important;
  &:hover {
    display: block;
    color: #fff;
    background-color: #3399fd;
  }
  ${DropDown}: hover & {
    display: block;
  }
  ${DropDownMenu}: hover & {
    display: block;
  }
`;


class SortDropFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  
  render() {
    return (<SortByContainer>
      <DropDown>
        <DropDownSpan> Sort by: </DropDownSpan>
        <DropDownButtonText>
          <CurrentFilterText>{this.props.activeFilter}</CurrentFilterText>
          <DropDownArrow> ▼ </DropDownArrow>
          <DropDownMenu>
            <DropDownMenuItem onClick={() => { this.props.filter('relevant') }} id="item" >Most Relevant</DropDownMenuItem>
            <DropDownMenuItem onClick={() => { this.props.filter('helpful') }} id="item" >Most Helpful</DropDownMenuItem>
            <DropDownMenuItem onClick={() => { this.props.filter('highest') }} id="item" >Highest to Lowest Rating</DropDownMenuItem>
            <DropDownMenuItem onClick={() => { this.props.filter('lowest') }} id="item" >Lowest to Highest Rating</DropDownMenuItem>
            <DropDownMenuItem onClick={() => { this.props.filter('oldest') }} id="item" >Oldest</DropDownMenuItem>
            <DropDownMenuItem onClick={() => { this.props.filter('recent') }} id="item" >Most Recent</DropDownMenuItem>
          </DropDownMenu>
        </DropDownButtonText>
      </DropDown>
    </SortByContainer>);
  }
}

export default SortDropFilter;
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
`;

const DropDownArrow = styled.span`
  font-size: 12px !important;
  line-height: 12px !important;
  font-family: "BVCustom", "times new roman" !important;
  position: absolute !important;
  top: 50% !important;
  right: 10px !important;
  margin-top: -4px !important;
`;

const DropDownMenu = styled.select`
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
  vertical-align: baseline !important;
  line-height: normal !important;
  border: 1px solid #ccc !important;
  cursor: pointer !important;
  display: block !important;
`;

const DropDownOption = styled.option`
  display: block !important;
`;

const SortDropFilter = () => {
    return <SortByContainer>
        <DropDown>
          <DropDownSpan> Sort by: </DropDownSpan>
          <DropDownButtonText>
            <CurrentFilterText>CURRENTFILT</CurrentFilterText>
            <DropDownArrow> ▼ </DropDownArrow>
          </DropDownButtonText>
        </DropDown>
        <DropDownMenu>
          <DropDownOption value="relevancy">Most Relevant</DropDownOption>
          <DropDownOption value="mostHelpful">Most Helpful</DropDownOption>
          <DropDownOption value="positive">Highest to Lowest Rating</DropDownOption>
          <DropDownOption value="negative">Lowest to Highest Rating</DropDownOption>
          <DropDownOption value="oldest">Oldest</DropDownOption>
          <DropDownOption value="mostRecent">Most Recent</DropDownOption>
        </DropDownMenu>
      </SortByContainer>;
}

export default SortDropFilter;
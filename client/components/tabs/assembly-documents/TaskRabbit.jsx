import React from 'react';
import styled from 'styled-components';


const ZipCodeFinder = styled.div`
    width: 100%;
    height: 150px;
    clear: both;
    margin-top: 45px;
    display:block;
    font-size: .6em;
    color: #333;
`;

const HeadlineContainer = styled.div`
    width: 300px;
    margin-top: 11px;
    display: block;
`;

const Headline = styled.div`
    width: 100%;
    height: auto;
    font-size: 13px;
    padding-top: 0px;
    font-weight: 600;
    text-align: left;
    margin-left: 15px;
    display:block;
`;

const Subline = styled.div`
    font-size: 10px;
    font-weight: 200;
    margin-left: 15px;
`;

const Logo = styled.img`
    height: 37px;
    width: 130px;
    margin-top: 9px;
    margin-left: 15px;
`;

const ZipCodeForm = styled.form`
  text-align: center;
`;

const InputContainer = styled.form`
  width: 180px;
  display: table-cell;
  margin-left: 0px;
  float: left;
  font-size: 9.6px !important;
`;

const ZipCodeInput = styled.input`
  height: 26px;
  margin-top: 10px;
  width: 96px;
  float: left;
  margin-left: 15px;
  padding-left: 10px !important;
  padding-right: 10px !important;
  border: 1px solid grey;
  background-color: #fff;
  -webkit-rtl-ordering: logical;
  cursor: text;
  -webkit-appearance: textfield;
`;

const ZipCodeButton = styled.input`
  width: 30px;
  height: 30px;
  background-color: #0051ba;
  margin-left: -23px;
  position: absolute;
  margin-top: 10px;
  cursor: pointer;
  border: none;
  background-image: url(https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/taskrabbit/images/button.png);
  background-position: center;
  background-size: 35px 35px;
`;




const TaskRabbit = () => {
    return (<ZipCodeFinder>
            <Logo src="./trlogo.svg"></Logo>
            <HeadlineContainer>
                <Headline>Looking to book an assembly service?</Headline>
                <Subline>
                    Find out if an assembly service is available in your area
                </Subline>
            </HeadlineContainer>
            <ZipCodeForm>
                <InputContainer>
                <ZipCodeInput placeholder="ZIP code"></ZipCodeInput>
                <ZipCodeButton type='button'></ZipCodeButton>
                </InputContainer>
            </ZipCodeForm>
        </ZipCodeFinder>);
}

export default TaskRabbit;
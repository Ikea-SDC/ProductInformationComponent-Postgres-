import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 150px;
    clear: both;
    text-align: center;
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
`;

const Logo = styled.img`
    height: auto;
    margin-top: 9px;
    margin-left: 15px;
`;

const TaskRabbit = () => {
    return <Container>
        <Logo src="./trlogo.svg"></Logo>
        <HeadlineContainer>
          <Headline>Looking to book an assembly service?</Headline>
          <Subline>
            Find out if an assembly service is available in your area
          </Subline>
        </HeadlineContainer>
        TaskRabbit placeholder.
      </Container>;
}

export default TaskRabbit;
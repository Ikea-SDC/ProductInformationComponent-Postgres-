import React from 'react';
import styled from 'styled-components';
import AssemblyInstructions from './AssemblyInstructions.jsx';
import Downloads from './Downloads.jsx';
import Manuals from './Manuals.jsx';
import TaskRabbit from './TaskRabbit.jsx';

const Container = styled.div`
    display:inline;
    text-align: left;
`;

const LinksContainer = styled.div`
  display: block;
  padding-right: 20px;
  overflow: hidden;
  padding: 20px 15px;
  width: 1030px;
  text-align: left;
  font-family: Verdana, sans-serif;
  font-size: 13px;
  color: #333;
`;


class AssemblyAndDocumentsFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Container>
                <TaskRabbit />
            </Container>
            <LinksContainer>
                <Downloads />
            </LinksContainer>
          </div>;
    }
}

export default AssemblyAndDocumentsFrame;
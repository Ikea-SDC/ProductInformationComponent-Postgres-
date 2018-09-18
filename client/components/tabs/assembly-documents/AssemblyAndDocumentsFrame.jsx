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


class AssemblyAndDocumentsFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Container>
              <TaskRabbit />
            </Container>
            {/*<AssemblyInstructions />
            <Downloads />
            <Manuals /> */}
          </div>;
    }
}

export default AssemblyAndDocumentsFrame;
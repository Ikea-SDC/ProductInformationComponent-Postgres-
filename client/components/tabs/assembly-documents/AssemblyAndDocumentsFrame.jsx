import React from 'react';
import styled from 'styled-components';
import AssemblyInstructions from './AssemblyInstructions.jsx';
import Downloads from './Downloads.jsx';
import Manuals from './Manuals.jsx';
import TaskRabbit from './TaskRabbit.jsx';

class AssemblyAndDocumentsFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Assembly</h1>
            <AssemblyInstructions />
            <Downloads />
            <Manuals />
            <TaskRabbit />
          </div>;
    }
}

export default AssemblyAndDocumentsFrame;
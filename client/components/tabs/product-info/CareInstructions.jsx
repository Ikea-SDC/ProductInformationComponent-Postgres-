import React from 'react';
import styled from 'styled-components';

const CareInstructionItem = styled.div`
  font-size: 13px;
  line-height: 18px;
`;

const CareInstructions = (props) => {
    return (<div>
        {props.careInstructions.map((instruction, i) => {
        return <div key={i}>
            <CareInstructionItem>{instruction}</CareInstructionItem>
            <br />
        </div>;
    })}</div>);
}

export default CareInstructions;
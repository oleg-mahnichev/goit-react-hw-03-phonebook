import React from 'react';
import { Label, Input, CenteredContainer } from './Filter.style'

const Filter = ({ value, onChange }) => (
    <CenteredContainer>
        <Label>
            Filter by name:
            <Input type="text" value={value} onChange={onChange} />
        </Label>
    </CenteredContainer>
);

export default Filter;

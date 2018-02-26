import React from 'react';
import styled from 'styled-components';
import ShapeBase from './Shape';

// Extended style for component ShapeBase
const CircleShape = styled(ShapeBase)`
    border-radius: 50%;
    height: 4em;
    width: 4em;
`;

export default CircleShape;
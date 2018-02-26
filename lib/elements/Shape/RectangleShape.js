import React from 'react';
import styled from 'styled-components';
import ShapeBase from './Shape';

// Extended style for component ShapeBase
const RectangleShape = styled(ShapeBase)`
    min-width: 6em;
`;

export default RectangleShape;
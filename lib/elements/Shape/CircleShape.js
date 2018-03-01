import React from 'react';
import styled from 'styled-components';
import ShapeBase from './Shape';

/** 
 * Extending the Styling for Shapebase 
 * component with styled-components 
 * */
const CircleShape = styled(ShapeBase)`
    border-radius: 50%;
    height: 2.5em;
    width: 2.5em;
`;

export default CircleShape;
import React from 'react';
import styled from 'styled-components';
import ShapeBase from './Shape';

/** 
 * Extending the Styling for Shapebase 
 * component with styled-components 
 * */
const RectangleShape = styled(ShapeBase)`
    min-width: 6em;
`;

export default RectangleShape;
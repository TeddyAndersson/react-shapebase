import React from 'react';
import styled from 'styled-components';
import ShapeBase from './Shape';

/** 
 * Extending the Styling for Shapebase 
 * component with styled-components 
 * */
const RectangleShape = styled(ShapeBase)`
    max-width: 20em;
`;

export default RectangleShape;
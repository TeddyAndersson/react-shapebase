import React from 'react';
import styled from 'styled-components';
import ShapeBase from './Shape';

/** 
 * Extending the Styling for Shapebase 
 * component with styled-components 
 * */
const SquareShape = styled(ShapeBase)`
    width: 2.5em;
    height: 2.5em;
`;

export default SquareShape;
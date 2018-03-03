import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Shape = (props) => {
  const {
    background: backgroundProp,
    backgroundImage,
    backgroundColor,
    children,
    className,
    component,
    imageUrl,
    raised,
    shape,
    size,
    ...other
  } = props;
  return (
    <props.component className={className}>
      {children}
    </props.component>
  );
};

Shape.propTypes = {
  /**
    * The background color of the component.
    */
  background: PropTypes.string,

  /**
    * Additonal classes.
    */
  className: PropTypes.string,

  /**
    * The content of the component.
    */
  children: PropTypes.node,

  /**
    * @ignore
    */
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),

  /**
    * @ignore
    */
  imageUrl: PropTypes.string,

  /**
    * Determain if the shape should be raised or not.
    */
  raised: PropTypes.number,

  /**
    * The type of shape the component should take.
    */
  shape: PropTypes.oneOf(['Triangle', 'Circle', 'Square', 'Rectangle']),

  /**
    * The size of should take.
    */
  size: PropTypes.number,
};

Shape.defaultProps = {
  children: undefined,
  className: undefined,
  component: 'div',
  imageUrl: undefined,
  shape: 'Rectangle',
  size: 1,
  background: '#ccc',
  raised: 0,
};

/** Styling the Component with styled-components */
const ShapeBase = styled(Shape)`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Helvetica';
  min-height: 2em;
  min-width: 2em;
  width: 10em;
  font-size: 1em;
  border-radius: 0.3em;
  background-image: ${props => props.imageUrl ? url(imageUrl): ''};
  background: ${props => props.backgroundColor ? props.backgroundColor : ""};
  box-shadow: ${props => props.raised ? `rgba(0, 0, 0, 0.4) 0.${props.raised}em 0.${props.raised}em 0px` : ''};
`;
  
export default ShapeBase;
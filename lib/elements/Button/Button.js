import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ButtonBase from './ButtonBase';
import RectangleShape from '../Shape/RectangleShape';
import CircleShape from '../Shape/CircleShape';
import SquareShape from '../Shape/SquareShape';

const Button = (props) => {
  const {
    children,
    disabled,
    raised,
    shape,
    size,
    ...other
  } = props;


  let ShapeComponent = undefined;

  if (shape === 'rectangle') {
    ShapeComponent = RectangleShape;
  }

  if (shape === 'square') {
    ShapeComponent = SquareShape;
  }

  if (shape === 'circle') {
    ShapeComponent = CircleShape;
  }

  return (
    <ButtonBase
      disabled={disabled}
      component={ShapeComponent}
      raised={raised}
      size={size}
      {...other}
    >
      <span>
        {children}
      </span>
    </ButtonBase>
  );
};

Button.propTypes = {
  /**
    * The content of the button.
    */
  children: PropTypes.node.isRequired,
  /**
    * Useful to extend the style applied to components.
    */
  classes: PropTypes.shape({}),
  /**
    * @ignore
    */
  className: PropTypes.string,
  /**
    * The component used for the root node.
    * Either a string to use a DOM element or a component.
    * The default value is a `button`.
    */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
    * If `true`, the button will be disabled.
    */
  disabled: PropTypes.bool,
  /**
    * The URL to link to when the button is clicked.
    * If defined, an `a` element will be used as the root node.
    */
  href: PropTypes.string,
  /**
    * If `true`, the button will use raised styling.
    */
  raised: PropTypes.number,
  /**
    * The size of the button.
    */
  shape: PropTypes.oneOf(['circle', 'rectangle', 'square']),
  /**
    * The size of the button.
    */
  size: PropTypes.number,
  /**
    * The color of the component. It's using the theme palette when that makes sense.
    */
  theme: PropTypes.oneOf(['primary', 'accent', 'secondary', 'transparent']),
  /**
    * @ignore
    */
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  href: undefined,
  raised: 0,
  shape: 'rectangle',
  size: 1,
  color: 'primary',
  type: 'button',
};



export default Button;
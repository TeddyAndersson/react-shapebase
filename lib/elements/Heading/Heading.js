import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingElement = (props) => {
  const {
    children,
    type,
    size,
    scale,
    ...other
  } = props;

  let ElementType = 'h' + size

  return (
    <ElementType {...props}>
        {children}
    </ElementType>
  );
};

HeadingElement.propTypes = {

  /**
    * @ignore
    */
  className: PropTypes.string,

  /**
    * The size of the button.
    */
  size: PropTypes.oneOf([1,2,3,4,5,6]).isRequired,

  /**
    * The sacle of the heading.
    */
  scale: PropTypes.oneOf([1,2,3,4,5,6]),
};


/** Styling the Component with styled-components */
const Heading = styled(HeadingElement)`
  font-size: ${props => props.scale + 'em' || '1rem'};
`;


export default Heading;
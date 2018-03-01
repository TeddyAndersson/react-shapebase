import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ParagraphElement = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <p className={className}>
        {children}
    </p>
  );
};

ParagraphElement.propTypes = {

  /**
    * @ignore
    */
  className: PropTypes.string,

  /**
    * The color of the heading.
    */
  color: PropTypes.string,

  /**
    * The font-weight of the paragraph.
    */
  weight: PropTypes.oneOf(['normal', 'bold', 'bolder']),

  /**
    * The size of the paragraph.
    */
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),


};

ParagraphElement.defaultProps = {
    size: 1,
    weight: 'normal',
    color: '#888',
} 


/** Styling the Component with styled-components */
const Paragraph = styled(ParagraphElement)`
  font-weight: ${props => props.weight};
  font-size: ${props => props.size}'em';
  font-color: ${props => props.color}
`;


export default Paragraph;
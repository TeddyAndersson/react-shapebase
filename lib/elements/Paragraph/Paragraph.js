import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ParagraphElement = (props) => {
  const {
    children,
    className,
    content,
  } = props;

  return (
    <p className={className}>
        {content ? content : children}
    </p>
  );
};

ParagraphElement.propTypes = {

  /**
    * Children of the paragraph.
    */
  children: PropTypes.node.isRequired,

  /**
    * Additonal classes.
    */
  className: PropTypes.string,

  /**
    * Content property of the paragraph.
    */
  content: PropTypes.string,
  
  /**
    * Color of the paragraph content.
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
  font-color: ${props => props.color};
  font-style: ${props => props.italic ? "italic":''};
`;


export default Paragraph;
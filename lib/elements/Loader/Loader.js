import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spinner } from '../../styles/keyframes'

const Component = (props) => {
  const {
    className,
    ...other
  } = props;

  return (
    <span className={className} {...other}/>
  );
};

Component.propTypes = {

  /**
    * Additonal classes.
    */
  className: PropTypes.string,
  
  /**
    * Color of the paragraph content.
    */
  color: PropTypes.string,

  /**
    * The size of the paragraph.
    */
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

};

Component.defaultProps = {
    size: 1,
    color: "#000",
} 


/** Styling the Component with styled-components */
const Loader = styled(Component)`
  :before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 2px solid ${props => props.color ? props.color : "#000"};
    opacity: 0.8;
    border-right: 2px solid transparent;
    animation: ${spinner} .6s linear infinite;
  }
`;


export default Loader;
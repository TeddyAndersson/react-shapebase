import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { fadeIn } from '../../styles/keyframes';


const Element = (props) => {
    const {
        children,
        className,
        transparent,
        ...other
    } = props

    return (
        <div className={className} aria-hidden="true" {...other}>
            {children}
        </div>
    );
}

Element.propTypes = {
    /**
      * Primary content.
      */
      children: PropTypes.node,

      /**
       * Additonal classes.
       */
      className: PropTypes.string,

      /**
       * Transparent
       */
      transparent: PropTypes.boolean,

}

const ModalBackdrop = styled(Element)`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.38);
    animation: ${fadeIn} 0.2s ease 0s;
`;

export default ModalBackdrop;
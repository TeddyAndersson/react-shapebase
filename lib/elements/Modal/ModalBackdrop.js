import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Element = (props) => {
    const {
        children,
        className,
    } = props

    return (
        <div className={className} aria-hidden="true">
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
      transparent: PropTypes.Boolean,

}

const ModalBackdrop = styled(Element)`
    z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
`;

export default ModalBackdrop;
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import FontAwesome from'react-fontawesome';

const Element = props => {
    const {
        children,
        className,
        name,
    } = props;

    return (
        <FontAwesome className={className} name={name} />
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
     * 
     */
    name: PropTypes.string
}

Element.defaultProps = {
    name: 'rocket',
}

/** Styling the Component with styled-components */
const Icon = styled(Element)`
    $fa-font-path: "~font-awesome/fonts";
    @import "~font-awesome/scss/font-awesome";
`;

export default Icon;
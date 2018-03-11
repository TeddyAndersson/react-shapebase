import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import RectangleShape from '../Shape/RectangleShape'

const Element = props => {
    const {
        active,
        className,
        children,
        content,
    } = props;

    return (
        <p className={className}>
            {content}
        </p>
    );
}

Element.propTypes = {
    /**
      * Defines if the field is currently active.
      */
    active: PropTypes.bool,
    /**
      * Primary content.
      */
    children: PropTypes.node,

    /**
     * Additonal classes.
     */
    className: PropTypes.string,

    /**
     * Error classes.
     */
    error: PropTypes.bool,

    /**
     * Disabled classes.
     */
    disabled: PropTypes.bool,
}

Element.defaultProps = {
    content: 'Field Label',
}

/** Styling the Component with styled-components */
const FieldLegend = styled(Element)`
    margin: 0;
    margin-bottom: 1em;
    font-size: 0.8em;
    font-weight: bold;
    font-family: 'Helvetica';
`;


export default FieldLegend;
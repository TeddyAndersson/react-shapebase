import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import RectangleShape from '../Shape/RectangleShape'
import FieldLegend from './FieldLegend';

const Element = props => {
    const {
        active,
        children,
        className,
        disabled,
        error,
        ...other
    } = props;

    return (
        <fieldset className={className} {...other}>
            {children}
        </fieldset>
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
    type: 'text',
}

/** Styling the Component with styled-components */
const Field = styled(Element)`
    border: 0;
    padding: 0;
    margin: 0;
    min-width: 0;
    padding: 0.8em;

    ${ props => props.error && css`
        color: red;
        background: lightred;
    `}
`;

Field.Legend = FieldLegend

export default Field;
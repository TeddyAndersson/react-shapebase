import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solids from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(solids)

const Element = props => {
    const {
        className,
        name,
        color,
        size,
    } = props;

    return (
        <FontAwesomeIcon className={className} icon={name} />
    );
}

Element.propTypes = {

    /**
     * Additonal classes.
     */
    className: PropTypes.string,

    /**
     * The name of the fontawesome icon.
     */
    name: PropTypes.string.isRequired,

    /**
     * The the color of the icon.
     */
    color: PropTypes.string,
    /**
     * The the size of the icon.
     */
    size: PropTypes.number,
}

Element.defaultProps = {
    color: "#000",
    size: 1,
}

/** Styling the Component with styled-components */
const Icon = styled(Element)`
    color: ${props => props.color};
    font-size: ${props => props.size ? props.size : 2}em;
`;

export default Icon;
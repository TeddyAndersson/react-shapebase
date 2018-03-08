import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = (props) => {
    const { children, className } = props
    return(
        <header className={className}>
           {children}
        </header>
    );
}

const CardHeader = styled(Element)`
    min-height: 2em;
`;

export default CardHeader;
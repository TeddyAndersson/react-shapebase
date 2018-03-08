import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = (props) => {
    const { children, className} = props
    return(
        <footer className={className}>
           {children}
        </footer>
    );
}

const CardFooter = styled(Element)`
    min-height: 2em;
`;

export default CardFooter;
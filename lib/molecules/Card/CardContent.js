import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = (props) => {
    const { children, className } = props
    return(
        <section className={className}>
            {children}
        </section>
    );
}

const CardContent = styled(Element)`
min-height: 2em;
`;

export default CardContent;
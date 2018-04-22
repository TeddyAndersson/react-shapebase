import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../../elements/Heading';

const Element = (props) => {
    const { className, title } = props
    return(
        <header className={className}>
            <Heading size={2} scale={1.2}>
                {title}
            </Heading>
        </header>
    );
}

const DialogHeader = styled(Element)`
    padding: 0.5em;
    margin: 0;
`;

export default DialogHeader;

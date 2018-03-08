import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../../elements/Container';
import Paragraph from '../../elements/Paragraph';

const Element = (props) => {
    const { children, className, text } = props
    return(
        <Container className={className}>
            {text ? 
                <Paragraph>
                    {text}
                </Paragraph>
                : 
                children
            }
        </Container>
    );
}

const DialogContent = styled(Element)`
    padding: 0.5em;
    margin: 0;
`;

export default DialogContent;
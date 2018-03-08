import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import RectangleShape from '../../elements/Shape/RectangleShape'
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const Element = (props) => {
    const { children, className, ...other } = props
    const open = true
    return(
        <RectangleShape className={className} {...other}>
            {children}
        </RectangleShape>
    );
}

const Card = styled(Element)`
    min-width: 20em;
    height: auto;
    padding: 0.4em;
    height: fit-content;

    ${props => props.backgroundImage && css`
        background-image: url(${props => props.backgroundImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `}
`;

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter

export default Card;
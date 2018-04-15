import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Element = (props) => {
  const {
    children,
    className,
    size,
  } = props;

  return (
    <main className={className}>
        {children}
    </main>
  );
};

Element.propTypes = {
  /**
    * Primary content.
    */
  children: PropTypes.node,

  /**
    * Additonal classes.
    */
  className: PropTypes.string,
};


/** Styling the Component with styled-components */
const Page = styled(Element)`
    font-family: Helvetica;
    min-width: 100%;
    min-height: 100%;
    background-size: 300% 300%;
    background: #fff;

    ${props => props.color && css`
        background: ${props.color};
    `}
`;


export default Page;
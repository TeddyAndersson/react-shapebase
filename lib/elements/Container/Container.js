import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Grid from '../Grid'

const Element = (props) => {
  const {
    children,
    className,
    size,
  } = props;

  return (
    <Grid columns={1}>
        <Grid.Item columnStart={1} columnEnd={2}>
            <div className={className}>
                {children}
            </div>
        </Grid.Item>
    </Grid>
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

  /**
    * Determine if the container shoudl be fluid.
    */
  fluid: PropTypes.boolean,

  /**
    * Determine the text alignment in the container.
    */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),

};

Element.defaultProps = {
    textAlign: 'left',
    fluid: false,
}


/** Styling the Component with styled-components */
const Container = styled(Element)`
    margin-top: 0;
    margin-bottom: 0;
    display: block;
    max-width: 40em;
    width: auto;
    text-align: ${props => props.textAlign};

    ${ props => props.fluid && css`
        max-width: none;
    `}
`;


export default Container;
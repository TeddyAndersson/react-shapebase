import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import SquareShape from '../Shape/SquareShape';
import CircleShape from '../Shape/CircleShape';
import RectangleShape from '../Shape/RectangleShape';
import Paragraph from '../Paragraph/Paragraph';

class Element extends React.Component {

    handleClick = (e) => {
        const { disabled } = this.props
    
        if (disabled) {
          e.preventDefault()
          return
        }
    
        _.invoke(this.props, 'onClick', e, this.props)
    }


    render(){ 
        const {
            children,
            className,
            text,
            ...other
        } = this.props

        let ShapeComponent = RectangleShape;
        
        return (
            <ShapeComponent className={className}>
                { 
                    text ? 
                            <Paragraph>
                                {text}
                            </Paragraph>
                        : 
                        children
                }
            </ShapeComponent>
        );
    }
}

Element.PropTypes = {
  /**
    * Primary content.
    */
  children: PropTypes.node,

  /**
    * Additonal classes.
    */
  className: PropTypes.string,

  /**
     * @ignore
     */
  onClick: PropTypes.func,

  /**
    * Creating a link around the component
    */
  href: PropTypes.string,
}

Element.defaultProps = {
}

const Chip = styled(Element)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-height: 1em;
    padding: 0.4em 0.8em;
    min-width: 1em;
    color: #777;
    background: rgba(255,255,255,0.5);

    ${props => props.scale && css`
        font-size: ${props => props.scale}em;
  `}
`;

export default Chip;
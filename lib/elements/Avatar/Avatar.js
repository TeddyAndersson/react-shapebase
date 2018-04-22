import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import SquareShape from '../Shape/SquareShape';
import CircleShape from '../Shape/CircleShape';

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
            alt,
            children,
            letter,
            shape,
            src,
            ...other
        } = this.props

        let ShapeComponent = undefined;

        if (shape === "square"){
            ShapeComponent = SquareShape;
        }

        if (shape === "circle"){
            ShapeComponent = CircleShape;
        }

        return (
            <ShapeComponent onClick={this.handleClick} {...other}>
                {
                    src ?
                        <img src={src} alt={alt}/>
                        :
                        <p>
                            {letter ? letter:''}
                        </p>
                }
            </ShapeComponent>
        );
    }
}

Element.propTypes = {
  /**
    * Primary content.
    */
  alt: PropTypes.string.isRequired,

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

  /**
    * @ignore
    */
  letter: PropTypes.string,

  /**
    * The shape of the component.
    */
  shape: PropTypes.oneOf(['circle', 'square']),

  /**
    * The shape of the component.
    */
  src: PropTypes.string,

  /**
    * The shape of the component.
    */
  string: PropTypes.string,
}

Element.defaultProps = {
    shape: 'square',
    alt: 'Avatar'
}

const Avatar = styled(Element)`
    display: flex; 
    color: #fff;
    font-weight: bold;
    background-color: ${props => props.backgroundColor || "#aaa"};
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: ${props => props.onClick ? "pointer" : "default"};

    img {
        width: 100%;
        height: 100%;
        text-align: center;
        // Handle non-square image. The property isn't supported by IE11.
        object-fit: cover;
    }
`;

export default Avatar;

import React from 'react';
import _ from 'lodash';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import SquareShape from '../Shape/SquareShape';

class Element extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeOption: undefined,
    }
  }

  handleClick = (id) => {
    this.setState({activeOption: id})

    _.invoke(this.props, 'onClick', id, this.props)
  }

  render(){
    const {
        className,
        options,
    } = this.props

    return (
        <ul className={className}>
          { _.values(options).map(option => (
            // Replace <li/> with a component for better state handling and generic code
                <li
                    key={option.id}
                    onClick={() => this.handleClick( option.id )}
                >
                    <SquareShape
                        background={`${ option.id === this.state.activeOption ? option.background : 'rgba(0,0,0,0.1)'}`}
                        raised={option.id === this.state.activeOption ? 1 : 0}
                    >
                        <input
                        type="hidden"
                        name={option.name}
                        value={option.value}
                        autoComplete="off"
                        />

                        <div>
                            <i> A </i>
                        </div>

                        <div>
                            <span>
                                {option.label}
                            </span>
                        </div>
                    </SquareShape>
                </li>
            ))}
        </ul>
    )
  };
};

Element.propTypes = {

    /**
      * The children of the component.
      */
    children: PropTypes.node,

    /**
      * Additonal classes.
      */
    className: PropTypes.string,

    /**
     * Description of the intreval the range.
     */
    description: PropTypes.bool,

    /**
     * The range of the grades options 1-5 or 1-10
     */
    options: PropTypes.arrayOf(PropTypes.shape(
        {
            value: PropTypes.string,
            label: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.string,
            icon: PropTypes.string,
        }
    ))
}

Element.defaultProps = {
}

const PickABox = styled(Element)`
    display: flex;
    padding: 0;
    list-style: none;
    margin: 0;
    font-weight: bold;
    font-size: 1em;
    justify-content: space-between;
    
    li {
        margin-bottom: 0.4em
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease
            height: 6em;
            width: 6em;

            div {
                flex: 6;
            }
            
            div:last-child {
                flex: 1;
                padding: 0.4em;
                font-size: 0.7em;
            }
        }
    }

    li:last-child {
        margin: 0;
    }
    
    ${props => props.range === 10 && css`
        font-size: 0.8em;
    `}
`;

export default PickABox;
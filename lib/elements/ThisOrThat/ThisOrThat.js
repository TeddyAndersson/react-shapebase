import React from 'react';
import _ from 'lodash';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import RectangleShape from '../Shape/RectangleShape'

const arrayOfLength = function(length, props, propName, componentName) {
  if (!Array.isArray(props.TWO_NUMBERS) || props.TWO_NUMBERS.length != length || !props.arrayOfLength.every(Object)) {
    return new Error(`${propName} needs to be an array of two numbers`);
  }

  return null
}

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
        className
      } = this.props
    return (
        <ul className={className}>
          { _.values(this.props.options).map(option => (
            // Replace <li/> with a component for better state handling and generic code
            <li
                key={option.id}
                onClick={() => this.handleClick( option.id )}
            >
              <RectangleShape
                background={`${ option.id === this.state.activeOption ? option.background : 'rgba(0,0,0,0.1)'}`}
                raised={option.id === this.state.activeOption ? 1: 0}
              >
                <input
                  type="hidden"
                  name={option.name}
                  value={option.value}
                  autoComplete="off"
                />
                <div>
                  <p>
                    <span>{option.label}</span>
                  </p>
                </div>
              </RectangleShape>
            </li>
        ))}
    </ul>
    )
  };
};

Element.propTypes = {
    
    className: PropTypes.string,
    options: arrayOfLength,
    onClick: PropTypes.func.isRequired,
};

const ThisOrThat = styled(Element)`
    padding: 0;
    list-style: none;
    display: flex;
    margin: 0;

    li {
        margin: 0.2em;
        flex: 1;

        p {
            font-weight: bolder;
            text-align: center;
            margin: 0;
            font-size: 1em;
        }

        div {
            width: auto;
            padding: 0.1em 0.8em;
            max-height: 3em;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease
        }
    }
`;

export default ThisOrThat;

import React from 'react';
import _ from 'lodash';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import RectangleShape from '../Shape/RectangleShape'

const arrayOfLength = function(expectedLength, props, propName, componentName) {
  const arrayPropLength = props[propName].length

  if (arrayPropLength !== expectedLength) {
    return new Error(
      `Invalid array length ${arrayPropLength} (expected ${expectedLength}) for prop ${propName} supplied to ${componentName}. Validation failed.`
    );
  }
}

class Element extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeOption: this.props.initialOption,
    }
  }

  handleClick = (id) => {
    this.setState({activeOption: id})

    _.invoke(this.props, 'onClick', id, this.props)
  }

  render(){
      const {
        className,
        activeBackground,
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
                background={`${ option.id === this.state.activeOption ? activeBackground : 'rgba(0,0,0,0.25)'}`}
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
  options: arrayOfLength.bind(null, 2),
  onClick: PropTypes.func.isRequired,
  /**
   * Property to set the inital option.
   */
  initialOption: PropTypes.string,
  /**
   * Property to change the background for an active option.
   */
  activeBackground: PropTypes.string,
};

Element.defaultProps = {
  initialOption: undefined,
  activeBackground: '#1FAACB',
}

const ThisOrThat = styled(Element)`
    padding: 0;
    list-style: none;
    display: flex;
    margin: 0;
    justify-content: space-between;
    color: #fff;

    li {
        width: 48%;

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

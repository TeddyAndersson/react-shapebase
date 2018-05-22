import React from 'react';
import _ from 'lodash';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import RectangleShape from '../Shape/RectangleShape';

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
        options,
        activeBackground,
    } = this.props

    return (
        <ul className={className}>
          { _.values(options).map(option => (
            // Replace <li/> with a component for better state handling and generic code
                <li
                    key={option.id}
                    onClick={() => this.handleClick( option.id )}
                >
                    <RectangleShape
                        background={`${ option.id === this.state.activeOption ? activeBackground : 'rgba(0,0,0,0.2)'}`}
                        raised={option.id === this.state.activeOption ? 1 : 0}
                    >
                        <input
                        type="hidden"
                        name={option.name}
                        value={option.value}
                        autoComplete="off"
                        />
                        <div>
                            <span>
                                {option.label}
                            </span>
                        </div>
                    </RectangleShape>
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
     * Description of the intreval the range.
     */
    initialOption: PropTypes.string,

    /**
     * The range of the grades options 1-5 or 1-10
     */
    options: PropTypes.arrayOf(PropTypes.shape(
        {
            value: PropTypes.string,
            label: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.string,

        }
    )),
    /**
     * The background for an active option
     */
    activeBackground: PropTypes.string,
}

Element.defaultProps = {
    initialOption: undefined,
    activeBackground: "#1FAACB",
}

const Multiple = styled(Element)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    list-style: none;
    display: flex;
    margin: 0;
    font-weight: bold;
    font-size: 0.9em;
    color: ${props => props.color};
    
    li {
        margin-bottom: 0.4em
        div {
            width: 100%
            max-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease
            flex: 1;
        }
    }

    li:last-child {
        margin: 0;
    }
    
    ${props => props.range === 10 && css`
        font-size: 0.8em;
    `}
`;

export default Multiple;
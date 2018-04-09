import React from 'react';
import _ from 'lodash';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import SquareShape from '../Shape/SquareShape';

class Element extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeOption: this.props.initialGrade,
    }
  }

  handleClick = (id) => {
    this.setState({activeOption: id})

    _.invoke(this.props, 'onClick', id, this.props)
  }

  render(){
    const {
        className,
        range,
    } = this.props

    const options = [...Array(range+1).keys()].slice(1)

    return (
        <ul className={className}>
          { _.values(options).map(option => (
            // Replace <li/> with a component for better state handling and generic code
                <li
                    key={option}
                    onClick={() => this.handleClick( option )}
                >
                    <SquareShape
                        background={`${ option === this.state.activeOption ? option.background : 'rgba(0,0,0,0.1)'}`}
                        raised={option === this.state.activeOption ? 1 : 0}
                    >
                        <input
                        type="hidden"
                        name={option}
                        value={option}
                        autoComplete="off"
                        />
                        <div>
                            <span>
                                {option}
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
    range: PropTypes.oneOf([5,10]),

    /**
     * The range of the grades options 1-5 or 1-10
     */
    initialGrade: PropTypes.number,
}

Element.defaultProps = {
    range: 5,
    initialGrade: undefined,
}

const Grade = styled(Element)`
    display: flex;
    justify-content: space-between;
    padding: 0;
    list-style: none;
    display: flex;
    margin: 0;
    font-weight: bold;
    li {
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease
        }
    }
    ${props => props.range === 10 && css`
        font-size: 0.6em;
    `}
`;

export default Grade;
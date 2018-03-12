import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components';

class Element extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: false
        }
    }

    renderChild = (child) => {
        const {
        className
        } = this.props;

        return React.cloneElement(child, Object.assign(
            {className},
            child.props
        ));
    }
    

    render() {
    const {
      active,
      className,
      completed,
      error,
      index,
      last, 
      children,
      ...other
    } = this.props;

    return (
      <div data-component="Step" className={className} {...other}>
        {React.Children.map(children, this.renderChild)}
      </div>
    );
  }
}

Element.propTypes = {
    /**
      * Sets the step as active. Is passed to child components.
      */
    active: PropTypes.bool,

    /**
      * Should be `Step` sub-components.
      */
    children: PropTypes.node,

    /**
      * Should be `Step` sub-components.
      */
    className: PropTypes.string,

    /**
      * Mark the step as completed. Is passed to child components. 
      */
    completed: PropTypes.bool,

    /**
      * Mark the step as disabled, will also disable the button if
      * `StepButton` is a child of `Step`. Is passed to child components.
      */
    disabled: PropTypes.bool,
    
    /**
      * Mark the step as invalid. Is passed to child components.
      */
    error: PropTypes.bool,

    /**
      * @ignore
      * Used internally for numbering.
      */
    index: PropTypes.number.isRequired,

    /**
      * @ignore
      */
    last: PropTypes.bool.isRequired,


    /**
      * Override the inline-style of the root element.
      */
    style: PropTypes.object,

}

Element.defaultProps = {
    error: false,
    completed: false,
    active: false,
    disabled: false,
    last: false,
    style: {},
}

// Step.Header = StepHeader;
// Step.Body = StepBody
// Step.Footer = StepFooter

const Step = styled(Element)``;


export default Step;
import React from 'react';
import PropTypes from 'prop-types'
import Step from './Step';

class Stepper extends React.Component{
    
    render(){
        const {
            activeStep,
            children,
            ...other
        } = this.props

        const numChildren = React.Children.count(children.type == Step);

        const steps = React.Children.map(children, (child, index) => {
            const controlProps = {index};

            if (index + 1 === numChildren) {
                controlProps.last = true;
            }

            return React.cloneElement(child, Object.assign(controlProps, child.props, index));
        });

        return (
            <div data-component="Stepper">
                <div>
                    {steps[activeStep - 1]}
                </div>
            </div>
        )
    }
}

Stepper.propTypes = {
    /**
      * Set the active step (zero based index). This will enable `Step` control helpers.
      */
    activeStep: PropTypes.number,

    /**
      * Set the active step (zero based index). This will enable `Step` control helpers.
      */
    completed: PropTypes.number,

    /**
      * Set the active step (zero based index). This will enable `Step` control helpers.
      */
    disabeld: PropTypes.number,

    /**
      * Should be two or more `<Step />` components.
      */
    children: function (props, propName, componentName) {
        const prop = props[propName]
    
        let error = null
        React.Children.forEach(prop, function (child) {
          if (child.type !== Step) {
            error = new Error('`' + componentName + '` children should be of type `Step`.');
          }
        })
        return error
    },

    /**
      * Override the inline-style of the root element.
      */
    style: PropTypes.object,
}

Stepper.defaultProps = {
    activeStep: 1,
}

Stepper.Step = Step

export default Stepper;
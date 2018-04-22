import React from 'react';
import { findDOMNode } from 'react-dom';
import _ from 'lodash';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import colors from '../../styles/colors'

class Base extends React.Component{
    constructor() {
        super();
        this.state = {
            button: null,
        }
    }

    componentDidMount() {
        this.setState({
            button: findDOMNode(this)
        })
        // listenForFocusKeys();
    }

    componentWillUnmount() {
        this.setState({
            button: null
        })
    }


    handleClick = (e) => {
        const { disabled, loading } = this.props

        if (disabled || loading) {
          e.preventDefault()
          return
        }
    
        _.invoke(this.props, 'onClick', e, this.props)
    }
    render(){
        const {
            auto,
            children,
            classes,
            className,
            component,
            disabled,
            loading,
            onClick,
            rootRef,
            type,
            secondary,
            primary,
            ...other
        } = this.props;

        const buttonProps = {

        };

        let ComponentProp = component;

        if (ComponentProp === 'button') {
            buttonProps.type = type || 'button';
        }

        if (ComponentProp !== 'a') {
            buttonProps.role = buttonProps.role || 'button';
            buttonProps.disabled = disabled;
        }

        if (loading) {
            buttonProps.disabled = true;
        }

        return (
            <ComponentProp
                onClick={this.handleClick}
                className={className}
                {...buttonProps}
                {...other}
            >   
                {children}
            </ComponentProp>
        )
    };
};

Base.propTypes = {
    /**
     * The content of the component.
     */
    auto: PropTypes.bool,

    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Useful to extend the style applied to components.
     */
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * The default value is a `button`.
     */
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    
    /**
     * If `true`, the base button will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The CSS class applied while the component is keyboard focused.
     */
    keyboardFocusedClassName: PropTypes.string,

    /**
     * @ignore
     */
    onBlur: PropTypes.func,

    /**
     * @ignore
     */
    onClick: PropTypes.func,

    /**
     * @ignore
     */
    role: PropTypes.string,

    /**
     * Use that property to pass a ref callback to the root component.
     */
    rootRef: PropTypes.func,

    /**
     * @ignore
     */
    type: PropTypes.string,

    /**
     * @ignore
     */
    primary: PropTypes.bool,

    /**
     * @ignore
     */
    secondary: PropTypes.bool,

  };

  Base.defaultProps = {
    secondary: false,
    primary: false,
  }

/** Styling the Component with styled-components */
const ButtonBase = styled(Base)`
    margin: 0
    border: 0
    padding: 0
    display: inline-block
    vertical-align: middle
    white-space: normal
    background: none
    line-height: 1
    font-size: inherit
    font-family: inherit
    user-select: none;
    display:flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    color: #555;
    font-weight: bold;
    cursor: pointer;

  
  ${props => props.dense && css`
    height: 1.8em;
    min-height: 1em;
  `}

  ${props => props.auto && css`
    width: auto;
    min-width: 0;
  `}

  ${props => props.primary && css`
    background: ${colors.info};
    color: #fff;
  `}

  ${props => props.secondary && css`
    background: ${colors.darkBlue};
    color: #fff;
  `}

  ${props => props.accent && css`
    background: ${colors.darkBlue};
    color: #fff;
  `}

  ${props => props.loading && css`
      color: #bdbdbd;
      cursor: not-allow;
  `}

  ${props => props.disabled && css`
    background: #f1f2f2;
    color: #bdbdbd;
    cursor: not-allow;
  `};
`;

export default ButtonBase;
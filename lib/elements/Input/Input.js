import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import RectangleShape from '../Shape/RectangleShape'

class Element extends React.Component {

    handleChange = (e) => {
        const value = _.get(e, 'target.value')

        _.invoke(this.props, 'onChange', e, { ...this.props, value })
    }

    render() {
        const {
            children,
            className,
            disabled,
            error,
            onChange,
            placeholder,
            type,
            value,
            ...other
        } = this.props;

        let inputPlaceholder = placeholder

        return (
            <RectangleShape className={className} {...other}>
                { type === 'textarea' ?
                    <textarea
                        name={name}
                        maxlength="140"
                        cols='5'
                        rows='5'
                        placeholder={inputPlaceholder}
                        onChange={this.handleChange}
                        disabled={disabled}
                        value={value}
                        autoComplete="off"
                        {...other}
                    />
                    :
                    <input
                        name={name}
                        disabled={disabled}
                        type={type}
                        onChange={this.handleChange}
                        value={value}
                        placeholder={inputPlaceholder}
                        autoComplete="off"
                        {...other}
                    />
                }
            </RectangleShape>
        );
    }
}

Element.propTypes = {
    /**
      * Primary content.
      */
    children: PropTypes.node,

    /**
     * Additonal classes.
     */
    className: PropTypes.string,

    /**
     * Error classes.
     */
    error: PropTypes.bool,

    /**
     * Disabled classes.
     */
    disabled: PropTypes.bool,

    /**
     * Called on change.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     */
    onChange: PropTypes.func,

    /**
     * Input placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * Input type.
     */
    type: PropTypes.oneOf(['email', 'password', 'text', 'number', 'textarea']),

}

Element.defaultProps = {
    type: 'text',
}

/** Styling the Component with styled-components */
const Input = styled(Element)`
    background: #fff;
    min-height: 2em;
    min-width: 4em;
    display: flex;
    width: 100%;
    max-width: 20em;
    overflow: hidden;

    textarea {
        margin: 0;
        border: 0;
        padding: 0;
        display: inline-block;
        vertical-align: middle;
        white-space: normal;
        background: none;
        line-height: 1;
        font-size: inherit;
        font-family: inherit;
        outline: none;
        resize: none;
        padding: 0.4em;
        flex: 1;
    }


    input {
        margin: 0;
	    border: 0;
	    padding: 0;
	    display: inline-block;
	    vertical-align: middle;
	    white-space: normal;
	    background: none;
	    line-height: 1;
	    font-size: inherit;
	    font-family: inherit;
        flex: 1;
        padding:0 0.4em;
        width: 100%;
        outline: none;
    }

    ${props => props.error && css`
        background: #FF4949;
        input {
            color: #000;
        }
    `}

    ${props => props.disabled && css`
        background: #aaa;
        input {
            color: #555;
        }
    `}
`;


export default Input;

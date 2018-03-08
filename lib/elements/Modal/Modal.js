import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalBackdrop from './ModalBackdrop';
import Portal from '../../utils/Portal'
import { fadeIn } from '../../styles/keyframes';

class Element extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            exited: !this.props.open,
            mounted: false,
            elements: [this.props.children],
        }
    }

    componentWillMount() {
        if (!this.props.open) {
            this.setState({ exited: true });
        }
    }

    componentDidMount() {
        this.setState({mounted: true})
        if (this.props.open) {
            this.handleOpen();
        }
    }

    componentWillUnmount() {
        if (this.props.open || !this.state.exited) {
            this.handleClose();
        }
        this.setState({mounted: false})
    }

    handleClose = (e) => {
        this.setState({open: false})
        _.invoke(this.props, 'onClose', e, this.props)
    }
    
    handleOpen = (e) => {

        _.invoke(this.props, 'onClick', e, this.props)
        this.setState({ open: true })
    }

    handleBackdropClick = event => {
        // On backdrop click hide the Modal component and it's children
        if (event.target !== event.currentTarget) {
            console.log("onBackdropClick")
            return;
        }

        const { onBackdropClick, onClose, ignoreBackdropClick } = this.props;

        if (onClose && !ignoreBackdropClick) {
            this.handleClose(event);
        }
    }

    renderBackdrop() {
        const {
        backdropComponent: BackdropComponent,
        backdropTransitionDuration,
        backdropTransparent,
        open,
        } = this.props;

        return (
            <BackdropComponent
                transparent={backdropTransparent}
                onClick={this.handleBackdropClick}
            />
        );
    }

    render(){
        const { 
            open,
            disableBackdrop,
            backdropComponent,
            backdropClassName,
            backdropTransitionDuration,
            backdropInvisible,
            ignoreBackdropClick,
            children,
            className,
            keepMounted,
            onBackdropClick,
            onRequestClose,
            trigger,
            ...other
        } = this.props
        
        if (!keepMounted && !open && this.state.exited) {
            return null;
        }

        return (
            <Portal id="modal" className={className} scroll={this.props.scroll}>
                {(!keepMounted || open || !this.state.exited) && this.renderBackdrop()}
                {React.Children.map(children, (child, i) => {
                    // Ignore the first child
                    return (
                        <div className={className}> {child} </div>
                    )
                })}
            </Portal>
        )
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
     * Initial value of open.
     */
    defaultOpen: PropTypes.func,

    /**
     * Called when a close event happens.
     */
    onClose: PropTypes.func,

    /**
     * Called when the portal is mounted on the DOM.
     */
    onMount: PropTypes.func,

    /**
      * Called when a open event happens.
      */
    onClick: PropTypes.func,

    /**
      * Called when the portal is unmounted from the DOM.
      */
    onUnmount: PropTypes.func,

    /** Controls whether or not the Modal is displayed. */
    open: PropTypes.bool,

    /** Element to be rendered in-place where the portal is defined. */
    trigger: PropTypes.node,
}

Element.defaultProps = {
    backdropComponent: ModalBackdrop,
    disableBackdrop: false,
    ignoreBackdropClick: false,
    keepMounted: false,
    open: false,
}

const Modal = styled(Element)`
    position: fixed;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    animation: ${fadeIn} 0.2s ease 0s;
    transform: translate(-50%, -50%);
`;

export default Modal;
import React from 'react';
import styled from 'styled-components';
import PropTypes, { element } from 'prop-types';
import ModalBackdrop from './ModalBackdrop';
import Portal from '../../utils/Portal'

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
        console.log(e)
        // let modals = this.state.dialogs.filter(modal => modal !== id)
        // if (modals.length !== this.state.modals.length) {
        // this.setState({
        //     modals: modals,
        // })
        // }
    }
    
    handleOpen = (e) => {

        _.invoke(this.props, 'onOpen', e, this.props)
        this.setState({ open: true })
    }

    handleBackdropClick = event => {
        // On backdrop click hide the Modal component and it's children

        if (event.target !== event.currentTarget) {
            return;
        }

        const { onBackdropClick, onRequestClose, ignoreBackdropClick } = this.props;

        if (onBackdropClick) {
            onBackdropClick(event);
        }

        if (onRequestClose && !ignoreBackdropClick) {
            onRequestClose(event);
        }
    }

    renderBackdrop() {
        const {
        backdropComponent: BackdropComponent,
        backdropClassName,
        backdropTransitionDuration,
        backdropTransparent,
        open,
        } = this.props;

        return (
            <BackdropComponent
            transparent={backdropTransparent}
            className={backdropClassName}
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
            ...other
        } = this.props
        
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

Element.PropTypes = {
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
    onOpen: PropTypes.func,

    /**
      * Called when the portal is unmounted from the DOM.
      */
    onUnmount: PropTypes.func,

    /** Controls whether or not the Modal is displayed. */
    open: PropTypes.bool,
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
    height: 100vh;
    width: 100%;
    z-index: 11;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export default Modal;
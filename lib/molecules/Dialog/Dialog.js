import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../elements/Button'
import Modal from '../../elements/Modal'
import RectangleShape from '../../elements/Shape/RectangleShape'
import { scaleIn } from '../../styles/keyframes';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

const Element = (props) => {
    const { children, className, raised } = props
    const open = true
    return(
        <Modal open={open}>
            <RectangleShape className={className} raised={raised}>
                {children}
            </RectangleShape>
        </Modal>
    );
}

const Dialog = styled(Element)`
    width: 20em;
    height: auto;
    animation: ${scaleIn} 0.2s linear 0s;
    background: #fff;
`;

Dialog.Header = DialogHeader
Dialog.Content = DialogContent
Dialog.Actions = DialogActions

export default Dialog;
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../elements/Button/Button';
import Grid from '../../elements/Grid';

const Element = (props) => {
    const { affirmative, affirmativeContent, dismissive, dismissiveContent, className } = props
    return(
        <footer className={className}>
            <Grid columnGap={0.5}>

                { dismissive ? 
                    <Button onClick={props.handleDismiss}> {dismissiveContent} </Button>
                    : ''
                }
                { affirmative ? 
                    <Button onClick={props.handleAffirmative} primary> {affirmativeContent} </Button>
                    : ''
                }
            </Grid>
        </footer>
    );
}

Element.propTypes = {

    affirmative: PropTypes.boolean,

    dismissive: PropTypes.boolean,

    affirmativeContent: PropTypes.string,

    dismissiveContent: PropTypes.string,

    className: PropTypes.string,

    handleDismiss: PropTypes.func,

    handleAffirmative: PropTypes.func,
}

Element.defaultProps = {
    dismissiveContent: "Cancel",
    affirmativeContent: "Agree",
}

const DialogActions = styled(Element)`
    display: flex
    padding: 0.5em;
    margin: 0;
    justify-content: flex-end;

    div {
        width: auto !important;
    }
`;



export default DialogActions;
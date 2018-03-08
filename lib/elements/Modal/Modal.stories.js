import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Grid from '../Grid';
import Button from '../Button';
import RectangleShape from '../Shape/RectangleShape';
import Modal from './Modal';

class ModalExampleSize extends React.Component {
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    render(){
        const { open, size } = this.state

        return (
        <div>
            <Button onClick={this.open}>Open Modal</Button>

            <Modal open={open} onClose={this.close}>
                <RectangleShape raised={1} background="#fff">
                    <p>Hey look at this sweet modal shape! </p>
                    <Button onClick={action("New")}>Modal</Button>
                </RectangleShape>
            </Modal>
        </div>
        )
    }
}


storiesOf('Modal', module)
  .add('Modal', () => (
      <Grid columns={1}>
        <ModalExampleSize/>
      </Grid>
  ));
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Grid from '../Grid';
import Button from '../Button';
import RectangleShape from '../Shape/RectangleShape';
import Modal from './Modal';

storiesOf('Modal', module)
  .add('Modal', () => (
      <Grid columns={1}>
        <p>Text in body</p>
        <p>Text in body</p>
        <p>Text in body</p>
        <p>Text in body</p>
        <Modal open={true}>
            <RectangleShape raised={1} background="#fff">
                <p>Hey a modal! </p>
                <Button onClick={action("New")}>Modal</Button>
            </RectangleShape>
            <RectangleShape raised={1} background="#fff">
                <p>Hey a modal! </p>
                <Button onClick={action("New")}>Modal</Button>
            </RectangleShape>
        </Modal>
      </Grid>
  ));
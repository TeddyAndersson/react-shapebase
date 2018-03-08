import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Grid from '../../elements/Grid';
import Dialog from './Dialog';


storiesOf('Dialog', module)
  .add('Dialog', () => (
      <Grid columns={1}>
        <Dialog>
            <Dialog.Header title={"Hey i'm a dialog!"}/>
            <Dialog.Content text="And I have some dialog content"/>
            <Dialog.Actions affirmative dismissive />
        </Dialog>
      </Grid>
  ));
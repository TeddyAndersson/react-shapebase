import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Chip from './Chip';
import Grid from '../Grid'

storiesOf('Chip', module)
  .add('Chip', () => (
    <Grid columns={1} rowGap={1}>
      <Chip text="Just a chip"/>
      <Chip text="Just a chip with more text"/>
      <Chip text="Wow another chip!"/>
    </Grid>
  ));
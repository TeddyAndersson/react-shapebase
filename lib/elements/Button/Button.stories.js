import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import Grid from '../Grid'

storiesOf('Button', module)
  .add('Button', () => (
    <Grid columns={1} rowGap={1}>
      <Button onClick={action('clicked')} >Default</Button>
      <Button onClick={action('clicked')} primary >Primary</Button>
      <Button onClick={action('clicked')} secondary >Secondary</Button>
      <Button onClick={action('clicked')} disabled>Disabled</Button>
    </Grid>
  ))
  .add('Raised Button', () => (
    <Grid columns={1} rowGap={1}>
      <Button raised={1} onClick={action('clicked')}>Default</Button>
      <Button raised={1} onClick={action('clicked')} primary>Primary</Button>
      <Button raised={1} onClick={action('clicked')} secondary>Secondary</Button>
      <Button raised={1} onClick={action('clicked')} disabled>Disabled</Button>
    </Grid>
  ))
  .add('Circle Button', () => (
    <Grid columns={1} rowGap={1}>
      <Button onClick={action('clicked')} shape='circle'>D</Button>
      <Button onClick={action('clicked')} shape='circle' primary>P</Button>
      <Button onClick={action('clicked')} shape='circle' secondary>S</Button>
      <Button onClick={action('clicked')} shape='circle' disabled>S</Button>
    </Grid>
  ))
  .add('Raised Circle Button', () => (
    <Grid columns={1} rowGap={1}>
      <Button raised={1} onClick={action('clicked')} shape='circle'>D</Button>
      <Button raised={1} onClick={action('clicked')} shape='circle' primary>P</Button>
      <Button raised={1} onClick={action('clicked')} shape='circle' secondary>S</Button>
      <Button raised={1} onClick={action('clicked')} shape='circle' disabled>No</Button>
    </Grid>
  ))
  .add('Square Button', () => (
    <Grid columns={1} rowGap={1}>
      <Button onClick={action('clicked')} shape='square'>D</Button>
      <Button onClick={action('clicked')} shape='square' primary>P</Button>
      <Button onClick={action('clicked')} shape='square' secondary>S</Button>
      <Button onClick={action('clicked')} shape='square' disabled>No</Button>
    </Grid>
  ))
  .add('Raised Suquare Button', () => (
    <Grid columns={1} rowGap={1}>
      <Button raised={1} onClick={action('clicked')} shape='square' >D</Button>
      <Button raised={1} onClick={action('clicked')} shape='square' primary>P</Button>
      <Button raised={1} onClick={action('clicked')} shape='square' secondary>S</Button>
      <Button raised={1} onClick={action('clicked')} shape='square' disabled>No</Button>
    </Grid>
  ));
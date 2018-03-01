import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Grid from '../Grid';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Heading', () => (
    <Grid columns={1}>

        <Heading size={1}>
           Heading size one
        </Heading >

        <Heading size={2}>
            Heading size two
        </Heading >

        <Heading size={3}>
            Heading size three
        </Heading >

        <Heading size={4}>
            Heading size four
        </Heading >

        <Heading size={5}>
            Heading size five
        </Heading >
        
    </Grid>
  ))
  .add('Heading Scaled', () => (
    <Grid columns={1}>

        <Heading size={1} scale={3}>
           Heading size one
        </Heading >

        <Heading size={2} scale={2}>
            Heading size two
        </Heading >

        <Heading size={3} scale={4}>
            Heading size three
        </Heading >

        <Heading size={4} scale={1}>
            Heading size four
        </Heading >

        <Heading size={5}>
            Heading size five
        </Heading >

    </Grid>
  ));
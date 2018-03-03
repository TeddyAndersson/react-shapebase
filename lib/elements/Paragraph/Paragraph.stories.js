import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '../Grid';
import Paragraph from './Paragraph';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

storiesOf('Paragraph', module)
  .add('Paragraph', () => (
    <Grid columns={1}>

        <Paragraph size={1}>
            {lorem}
        </Paragraph>

        <Paragraph weight={'bold'}>
            {lorem}
        </Paragraph>

        <Paragraph italic>
            {lorem}
        </Paragraph>
        
        <Paragraph content={lorem} />
    </Grid>
  ));
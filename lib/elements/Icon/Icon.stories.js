import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Grid from '../Grid';
import Icon from './Icon';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

storiesOf('Icon', module)
  .add('Icon', () => (
    <Grid columns={1} rowGap={1}>
        <Icon name="rocket" />
        <Icon name="smile" />
        <Icon name="check" size={1} color={"tomato"} />
    </Grid>
  ));
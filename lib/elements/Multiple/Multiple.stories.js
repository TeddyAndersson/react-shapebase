import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions/dist/preview';
import Grid from '../Grid';
import Multiple from './Multiple';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

storiesOf('Multiple', module)
  .add('Multiple', () => (
    <Grid columns={1} rowGap={0.5}>
      <Multiple
        onClick={action('Multiple')}
        initalOption={'2'}
        options={[
          {
            id: '1',
            name: '17 eller yngre',
            value: '1',
            label: '17 eller yngre',
          },
          {
            id: '2',
            name: '18-24',
            value: '2',
            label: '18-24',
          },
          {
            id: '3',
            name: '25-31',
            value: '3',
            label: '25-31',
          },
          {
            id: '4',
            name: '32-38',
            value: '4',
            label: '32-38',
          },
        ]}
      />
    </Grid>
  ));
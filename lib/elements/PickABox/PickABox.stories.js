import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions/dist/preview';
import Grid from '../Grid';
import PickABox from './PickABox';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

storiesOf('Pick a box', module)
  .add('Pick a box', () => (
    <Grid columns={1} rowGap={0.5}>
      <PickABox
        onClick={action('Pick a box')}
        options={[
            {
                id: '1',
                name: 'Man',
                value: '1',
                label: 'Man',
                icon: 'mars',
              },
              {
                id: '2',
                name: 'Kvinna',
                value: '2',
                label: 'Kvinna',
                icon: 'venus',
              },
              {
                id: '3',
                name: 'Annat',
                value: '3',
                label: 'Annat',
                icon: 'transgender',
              },
        ]}
      />
      <PickABox
        onClick={action('Pick a box')}
        options={[
            {
                id: '1',
                name: 'Man',
                value: '1',
                label: 'Man',
              },
              {
                id: '2',
                name: 'Kvinna',
                value: '2',
                label: 'Kvinna',
              },
              {
                id: '3',
                name: 'Annat',
                value: '3',
                label: 'Annat',
              },
        ]}
      />
    </Grid>
  ));
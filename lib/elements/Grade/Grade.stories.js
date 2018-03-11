import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions/dist/preview';
import Grid from '../Grid';
import Grade from './Grade';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

storiesOf('Grade', module)
  .add('Grade', () => (
    <Grid columns={1} rowGap={0.5}>
        <Grade
           onClick={action("Grade 5")}
        />

        <Grade
           onClick={action("Grade 10")}
           range={10}
        />
    </Grid>
  ));
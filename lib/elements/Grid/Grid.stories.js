import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Grid from './Grid';

storiesOf('Grid', module)
  .add('Grid Auto', () => (
    <Grid>
        <Grid.Item>
            Item one
        </Grid.Item >
        <Grid.Item>
            Item two
        </Grid.Item>
        <Grid.Item>
            Item three
        </Grid.Item>
        <Grid.Item>
            Item four
        </Grid.Item>
    </Grid>
  ))
  .add('Grid Defined Columns (3)', () => (
    <Grid columns={3}>
        <Grid.Item>
            Item one
        </Grid.Item >
        <Grid.Item>
            Item two
        </Grid.Item>
        <Grid.Item>
            Item three
        </Grid.Item>
        <Grid.Item>
            Item four
        </Grid.Item>
    </Grid>
  ))
  .add('Grid Item Placement', () => (
    <Grid columns={5} rows={3}>
        <Grid.Item rowStart={1} rowEnd={4} columnStart={1} columnEnd={2}>
            Item two
        </Grid.Item>

        <Grid.Item columnStart={2} columnEnd={6}>
            Item one
        </Grid.Item>

        <Grid.Item columnStart={2} columnEnd={4}>
            Item three
        </Grid.Item>
        <Grid.Item columnStart={3} columnEnd={5}>
            Item four
        </Grid.Item>
    </Grid>
  ));
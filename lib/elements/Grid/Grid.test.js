import React from 'react';
import Grid from './Grid'
import renderer from 'react-test-renderer';

test('should render Grid', () => {
  const component = renderer.create(
    <Grid>
      <Grid.Item>
        Item one
      </Grid.Item>
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
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

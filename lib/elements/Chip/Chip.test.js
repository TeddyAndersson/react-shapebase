import React from 'react';
import Chip from './Chip'
import renderer from 'react-test-renderer';

test('should render Chip', () => {
  const component = renderer.create(
    <Chip text="Just a chip"/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

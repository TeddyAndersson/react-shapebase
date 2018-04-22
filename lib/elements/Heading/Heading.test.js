import React from 'react';
import Heading from './Heading'
import renderer from 'react-test-renderer';

test('should render Heading', () => {
  const component = renderer.create(
    <Heading size={1}>
      Heading size one
    </Heading>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

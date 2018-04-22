import React from 'react';
import Grade from './Grade'
import renderer from 'react-test-renderer';

test('should render Grade', () => {
  const component = renderer.create(
    <Grade
      range={10}
    />
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

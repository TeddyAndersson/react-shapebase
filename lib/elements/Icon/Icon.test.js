import React from 'react';
import Icon from './Icon'
import renderer from 'react-test-renderer';

test('should render Icon', () => {
  const component = renderer.create(
    <Icon name="rocket"/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

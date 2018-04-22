import React from 'react';
import Avatar from './Avatar'
import renderer from 'react-test-renderer';

test('should render Avatar', () => {
  const component = renderer.create(
    <Avatar shape="circle" letter={"S"}/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

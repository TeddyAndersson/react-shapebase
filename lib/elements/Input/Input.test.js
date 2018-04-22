import React from 'react';
import Input from './Input'
import renderer from 'react-test-renderer';

test('should render Input', () => {
  const component = renderer.create(
    <Input placeholder={"Just a placeholder"}/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

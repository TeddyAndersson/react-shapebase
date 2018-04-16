import React from 'react';
import Button from './Button'
import renderer from 'react-test-renderer';

test('should render Button', () => {
  const component = renderer.create(
    <Button onClick={()=>{}}>Default</Button>
);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

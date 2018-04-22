import React from 'react';
import Container from './Container'
import renderer from 'react-test-renderer';

test('should render Container', () => {
  const component = renderer.create(
    <Container textAlign="left">
      A container with it's text left aligned
    </Container>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

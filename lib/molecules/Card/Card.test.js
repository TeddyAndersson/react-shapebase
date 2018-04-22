import React from 'react';
import Card from './Card'
import renderer from 'react-test-renderer';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

test('should render Card.Header', () => {
  const component = renderer.create(
    <Card.Header>
      {lorem}
    </Card.Header>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

test('should render Card.Content', () => {
  const component = renderer.create(
    <Card.Content>
      {lorem}
    </Card.Content>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

test('should render Card.Footer', () => {
  const component = renderer.create(
    <Card.Footer>
      {lorem}
    </Card.Footer>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

test('should render Card', () => {
  const component = renderer.create(
    <Card>
      <Card.Header>
        {lorem}
      </Card.Header>
      <Card.Content>
        {lorem}
      </Card.Content>
      <Card.Footer>
        {lorem}
      </Card.Footer>
    </Card>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

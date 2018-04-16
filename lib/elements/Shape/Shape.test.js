import React from 'react';
import RectangleShape from './RectangleShape'
import CircleShape from './CircleShape'
import SquareShape from './SquareShape'
import renderer from 'react-test-renderer';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

test('should render RectangleShape', () => {
  const component = renderer.create(
    <RectangleShape backgroundColor="#eee"/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

test('should render CircleShape', () => {
  const component = renderer.create(
    <CircleShape backgroundColor="#eee"/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

test('should render SquareShape', () => {
  const component = renderer.create(
    <SquareShape backgroundColor="#eee"/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

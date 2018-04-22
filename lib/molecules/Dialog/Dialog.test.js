import React from 'react';
var ReactDOM = require('react-dom')
import Dialog from './Dialog'
import renderer from 'react-test-renderer';
ReactDOM.createPortal = node => node

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

test('should render Dialog.Header', () => {
  const component = renderer.create(
    <Dialog.Header title={"Hey i'm a dialog!"}/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

test('should render Dialog.Content', () => {
  const component = renderer.create(
    <Dialog.Content text="And I have some dialog content"/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

test('should render Dialog.Actions', () => {
  const component = renderer.create(
    <Dialog.Actions affirmative dismissive />
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

test('should render Dialog', () => {
  const component = renderer.create(
    <Dialog>
      <Dialog.Header title={"Hey i'm a dialog!"}/>
      <Dialog.Content text="And I have some dialog content"/>
      <Dialog.Actions affirmative dismissive />
    </Dialog>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

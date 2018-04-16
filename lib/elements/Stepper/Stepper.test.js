import React from 'react';
import Stepper from './Stepper'
import renderer from 'react-test-renderer';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

test('should render Stepper', () => {
  const component = renderer.create(
    <Stepper activeStep={2}>
      <Stepper.Step>
        <p> Yo One </p>
      </Stepper.Step>

      <Stepper.Step>
        <p> Yo Two </p>
      </Stepper.Step>

      <Stepper.Step>
        <p> Yo Three </p>
      </Stepper.Step>
    </Stepper>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

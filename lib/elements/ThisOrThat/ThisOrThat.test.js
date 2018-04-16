import React from 'react';
import ThisOrThat from './ThisOrThat'
import renderer from 'react-test-renderer';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

test('should render ThisOrThat', () => {
  const component = renderer.create(
    <ThisOrThat
      onClick={()=>{}}
      value=""
      options={[
        {
          id: '1',
          name: 'T-rex',
          value: '1',
          label: 'T-rex',
          icon: 'mars',
          background: 'burlywood',
        },
        {
          id: '2',
          name: 'Raptor',
          value: '2',
          label: 'Raptor',
          icon: 'transgender',
          background: 'silver',
        },
      ]}
    />

  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

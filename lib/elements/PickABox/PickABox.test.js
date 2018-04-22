import React from 'react';
import PickABox from './PickABox'
import renderer from 'react-test-renderer';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

test('should render PickABox', () => {
  const component = renderer.create(
    <PickABox
      onClick={()=>{}}
      options={[
        {
          id: '1',
          name: 'Man',
          value: '1',
          label: 'Man',
          icon: 'mars',
        },
        {
          id: '2',
          name: 'Kvinna',
          value: '2',
          label: 'Kvinna',
          icon: 'venus',
        },
        {
          id: '3',
          name: 'Annat',
          value: '3',
          label: 'Annat',
          icon: 'transgender',
        },
      ]}
    />  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

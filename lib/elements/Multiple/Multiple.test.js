import React from 'react';
import Multiple from './Multiple'
import renderer from 'react-test-renderer';

test('should render Multiple', () => {
  const component = renderer.create(
    <Multiple
      onClick={()=>{}}
      initalOption={'2'}
      options={[
        {
          id: '1',
          name: '17 eller yngre',
          value: '1',
          label: '17 eller yngre',
        },
        {
          id: '2',
          name: '18-24',
          value: '2',
          label: '18-24',
        },
        {
          id: '3',
          name: '25-31',
          value: '3',
          label: '25-31',
        },
        {
          id: '4',
          name: '32-38',
          value: '4',
          label: '32-38',
        },
      ]}
    />  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

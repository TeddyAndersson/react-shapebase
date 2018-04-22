import React from 'react';
import Field from './Field'
import renderer from 'react-test-renderer';

test('should render Field', () => {
  const component = renderer.create(
    <Field>
      <Field.Legend content="A field with text input"/>
    </Field>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

import React from 'react';
import Page from './Page'
import renderer from 'react-test-renderer';

test('should render Page', () => {
  const component = renderer.create(
    <Page>
      This is a Page component. It purpose is to cover the with and the hight of a Html Body.
    </Page>);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

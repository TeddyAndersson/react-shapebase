import React from 'react';
import Modal from './Modal'
import renderer from 'react-test-renderer';

test('should render Modal', () => {

  const component = renderer.create(
    <Modal open={false} onClose={()=>{}}>
      <div>X</div>
    </Modal>  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})

import React from 'react';
import { storiesOf, action } from '@storybook/react';
import ShapeBase from './Shape';
import SquareShape from './SquareShape';
import RectangleShape from './RectangleShape';
import CircleShape from './CircleShape';

storiesOf('Shape', module)
  .add('Default Rectangle Shape', () => (
    <RectangleShape backgroundColor="#eee"/>
  ))
  .add('Raised Rectangle Shape', () => (
    <RectangleShape backgroundColor="#eee" raised={1}/>
  ))
  .add('Default Circle Shape', () => (
    <CircleShape backgroundColor="#eee"/>
  ))
  .add('Raised Circle Shape', () => (
    <CircleShape backgroundColor="#eee" raised={1}/>
  ))
  .add('Default Square Shape', () => (
    <SquareShape backgroundColor="#eee"/>
  ))
  .add('Raised Square Shape', () => (
    <SquareShape backgroundColor="#eee" raised={1}/>
  ));
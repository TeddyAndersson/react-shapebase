import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Grid from '../Grid';
import Heading from '../Heading';
import Avatar from './Avatar';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

storiesOf('Avatar', module)
  .add('Avatar', () => (
    <Grid columns={1} rowGap={1}>

        <Grid.Item>
          <Heading size={3}>
              Squared Shaped Avatar
          </Heading>
          <Grid columns={1} rowGap={1}>
            <Grid.Item>
              <Heading size={4}>
                Letter
              </Heading>
              <Avatar letter={"S"}/>
            </Grid.Item>
            <Grid.Item>
              <Heading size={4}>
                Image
              </Heading>
              <Avatar onClick={action('Click Avatar')} src="https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/19250863_10203009590798329_1009250527032059600_o.jpg?oh=e0df7e4c337a4d119794c1678d432b3b&oe=5B496122"/>
            </Grid.Item>
          </Grid>
        </Grid.Item>

        <Grid.Item>
          <Heading size={3}>
              Circle Shaped Avatar
          </Heading>
          <Grid columns={1} rowGap={1}>
            <Grid.Item>
              <Heading size={4}>
                Letter
              </Heading>
              <Avatar shape="circle" letter={"S"}/>
            </Grid.Item>
            <Grid.Item>
              <Heading size={4}>
                Image
              </Heading>
              <Avatar shape="circle" src="https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/19250863_10203009590798329_1009250527032059600_o.jpg?oh=e0df7e4c337a4d119794c1678d432b3b&oe=5B496122"/>
            </Grid.Item>
          </Grid>
        </Grid.Item>

    </Grid>
  ));
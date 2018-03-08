import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Grid from '../../elements/Grid';
import Avatar from '../../elements/Avatar';
import Card from './Card';
import Chip from '../../elements/Chip/Chip';
import Heading from '../../elements/Heading/Heading';
import Button from '../../elements/Button/Button';


const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

storiesOf('Card', module)
  .add('Card', () => (
      <Grid columns={4} columnGap={1}>
        <Card>
          <Grid columns={1} rowGap={1}>
          <Card.Header>
            <Grid columns={4}>
              <Grid.Item columnStart={1} columnEnd={4}>
                <Grid columns={6} columnGap={0.2}>
                  <Grid.Item>
                    <Avatar src="https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/19250863_10203009590798329_1009250527032059600_o.jpg?oh=e0df7e4c337a4d119794c1678d432b3b&oe=5B496122" scale={1} />
                  </Grid.Item>
                  <Grid.Item align="center" columnStart={2} columnEnd={6}>
                    <Grid columns={1}>
                      <Heading size={2} scale={1}> Sweet Card </Heading>
                      <Heading size={3} weight="normal" scale={0.8}> sweet sweet </Heading>
                    </Grid>
                  </Grid.Item>
                </Grid>
              </Grid.Item>
              <Grid.Item align="start" justify="end">
                <Chip text="Label" scale={0.8}/>
              </Grid.Item>
            </Grid>
          </Card.Header>

          <Card.Content>
              {lorem}
          </Card.Content>

          <Card.Footer>
            <Grid columns={9}>
              <Grid.Item columnStart={1} columnEnd={7}>
                Just a footer
              </Grid.Item>
              <Grid.Item columnStart={8} columnEnd={10}>
                <Button primary auto>Action</Button>
              </Grid.Item>
            </Grid>
          </Card.Footer>
          </Grid>
        </Card>
  
        <Card raised={13} backgroundImage="http://diaryofasocialgal.com/wp-content/uploads/2016/03/placeholder.png">
          <Grid columns={1} rowGap={1}>
          <Card.Header>
            <Grid columns={4}>
              <Grid.Item columnStart={1} columnEnd={4}>
                <Grid columns={6} columnGap={0.2}>
                  <Grid.Item>
                    <Avatar src="https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/19250863_10203009590798329_1009250527032059600_o.jpg?oh=e0df7e4c337a4d119794c1678d432b3b&oe=5B496122" scale={1} />
                  </Grid.Item>
                  <Grid.Item align="center" columnStart={2} columnEnd={6}>
                    <Grid columns={1}>
                      <Heading size={2} scale={1}> Sweet Card </Heading>
                      <Heading size={3} weight="normal" scale={0.8}> sweet sweet </Heading>
                    </Grid>
                  </Grid.Item>
                </Grid>
              </Grid.Item>
              <Grid.Item align="start" justify="end">
                <Chip text="Label" scale={0.8}/>
              </Grid.Item>
            </Grid>
          </Card.Header>

          <Card.Content>
            
          </Card.Content>

          <Card.Footer>
            <Grid columns={9}>
              <Grid.Item columnStart={1} columnEnd={7}>
                Just a footer
              </Grid.Item>
              <Grid.Item columnStart={8} columnEnd={10}>
                <Button primary auto>Action</Button>
              </Grid.Item>
            </Grid>
          </Card.Footer>
          </Grid>
        </Card>
      </Grid>
  ));
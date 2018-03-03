import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './Container';
import Grid from '../Grid';
import Heading from '../Heading';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

storiesOf('Container', module)
  .add('Container', () => (
    <Grid columns={1} rowGap={1}>
        <Grid.Item>
            <Heading size={2}>
                Default
            </Heading>

            <Container>
                {lorem}
            </Container>
        </Grid.Item>
        <Grid.Item>
            <Heading size={2}>
                Fluid 
            </Heading>

            <Container fluid>
                {lorem}
            </Container>
        </Grid.Item>
        <Grid.Item>
            <Heading size={2}>
                Text alignment
            </Heading>

            <Container textAlign="left">
                A container with it's text left aligned
            </Container>
            <Container textAlign="center">
                A container with it's text center aligned
            </Container>

            <Container textAlign="right">
                A container with it's text center aligned
            </Container>
            <Heading size={4}>
                Justified
            </Heading>
            <Container textAlign="justify">
                {lorem}
            </Container>
        </Grid.Item>
    </Grid>
  ));
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';

storiesOf('Page', module)
  .add('Page', () => (
    <Page>
        This is a Page component. It purpose is to cover the with and the hight of a Html Body.
    </Page>
  ));
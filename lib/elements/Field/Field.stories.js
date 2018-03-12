import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Grid from '../Grid'
import Field from './Field';
import Input from '../Input/Input';
import ThisOrThat from '../ThisOrThat/ThisOrThat';
import Grade from '../Grade/Grade';

storiesOf('Field', module)
  .add('Field', () => (
    <Grid columns={1} rowGap={1}>
      <Field>
          <Field.Legend content="A field with text input"/>
          <Input placeholder="This is a input field"/>
      </Field>
      <Field error >
          <Field.Legend content="A field with text input"/>
          <Input placeholder="This is a input field"/>
      </Field>
      <Field >
          <Field.Legend content="A field with text input"/>
          <Input onChange={action('Textarea')} type="textarea" placeholder={"A simple textarea"}/>
      </Field>
      <Field>
          <Field.Legend content="What dinosaur do you prefer?"/>
          <ThisOrThat
            onClick={action("This or that")}
            value=""
            options={[
              {
                id: '1',
                name: 'T-rex',
                value: '1',
                label: 'T-rex',
                icon: 'mars',
                background: 'burlywood',
              },
              {
                id: '2',
                name: 'Raptor',
                value: '2',
                label: 'Raptor',
                icon: 'transgender',
                background: 'silver',
              },
            ]}
        />
      </Field>
      <Field>
          <Field.Legend content="What was your feeling of the dinosaur?"/>
          <Grade onClick={action("Grade 5")} />
      </Field>
      <Field>
          <Field.Legend content="How likely are you to recomend the dinousaur to a friend?"/>
          <Grade onClick={action("Grade 10")} range={10}/>
      </Field>
            
    </Grid>
  ));
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Stepper from './Stepper';
import Grid from '../Grid/Grid';

storiesOf('Stepper', module)
  .add('Stepper', () => (
    <Grid>
        <Stepper activeStep={2}>
            <Stepper.Step> 
               <p> Yo One </p>
            </Stepper.Step>

            <Stepper.Step> 
                <p> Yo Two </p>
            </Stepper.Step>

            <Stepper.Step> 
                <p> Yo Three </p>
            </Stepper.Step>
        </Stepper>
    </Grid>
  ));
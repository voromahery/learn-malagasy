import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import NextButton from './NextButton';
import CenterView from '../../../storybook/stories/CenterView/index';

storiesOf('Next button', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('Clickable button', () => (
    <NextButton buttonText={'Next'} handleNext={() => alert('Next')} />
  ))
  .add('Disabled button', () => (
    <NextButton
      buttonText={'Add'}
      disabled={true}
      handleNext={() => alert('Next')}
    />
  ));

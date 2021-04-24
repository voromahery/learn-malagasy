import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView/index';

import ActionButton from './ActionButton';
storiesOf('Action buttons', module)
  .addDecorator(story => (
    <CenterView style={{padding: 23}}>{story()}</CenterView>
  ))
  .add('Learn button', () => (
    <ActionButton text={'Learn'} buttonAction={() => alert('Learn malagasy')} />
  ))
  .add('Pick button', () => (
    <ActionButton
      text={'Pick'}
      buttonAction={() => alert('An item is picked')}
    />
  ))
  .add('Correct button', () => (
    <ActionButton
      text={'Correct'}
      buttonAction={() => alert('You clicked the correct button')}
    />
  ))
  .add('Wrong button', () => (
    <ActionButton
      text={'Wrong'}
      buttonAction={() => alert('You clicked the wrong button')}
    />
  ));

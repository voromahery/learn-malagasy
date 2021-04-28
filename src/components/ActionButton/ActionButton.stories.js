import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView/index';

import ActionButton from './ActionButton';
storiesOf('Action button', module)
  .addDecorator(story => (
    <CenterView style={{padding: 23}}>{story()}</CenterView>
  ))
  .add('Learn button', () => <ActionButton text={'Learn'} />)
  .add('Pick button', () => <ActionButton text={'Pick'} />)
  .add('Correct button', () => <ActionButton text={'Correct'} />)
  .add('Wrong button', () => <ActionButton text={'Wrong'} />);

import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import ActionButton from './ActionButton';
storiesOf('Action buttons', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Clickable button', () => (
    <View>
      <ActionButton
        text={'Learn'}
        buttonAction={() => alert('Learn malagasy')}
      />
      <ActionButton
        text={'Pick'}
        buttonAction={() => alert('An item is picked')}
      />
      <ActionButton text={'Correct'} buttonAction={() => alert('Correct')} />
      <ActionButton text={'Wrong'} buttonAction={() => alert('Wrong')} />
    </View>
  ))
  .add('Disabled button', () => (
    <View>
      <ActionButton
        text={'Learn'}
        disabled={true}
        buttonAction={() => alert('Learn malagasy')}
      />
      <ActionButton
        text={'Pick'}
        disabled={true}
        buttonAction={() => alert('An item is picked')}
      />
      <ActionButton
        text={'Correct'}
        disabled={true}
        buttonAction={() => alert('Correct')}
      />
      <ActionButton
        text={'Wrong'}
        disabled={true}
        buttonAction={() => alert('Wrong')}
      />
    </View>
  ));

import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import Phrase from './Phrase';
import {action} from '@storybook/addon-actions';

storiesOf('FormField', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('With a default value', () => (
    <Phrase editable={false} value={'I am a value'} />
  ))
  .add('Editable input', () => (
    <Phrase onChangeText={() => action('Type some text in this field')} />
  ))
  .add('Disabled input', () => <Phrase editable={false} />);

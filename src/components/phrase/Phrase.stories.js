import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import Phrase from './Phrase';
import {action} from '@storybook/addon-actions';

storiesOf('FormField', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Editable input or default', () => (
    <Phrase onChangeText={() => action('Type some text in this field')} />
  ))
  .add('Single line input', () => <Phrase multiline={false} />)
  .add('Multiline input', () => <Phrase multiline={true} numberOfLines={4} />)
  .add('With a default value and disabled', () => (
    <Phrase editable={false} value={'I am a value that cannot be changed'} />
  ))
  .add('Disabled input', () => <Phrase editable={false} />);

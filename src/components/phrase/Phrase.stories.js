
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Phrase from './Phrase';


storiesOf('FormField', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Adding text', () => <Phrase label= {"Type any text please"}/>)
  .add('With values', () => <Phrase value= {"I am a value"}/>)

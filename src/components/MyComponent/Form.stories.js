
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import FormField from './Form';


storiesOf('FormField', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Adding text', () => <FormField label= {"Type any text please"}/>)
  .add('With values', () => <FormField value= {"I am a value"}/>)

import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('Section heading', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Short text', () => (
    <SectionHeading headingText={'Select a category:'} />
  ))
  .add('Long text', () => (
    <SectionHeading
      text={'You have answered all the questions in this category' /* This one does not work as the prop name is not updated */}
    />
  ));

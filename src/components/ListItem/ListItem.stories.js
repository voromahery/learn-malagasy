import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ListItem from './ListItem';

storiesOf('List item', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Learn item', () => (
    <ListItem
      text={'10 words and phrases'}
      buttonText={'Learn'}
      handlePress={() => alert("Let's learn something")}
    />
  ))
  .add('Pick item', () => (
    <ListItem
      text={'Greetings'}
      buttonText={'Pick'}
      handlePress={() => alert('You picked an item')}
    />
  ))
  .add('Corect item', () => (
    <ListItem
      text={'At the restaurant'}
      buttonText={'Correct'}
      handlePress={() => alert('Correct item')}
    />
  ))
  .add('Wrong item', () => (
    <ListItem
      text={'Food'}
      buttonText={'Wrong'}
      handlePress={() => alert('Wrong item')}
    />
  ));

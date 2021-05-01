import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import List from './List';
import ListItem from '../ListItem/ListItem';
const dataExample = [
  {id: 1, title: 'All', buttonText: 'Pick'},
  {id: 2, title: 'Food', buttonText: 'Pick'},
  {id: 3, title: 'Greetings', buttonText: 'Wrong'},
  {id: 4, title: 'restaurant', buttonText: 'Correct'},
];

storiesOf('List', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Learning list', () => (
    <List
      headingText={'Select a category:'}
      sections={[{data: dataExample}]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ListItem
          key={item.id}
          text={item.title}
          buttonText={'Learn'}
          handlePress={() => alert(item.title)}
        />
      )}
    />
  ))
  .add('Learning incorrect', () => (
    <List
      headingText={'Pick a solution:'}
      sections={[{data: dataExample}]}
      renderItem={({item}) => (
        <ListItem
          disabled={true}
          key={item.id}
          text={item.title}
          buttonText={item.buttonText}
          handlePress={() => alert(item.title)}
        />
      )}
    />
  ));

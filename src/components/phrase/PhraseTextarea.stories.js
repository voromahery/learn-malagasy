import * as React from 'react';
import {useState} from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import {action} from '@storybook/addon-actions';
import PhraseTextarea from './PhraseTextArea';

function Edit() {
  const [text, setText] = React.useState('');
  return (
    <PhraseTextarea
      phrase={text}
      editable={true}
      onChange={input => setText(input)}
    />
  );
}

storiesOf('PhraseTextarea', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Editable input', () => <Edit />)
  .add('With a default value and disabled', () => (
    <PhraseTextarea
      editable={false}
      phrase={'I am a value that cannot be changed'}
    />
  ))
  .add('Disabled input', () => <PhraseTextarea editable={false} />);

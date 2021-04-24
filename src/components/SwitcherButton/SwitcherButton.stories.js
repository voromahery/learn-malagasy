import * as React from 'react';

import {storiesOf} from '@storybook/react-native';
import SwitcherButton from './SwitcherButton';
import CenterView from '../../../storybook/stories/CenterView/index';

storiesOf('Switcher language button', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('Switch into English', () => (
    <SwitcherButton
      selectedLanguage={'ENG'}
      translatorLanguage={'MA'}
      handleSwitch={() => alert('Switched into English')}
    />
  ))
  .add('In darkmode', () => (
    <SwitcherButton
      selectedLanguage={'ENG'}
      translatorLanguage={'MA'}
      darkMode={true}
      handleSwitch={() => alert('Switched into English')}
    />
  ))
  .add('Switch into Malagasy', () => (
    <SwitcherButton
      selectedLanguage={'MA'}
      translatorLanguage={'ENG'}
      handleSwitch={() => alert('Switched into Malagasy')}
    />
  ));

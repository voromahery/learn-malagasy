import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ToolButton from './ToolButton';
import CenterView from '../../../storybook/stories/CenterView/index';
const checkedIcon = require('../../icons/check-icon.png');
const doubleCheckIcon = require('../../icons/double-check-icon.png');
const leftArrowIcon = require('../../icons/left-arrow.png');
const addIcon = require('../../icons/add-icon.png');
const screenModeIcon = require('../../icons/screen-mode-icon.png');
storiesOf('Tool button', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('With add icon', () => (
    <ToolButton
      buttonIcon={addIcon}
      toolAction={() => alert('Added an item')}
    />
  ))
  .add('With check icon', () => (
    <ToolButton buttonIcon={checkedIcon} toolAction={() => alert('Checked')} />
  ))
  .add('With double check icon', () => (
    <ToolButton
      buttonIcon={doubleCheckIcon}
      toolAction={() => alert('Doubled checked')}
    />
  ))
  .add('With left arrow icon', () => (
    <ToolButton
      buttonIcon={leftArrowIcon}
      toolAction={() => alert('Go back')}
    />
  ))
  .add('With screen mode icon', () => (
    <ToolButton
      buttonIcon={screenModeIcon}
      toolAction={() => alert('Swiched mode')}
    />
  ));

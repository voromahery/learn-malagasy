import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ToolButton from './ToolButton';
import CenterView from '../../../storybook/stories/CenterView/index';
import CheckedIcon from '../../icons/check-icon.svg';
import DoubleCheckIcon from '../../icons/double-check-icon.svg';
import LeftArrowIcon from '../../icons/left-arrow.svg';
import AddIcon from '../../icons/add-icon.svg';
import ScreenModeIcon from '../../icons/screen-mode-icon.svg';
storiesOf('Tool button', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('With add icon', () => (
    <ToolButton
      buttonIcon={AddIcon}
      toolAction={() => alert('Added an item')}
    />
  ))
  .add('With check icon', () => (
    <ToolButton buttonIcon={CheckedIcon} toolAction={() => alert('Checked')} />
  ))
  .add('With double check icon', () => (
    <ToolButton
      buttonIcon={DoubleCheckIcon}
      toolAction={() => alert('Doubled checked')}
    />
  ))
  .add('With left arrow icon', () => (
    <ToolButton
      buttonIcon={LeftArrowIcon}
      toolAction={() => alert('Go back')}
    />
  ))
  .add('With screen mode icon', () => (
    <ToolButton
      buttonIcon={ScreenModeIcon}
      toolAction={() => alert('Swiched mode')}
    />
  ));

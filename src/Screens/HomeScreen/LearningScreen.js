import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import PhraseTextarea from '../../components/PhraseTextarea/PhraseTextArea';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';
import ActionButton from '../../components/ActionButton/ActionButton';
import NextButton from '../../components/NextButton/NextButton';
import SwitcherButton from '../../components/SwitcherButton/SwitcherButton';
import ToolButton from '../../components/ToolButton/ToolButton';

import ScreenModeIcon from '../../icons/screen-mode-icon.svg';
import BackIcon from '../../icons/left-arrow.svg';
export default ({route}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ToolButton buttonIcon={BackIcon} />
        <ToolButton buttonIcon={ScreenModeIcon} />
        <SwitcherButton selectedLanguage={'en'} translatorLanguage={'mg'} />
      </View>
      <View>
        <SectionHeading headingText={'Category:'} />
        <Text>Number</Text>
      </View>
      <View>
        <SectionHeading headingText={'The phrase:'} />
        <PhraseTextarea phrase={'UNSET YET'} />
      </View>
      <View>{/* <List renderItem={item => <ListItem />} /> */}</View>
      {/* <Text>{JSON.stringify(route.params.item, null, 2)}</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 56,
  },
});

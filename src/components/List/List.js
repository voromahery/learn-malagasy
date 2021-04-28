// components/Task.js
import * as React from 'react';
import {SafeAreaView, SectionList, StyleSheet} from 'react-native';
import SectionHeader from '../SectionHeading/SectionHeading';
import ListItem from '../ListItem/ListItem';
// import { styles } from '../constants/globalStyles';

export default function List({text, darkMode, sections, renderItem, disabled}) {
  const container = darkMode
    ? [styles.container, styles.darkModeContainer]
    : [styles.container, styles.defaultContainer];

  return (
    <SafeAreaView>
      <SectionHeader text={text} darkMode={darkMode} />
      <SectionList
        sections={sections}
        darkMode={darkMode}
        style={container}
        disabled={disabled}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  defaultContainer: {
    backgroundColor: '#E5E5E5',
  },
  darkModeContainer: {
    backgroundColor: '#1F232C',
  },
});

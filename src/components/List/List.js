// components/Task.js
import * as React from 'react';
import {SafeAreaView, SectionList, FlatList, StyleSheet} from 'react-native';
import SectionHeader from '../SectionHeading/SectionHeading';
import ListItem from '../ListItem/ListItem';
// import { styles } from '../constants/globalStyles';

export default function List({
  headingText,
  darkMode,
  data,
  renderItem,
  disabled,
  keyExtractor,
}) {
  const container = darkMode
    ? [styles.container, styles.darkModeContainer]
    : [styles.container, styles.defaultContainer];

  return (
    <SafeAreaView>
      <SectionHeader headingText={headingText} darkMode={darkMode} />
      <FlatList
        data={data}
        darkMode={darkMode}
        keyExtractor={keyExtractor}
        style={container}
        disabled={disabled}
        renderItem={renderItem /* Using ListItem in here would have been fine as every list contains only list items */}
        keyExtractor={item => item.id /* Duplicate */}
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

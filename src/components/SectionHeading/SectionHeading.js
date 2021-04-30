// components/Task.js
import * as React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function SectionHeading({headingText, darkMode}) {
  const textStyle = darkMode
    ? [styles.darkModeText, styles.commonStyle]
    : [styles.defaultText, styles.commonStyle];
  return (
    <SafeAreaView style={styles.container}>
      <Text darkMode={darkMode} style={textStyle}>
        {headingText}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  commonStyle: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
  },
  defaultText: {
    color: '#111827',
  },
  darkModeText: {
    color: '#FFFFFF',
  },
  container: {
    marginBottom: 15,
  },
});

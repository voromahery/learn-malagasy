// components/Task.js
import * as React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function SectionHeading({text, darkMode}) {
  console.log(text);
  return (
    <SafeAreaView>
      <Text
        darkMode={darkMode}
        style={
          darkMode
            ? [styles.darkModeText, styles.commonStyle]
            : [styles.defaultText, styles.commonStyle]
        }>
        {text}
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
});

// components/Task.js
import * as React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
// import { styles } from '../constants/globalStyles';

const switchIcon = require('../../icons/switch-icon.png');

export default function SwitcherButton({
  selectedLanguage,
  translatorLanguage,
  handleSwitch,
  darkMode,
}) {
  return (
    <View>
      <TouchableOpacity onPress={handleSwitch} style={styles.switcher}>
        <Text
          darkMode={darkMode}
          style={
            darkMode
              ? [styles.darkModeText, styles.commonTextStyle]
              : [styles.defaultText, styles.commonTextStyle]
          }>
          {selectedLanguage}
        </Text>
        <Image
          darkMode={darkMode}
          source={switchIcon}
          style={
            darkMode
              ? [styles.iconStyleDarkMode, styles.iconStyle]
              : styles.iconStyle
          }
          resizeMode="contain"
        />
        <Text
          darkMode={darkMode}
          style={
            darkMode
              ? [styles.darkModeText, styles.commonTextStyle]
              : [styles.defaultText, styles.commonTextStyle]
          }>
          {translatorLanguage}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  switcher: {
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    paddingTop: 13,
    paddingBottom: 13.67,
    paddingLeft: 9.88,
    paddingRight: 11.22,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  commonTextStyle: {
    fontSize: 13,
    lineHeight: 16,
  },
  defaultText: {
    color: '#FFFFFF',
  },
  darkModeText: {
    color: '#111827',
  },
  iconStyleDarkMode: {
    tintColor: '#111827',
  },
  iconStyle: {
    marginLeft: 5.93,
    marginRight: 5.79,
  },
});

// components/Task.js
import * as React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function ToolButton({toolAction, buttonIcon, darkMode}) {
  return (
    <View>
      <TouchableOpacity onPress={toolAction} style={styles.buttonStyle}>
        <Image
          source={buttonIcon}
          resizeMode="contain"
          darkMode={darkMode}
          style={darkMode && styles.iconStyleDarkMode}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#06B6D4',
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyleDarkMode: {
    tintColor: '#111827',
  },
});

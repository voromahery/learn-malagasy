// components/Task.js
import * as React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function ToolButton({toolAction, buttonIcon, darkMode}) {
  let ButtonIcon = buttonIcon;
  return (
    <View>
      <TouchableOpacity onPress={toolAction} style={styles.buttonStyle}>
        <ButtonIcon
          buttonIcon={buttonIcon}
          darkMode={darkMode}
          color={darkMode ? '#111827' : '#FFFFFF'}
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
});

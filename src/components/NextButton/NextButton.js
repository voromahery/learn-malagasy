// components/Task.js
import * as React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function NextButton({buttonText, disabled, handleNext}) {
  const container = disabled
    ? [styles.commonButtonStyle, styles.disabledButton]
    : [styles.commonButtonStyle, styles.defaultButton];

  const textStyle = disabled
    ? [styles.disabledText, styles.commonTextStyle]
    : [styles.defaultText, styles.commonTextStyle];

  return (
    <View style={{alignSelf: 'center'}}>
      <TouchableOpacity
        style={container}
        disabled={disabled}
        onPress={handleNext}>
        <Text style={textStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  commonButtonStyle: {
    borderRadius: 30,
    paddingTop: 11,
    paddingBottom: 12,
    paddingLeft: 27,
    borderColor: '#06B6D4',
    borderWidth: 1,
  },
  commonTextStyle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'left',
  },
  defaultButton: {
    backgroundColor: '#06B6D4',
    paddingRight: 26,
  },
  disabledButton: {
    paddingRight: 31,
  },
  defaultText: {
    color: '#FFFFFF',
  },
  disabledText: {
    color: '#06B6D4',
  },
});

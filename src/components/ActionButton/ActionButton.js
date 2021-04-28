import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import rightArrow from '../../icons/right-arrow.svg';
import correctIcon from '../../icons/check-icon.svg';
import wrongIcon from '../../icons/wrong-icon.svg';

export default function ActionButton({text}) {
  let ButtonIcon;
  let iconColor;
  let textStyle;

  if (text === 'Correct') {
    ButtonIcon = correctIcon;
    textStyle = styles.correctText;
    iconColor = '#06D440';
  } else if (text === 'Wrong') {
    ButtonIcon = wrongIcon;
    textStyle = styles.wrongText;
    iconColor = '#D4068E';
  } else {
    ButtonIcon = rightArrow;
    textStyle = styles.defaultText;
    iconColor = '#06B6D4';
  }

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text style={[styles.commonTextStyle, textStyle]}>{text}</Text>
        <ButtonIcon width="16" height="16" color={iconColor} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  commonTextStyle: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 11,
  },
  defaultText: {
    color: '#06B6D4',
  },
  correctText: {
    color: '#06D440',
  },
  wrongText: {
    color: '#D4068E',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

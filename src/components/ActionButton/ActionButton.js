import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const rightArrow = require('../../icons/right-arrow.png');
const correctIcon = require('../../icons/correct-icon.png');
const wrongIcon = require('../../icons/wrong-icon.png');

export default function ActionButton({text, buttonAction, disabled}) {
  let buttonIcon;
  let iconStyle;
  let textStyle;

  if (text === 'Correct') {
    buttonIcon = correctIcon;
    textStyle = styles.correctText;
    iconStyle = styles.correctIcon;
  } else if (text === 'Wrong') {
    buttonIcon = wrongIcon;
    textStyle = styles.wrongText;
    iconStyle = styles.wrongIcon;
  } else {
    buttonIcon = rightArrow;
    textStyle = styles.defaultText;
    iconStyle = styles.defaultIcon;
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={buttonAction} disabled={disabled}>
        <View style={styles.wrapper}>
          <Text style={[styles.commonTextStyle, textStyle]}>{text}</Text>
          <Image
            source={buttonIcon}
            style={[styles.iconSize, iconStyle]}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  defaultIcon: {
    tintColor: '#06B6D4',
  },
  correctIcon: {
    tintColor: '#06D440',
  },
  wrongIcon: {
    tintColor: '#D4068E',
  },
  iconSize: {
    width: 16,
    height: 16,
  },
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

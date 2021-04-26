// components/Task.js
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ActionButton from '../ActionButton/ActionButton';
// import { styles } from '../constants/globalStyles';

export default function ListItem({
  darkMode,
  text,
  buttonText,
  buttonAction,
  handlePress,
}) {
  console.log(text);
  const containerStyle = darkMode
    ? [styles.wrapper, styles.darkModeWrapper]
    : [styles.wrapper, styles.defaultWrapper];

  const textStyle = darkMode
    ? [styles.textStyle, styles.darkModeText]
    : [styles.textStyle, styles.defaultText];

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handlePress}>
        <View darkMode={darkMode} style={containerStyle}>
          <Text darkMode={darkMode} style={textStyle}>
            {text}
          </Text>
          <ActionButton text={buttonText} buttonAction={buttonAction} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 18,
    paddingLeft: 16,
    paddingRight: 20,
    borderWidth: 1,
  },
  defaultWrapper: {
    backgroundColor: '#FFFFFF',
  },
  darkModeWrapper: {
    backgroundColor: '#111827',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 19,
  },
  defaultText: {
    color: '#111827',
    borderColor: '#E5E5E5',
  },
  darkModeText: {
    color: '#FFFFFF',
    borderColor: '#1F232C',
  },
});

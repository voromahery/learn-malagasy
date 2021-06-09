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
  handlePress,
  disabled,
}) {
  const containerStyle = darkMode
    ? [styles.wrapper, styles.darkModeWrapper]
    : [styles.wrapper, styles.defaultWrapper];

  const textStyle = darkMode
    ? [styles.textStyle, styles.darkModeText]
    : [styles.textStyle, styles.defaultText];
  // What is z in line 30?
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handlePress} z disabled={disabled}>
        <View darkMode={darkMode} style={containerStyle}>
          <Text darkMode={darkMode} style={textStyle}>
            {text}
          </Text>
          <ActionButton text={buttonText} />
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
    borderWidth: 0.5,
  },
  defaultWrapper: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
  },
  darkModeWrapper: {
    backgroundColor: '#111827',
    borderColor: '#1F232C',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 19,
    flexWrap: 'wrap',
    flex: 1,
  },
  defaultText: {
    color: '#111827',
  },
  darkModeText: {
    color: '#FFFFFF',
  },
});

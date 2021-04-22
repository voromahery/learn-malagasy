// components/Task.js
import * as React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Form,
  TextInput,
  SectionList,
  StyleSheet,
} from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Phrase({
  value,
  onChangeText,
  editable,
  numberOfLines,
  multiline,
}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textarea}
          type="text"
          value={value}
          placeholder="Enter here"
          placeholderTextColor={styles.placeholder}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          onChangeText={onChangeText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    marginBottom: 22,
  },
  textarea: {
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 3,
    color: '#111827',
    fontSize: 20,
    opacity: 1,
    height: 100,
  },
  placeholder: {
    opacity: 0.5,
  },
});

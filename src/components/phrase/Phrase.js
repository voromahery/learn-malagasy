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

export default function Phrase({value, onChangeText, editable}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textarea}
          type="text"
          value={value}
          placeholder="Enter here"
          placeholderTextColor={styles.placeholder}
          multiline={true}
          numberOfLines={4}
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
    opacity: 1,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 3,
    color: '#111827',
    fontSize: 20,
  },
  placeholder: {
    opacity: 0.5,
  },
});

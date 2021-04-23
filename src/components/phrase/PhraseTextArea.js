// components/Task.js
import * as React from 'react';
import {SafeAreaView, View, TextInput, StyleSheet} from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function PhraseTextarea({
  phrase,
  editable,
  onChange = () => null,
  darkMode,
}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={darkMode ? styles.darkTextarea : styles.lightTextarea}
          value={phrase}
          placeholder="Enter here"
          placeholderTextColor={'rgba(17, 24, 39, 0.5)'}
          multiline={true}
          editable={editable}
          onChangeText={onChange}
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
  lightTextarea: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    color: '#111827',
    fontSize: 20,
    opacity: 1,
    height: 100,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 3,
  },
  darkTextarea: {
    backgroundColor: '#111827',
    color: '#FFFFFF',
    borderColor: '#1F232C',
    fontSize: 20,
    opacity: 1,
    height: 100,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 3,
  },
});

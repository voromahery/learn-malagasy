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
          style={
            darkMode
              ? [styles.darkTextarea, styles.commonStyle]
              : [styles.lightTextarea, styles.commonStyle]
          }
          value={phrase}
          placeholder="Enter here"
          placeholderTextColor={
            darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(17, 24, 39, 0.5)'
          }
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
  commonStyle: {
    fontSize: 20,
    opacity: 1,
    height: 100,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 3,
  },
  lightTextarea: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    color: '#111827',
  },
  darkTextarea: {
    backgroundColor: '#111827',
    color: '#FFFFFF',
    borderColor: '#1F232C',
  },
});

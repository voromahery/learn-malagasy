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

export default function Phrase({label, value}) {
  console.log(label);
  return (
    <SafeAreaView>
      <View>
        <Text>The phrase in English</Text>
        <TextInput
          style={styles.textarea}
          type="text"
          value={label}
          placeholder={value}
          multiline={true}
          numberOfLines={4}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textarea: {
    backgroundColor: '#FFFFFF',
    // border: '1px solid #E5E5E5',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 3,
  },
});

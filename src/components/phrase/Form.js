// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, Form, TextInput } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function FormField({label, value}) {

  console.log(label);
  return (
    <SafeAreaView >
      <Text>Forms</Text>
      <TextInput type="text" value={label} placeholder={value} />
    </SafeAreaView>
  );
}
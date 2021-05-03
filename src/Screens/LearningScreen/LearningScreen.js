import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {switchLanguage} from '../../redux/actions/language';

import PhraseTextarea from '../../components/PhraseTextarea/PhraseTextArea';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';
import ActionButton from '../../components/ActionButton/ActionButton';
import NextButton from '../../components/NextButton/NextButton';
import SwitcherButton from '../../components/SwitcherButton/SwitcherButton';
import ToolButton from '../../components/ToolButton/ToolButton';

import ScreenModeIcon from '../../icons/screen-mode-icon.svg';
import BackIcon from '../../icons/left-arrow.svg';

import {LANGUAGE_NAMES} from '../../data/dataUtils';

function LearningScreen({route}) {
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGE_NAMES.EN);
  const [translatorLanguage, setTranslatorLanguage] = useState(
    LANGUAGE_NAMES.MG,
  );
  const [headingText, setHeadingText] = useState('Category:');
  const [subHeading, setSubHeading] = useState('The phrase:');
  const [testHeading, setTestHeading] = useState('Pick a solution:');
  const switcher = useSelector(state => state.switchLanguage);

  function changeLanguage() {
    if (switcher) {
      setSelectedLanguage(LANGUAGE_NAMES.EN);
      setTranslatorLanguage(LANGUAGE_NAMES.MG);
      setHeadingText('Category:');
      setSubHeading('The phrase:');
      setTestHeading('Pick a solution:');
    } else {
      setSelectedLanguage(LANGUAGE_NAMES.MG);
      setTranslatorLanguage(LANGUAGE_NAMES.EN);
      setHeadingText('Karazana:');
      setSubHeading('Ilay fehezanteny');
      setTestHeading('Hisafidy valiny:');
    }
    dispatch(switchLanguage(true));
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.button, styles.row]}>
        <View style={styles.buttonSpace}>
          <ToolButton buttonIcon={BackIcon} />
        </View>
        <View style={styles.buttonSpace}>
          <ToolButton buttonIcon={ScreenModeIcon} />
        </View>
        <View style={styles.buttonSpace}>
          <SwitcherButton
            selectedLanguage={selectedLanguage}
            translatorLanguage={translatorLanguage}
            handleSwitch={changeLanguage}
          />
        </View>
      </View>
      <View style={styles.row}>
        <SectionHeading headingText={headingText} />
        <View style={{marginBottom: 15, marginLeft: 2}}>
          <Text style={styles.headingTitle}>Number</Text>
        </View>
      </View>
      <View style={{marginBottom: 37}}>
        <SectionHeading headingText={subHeading} />
        <PhraseTextarea phrase={'UNSET YET'} />
      </View>
      <View style={{marginBottom: 52}}>
        <List
          headingText={testHeading}
          renderItem={({item}) => (
            <ListItem buttonText={switcher ? 'Haka' : 'Pick'} />
          )}
        />
      </View>
      <NextButton buttonText={'Next'} onPress={() => alert('Next')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 56,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  headingTitle: {
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
  container: {
    paddingTop: 35,
    paddingBottom: 66,
    paddingLeft: 23,
  },

  buttonSpace: {
    marginRight: 10,
  },
});
export default LearningScreen;

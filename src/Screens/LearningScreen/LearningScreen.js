import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {utilities} from '../../utils/utils';

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
import {useDispatch} from 'react-redux';

function LearningScreen({route, navigation}) {
  const {
    languageOption,
    selectedLanguage,
    translatorLanguage,
    setSelectedLanguage,
    setTranslatorLanguage,
    answers,
    switcher,
    switchLanguage,
    learningLogics,
  } = utilities();

  const dispatch = useDispatch();
  const [headingText, setHeadingText] = useState('Category:');
  const [subHeading, setSubHeading] = useState('The phrase:');
  const [testHeading, setTestHeading] = useState('Pick a solution:');
  const [buttonName, setButtonName] = useState('Next');

  const optionItem = route.params.item;

  function changeLanguage() {
    if (switcher) {
      setSelectedLanguage(languageOption.EN);
      setTranslatorLanguage(languageOption.MG);
      setHeadingText('Category:');
      setSubHeading('The phrase:');
      setTestHeading('Pick a solution:');
      setButtonName('Next');
    } else {
      setSelectedLanguage(languageOption.MG);
      setTranslatorLanguage(languageOption.EN);
      setHeadingText('Karazana:');
      setSubHeading('Ny fehezanteny');
      setTestHeading('Hisafidy valiny:');
      setButtonName('Manaraka');
    }
    dispatch(switchLanguage(true));
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.button, styles.row]}>
        <View style={styles.buttonSpace}>
          <ToolButton
            buttonIcon={BackIcon}
            toolAction={() => navigation.goBack()}
          />
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
          <Text style={styles.headingTitle}>
            {optionItem.name[selectedLanguage]}
          </Text>
        </View>
      </View>
      <View style={{marginBottom: 37}}>
        <SectionHeading headingText={subHeading} />
        <PhraseTextarea
          // phrase={randomPhrase.name[selectedLanguage]}
          editable={false}
        />
      </View>
      <View style={{marginBottom: 52}}>
        <List
          headingText={testHeading}
          data={answers}
          renderItem={({item}) => (
            <ListItem
              text={item.answer[selectedLanguage]}
              buttonText={switcher ? 'Haka' : 'Pick'}
            />
          )}
        />
      </View>
      <NextButton buttonText={buttonName} handleNext={learningLogics} />
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
    paddingRight: 23,
  },

  buttonSpace: {
    marginRight: 10,
  },
});
export default LearningScreen;

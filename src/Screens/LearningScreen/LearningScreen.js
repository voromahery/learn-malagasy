import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {utilities} from '../../utils/utils';

// Components
import PhraseTextarea from '../../components/PhraseTextarea/PhraseTextArea';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';

// Buttons
import ActionButton from '../../components/ActionButton/ActionButton';
import NextButton from '../../components/NextButton/NextButton';
import SwitcherButton from '../../components/SwitcherButton/SwitcherButton';
import ToolButton from '../../components/ToolButton/ToolButton';
import ScreenModeIcon from '../../icons/screen-mode-icon.svg';
import BackIcon from '../../icons/left-arrow.svg';

function LearningScreen({route, navigation}) {
  const {
    phrasesList,
    languageOption,
    selectedLanguage,
    translatorLanguage,
    setSelectedLanguage,
    setTranslatorLanguage,
    switcher,
    switchLanguage,
    isDisabled,
    setIsDisabled,
  } = utilities();

  const [randomPhrase, setRandomPhrase] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  const [answers, setAnswers] = useState('');

  const dispatch = useDispatch();
  const [headingText, setHeadingText] = useState('Category:');
  const [subHeading, setSubHeading] = useState('The phrase:');
  const [testHeading, setTestHeading] = useState('Pick a solution:');
  const [buttonName, setButtonName] = useState('Next');
  const optionItem = route.params.item;

  // Get random numbers
  let randomIndex1 = Math.floor(Math.random() * optionItem.phrasesIds.length);
  let randomIndex2 = Math.floor(Math.random() * optionItem.phrasesIds.length);
  let randomIndex3 = Math.floor(Math.random() * optionItem.phrasesIds.length);
  let randomIndex4 = Math.floor(Math.random() * optionItem.phrasesIds.length);

  // Get 4 random phrases
  const phrase1 = phrasesList.find(
    phrase => phrase.id === optionItem.phrasesIds[randomIndex1],
  );
  const phrase2 = phrasesList.find(
    phrase => phrase.id === optionItem.phrasesIds[randomIndex2],
  );
  const phrase3 = phrasesList.find(
    phrase => phrase.id === optionItem.phrasesIds[randomIndex3],
  );
  const phrase4 = phrasesList.find(
    phrase => phrase.id === optionItem.phrasesIds[randomIndex4],
  );
  console.log(answers, randomPhrase.answer);
  function learningLogics() {
    const answersArray = [
      {
        answer: phrase1.name,
        phraseId: phrase1.id,
        id: 1,
      },
      {
        answer: phrase2.name,
        phraseId: phrase2.id,
        id: 2,
      },
      {
        answer: phrase3.name,
        phraseId: phrase3.id,
        id: 3,
      },
      {
        answer: phrase4.name,
        phraseId: phrase4.id,
        id: 4,
      },
    ];

    const randomizingAnswer = answersArray.sort(
      (a, b) => a.answer.mg.length - b.answer.en.length,
    );
    setAnswers(randomizingAnswer);
    setCorrectAnswer({
      answer: phrase1.name,
      id: phrase1.id,
    });
    setIsDisabled(false);
    setRandomPhrase({answer: phrase1.name, id: phrase1.id});
  }

  useEffect(() => {
    learningLogics();
  }, []);

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

  function pickAnAnswer({text}) {
    console.log(text);
    setIsDisabled(true);
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
          phrase={randomPhrase && randomPhrase.answer[translatorLanguage]}
          editable={false}
        />
      </View>
      <View style={{marginBottom: 52}}>
        <List
          headingText={testHeading}
          data={answers}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <ListItem
                disabled={isDisabled}
                key={item.id}
                id={item.id}
                text={item.answer[selectedLanguage]}
                buttonText={switcher ? 'Haka' : 'Pick'}
                handlePress={pickAnAnswer}
              />
            );
          }}
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

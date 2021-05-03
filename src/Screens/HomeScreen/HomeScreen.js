import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {switchLanguage} from '../../redux/actions/language';

import ToolButton from '../../components/ToolButton/ToolButton';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';
import SwitcherButton from '../../components/SwitcherButton/SwitcherButton';
import CheckedIcon from '../../icons/check-icon.svg';
import DoubleCheckIcon from '../../icons/double-check-icon.svg';
import AddIcon from '../../icons/add-icon.svg';
import ScreenModeIcon from '../../icons/screen-mode-icon.svg';

import {LANGUAGE_NAMES} from '../../data/dataUtils';
import categoriesData from '../../data/categories.json';
import {useNavigation} from '@react-navigation/native';

function HomeScreen({navigation}) {
  // console.log(navigation, 'NAVIGATION');
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGE_NAMES.EN);
  const [translatorLanguage, setTranslatorLanguage] = useState(
    LANGUAGE_NAMES.MG,
  );
  const [headingText, setHeadingText] = useState('Select a category:');

  const switcher = useSelector(state => state.switchLanguage);

  // console.log(categoriesData);

  function changeLanguage() {
    if (switcher) {
      setSelectedLanguage(LANGUAGE_NAMES.EN);
      setTranslatorLanguage(LANGUAGE_NAMES.MG);
      setHeadingText('Select a category:');
    } else {
      setSelectedLanguage(LANGUAGE_NAMES.MG);
      setTranslatorLanguage(LANGUAGE_NAMES.EN);
      setHeadingText('Hifidy karazana:');
    }
    dispatch(switchLanguage(true));
  }

  // function screenNavigation({item}) {
  //   navigation?.navigate('Learning');
  //   console.log(item, 'NAVIGATED');
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.button}>
          <View style={styles.buttonSpace}>
            <ToolButton buttonIcon={AddIcon} toolAction={() => alert('ADD')} />
          </View>
          <View style={styles.buttonSpace}>
            <SwitcherButton
              selectedLanguage={selectedLanguage}
              translatorLanguage={translatorLanguage}
              darkMode={false}
              handleSwitch={changeLanguage}
            />
          </View>
          <View style={styles.buttonSpace}>
            <ToolButton
              buttonIcon={CheckedIcon}
              toolAction={() => alert('Checked')}
            />
          </View>
          <View style={styles.buttonSpace}>
            <ToolButton
              buttonIcon={DoubleCheckIcon}
              toolAction={() => alert('Finished')}
            />
          </View>
          <View style={styles.buttonSpace}>
            <ToolButton
              buttonIcon={ScreenModeIcon}
              toolAction={() => alert('Switched mode')}
            />
          </View>
        </View>
      </View>
      <View>
        <List
          headingText={headingText}
          data={categoriesData.categories}
          // darkMode={darkMode}
          renderItem={({item}) => {
            return (
              <ListItem
                text={item.name[selectedLanguage]}
                buttonText={switcher ? 'Hianatra' : 'Learn'}
                handlePress={() =>
                  navigation.navigate('LearningScreen', {item})
                }
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingBottom: 66,
    paddingLeft: 23,
    paddingRight: 23,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 56,
  },
  buttonSpace: {
    marginRight: 10,
  },
});

export default HomeScreen;

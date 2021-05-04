import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {switchLanguage} from '../redux/actions/language';
import phrasesData from '../data/phrases.json';
import categoriesData from '../data/categories.json';
import {LANGUAGE_NAMES} from '../data/dataUtils';

export const utilities = () => {
  const languageOption = LANGUAGE_NAMES;
  const categoriesList = categoriesData.categories;
  const phrasesList = phrasesData.phrases;
  const [selectedLanguage, setSelectedLanguage] = useState(languageOption.EN);
  const [translatorLanguage, setTranslatorLanguage] = useState(
    LANGUAGE_NAMES.MG,
  );

  const switcher = useSelector(state => state.switchLanguage);

  const [randomPhrase, setRandomPhrase] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState({});

  //   const phrasesList = phrasesData.phrases.filter(
  //     (phrase, index) => phrase.id === optionItem.phrasesIds[index],
  //   );

  // const phraseToDisplay = phrasesData.phrases.find(
  //   phrase => phrase.id === randomPhrase.id,
  // );

  const [answers, setAnswers] = useState('');

  // Get random numbers
  const randomIndex1 = Math.floor(Math.random() * categoriesList.length);
  const randomIndex2 = Math.floor(Math.random() * categoriesList.length);
  const randomIndex3 = Math.floor(Math.random() * categoriesList.length);
  const randomIndex4 = Math.floor(Math.random() * categoriesList.length);

  // Created 4 answers to choose

  const checkId1 = phrasesData.phrases.filter(
    item => item.id === '###introductions###',
  );

  console.log(correctAnswer.id, checkId1);

  function learningLogics() {
    setAnswers([
      {
        answer: categoriesList[randomIndex1].name,
        id: categoriesList[randomIndex1].id,
      },
      {
        answer: categoriesList[randomIndex2].name,
        id: categoriesList[randomIndex2].id,
      },
      {
        answer: categoriesList[randomIndex3].name,
        id: categoriesList[randomIndex3].id,
      },
      {
        answer: categoriesList[randomIndex4].name,
        id: categoriesList[randomIndex4].id,
      },
    ]);
    setCorrectAnswer({
      answer: categoriesList[randomIndex1].name,
      id: categoriesList[randomIndex1].id,
    });
    const randomCategory = categoriesList[randomIndex1].phrasesIds;
    setRandomPhrase(randomCategory);
  }

  useEffect(() => {
    learningLogics();
  }, []);

  return {
    selectedLanguage,
    setSelectedLanguage,
    setTranslatorLanguage,
    translatorLanguage,
    randomPhrase,
    correctAnswer,
    answers,
    switcher,
    switchLanguage,
    learningLogics,
    languageOption,
  };
};

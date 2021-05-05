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
  const [isDisabled, setIsDisabled] = useState(false);
  const [translatorLanguage, setTranslatorLanguage] = useState(
    LANGUAGE_NAMES.MG,
  );

  const switcher = useSelector(state => state.switchLanguage);

  return {
    selectedLanguage,
    setSelectedLanguage,
    setTranslatorLanguage,
    translatorLanguage,
    switcher,
    switchLanguage,
    categoriesList,
    phrasesList,
    languageOption,
    isDisabled,
    setIsDisabled,
  };
};

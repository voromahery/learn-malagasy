function switchLanguage(state = false, action) {
  switch (action.type) {
    case 'SWITCH_LANGUAGE':
      return !state;
    default:
      return state;
  }
}

export default switchLanguage;

function categoriesList(state = [], action) {
  switch (action.type) {
    case 'CATEGORY':
      return {...state, categoriesList: action.payload};
    default:
      return state;
  }
}

export default categoriesList;

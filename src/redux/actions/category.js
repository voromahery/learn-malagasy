import categoriesList from '../../data/categories.json';

export function categoriesData() {
  return async dispatch => {
    dispatch({
      type: 'CATEGORY',
      payload: categoriesList,
    });
  };
}

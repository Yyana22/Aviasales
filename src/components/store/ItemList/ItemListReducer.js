const defaultState = {
  loading: false,
  step: 5,
  tickets: [],
  error: false,
};

export const reducerItemList = (state = defaultState, action = {}) => {
  //   console.log(action);
  switch (action.type) {
    case 'ADD_TICKETS_START':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_NEW_TICKETS':
      return {
        ...state,
        tickets: [...action.tickets],
        loading: true,
        step: state.step + 5,
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const defaultState = {
  loading: false,
  tickets: [],
  error: false,
};

export const reducerItemList = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'ADD_TICKETS_START':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_NEW_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
        loading: true,
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

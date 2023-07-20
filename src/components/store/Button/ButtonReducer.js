const defaultState = {
  step: 5,
};

export const reducerButton = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'REMAKE_STEP':
      return {
        ...state,
        step: state.step + 5,
      };
    default:
      return state;
  }
};

const defaultState = {
  lowCost: true,
  faster: false,
  optimal: false,
};
export const reducerTabs = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LOW_COST':
      if (!state.lowCost) {
        return {
          lowCost: true,
          faster: false,
          optimal: false,
        };
      } else {
        return {
          lowCost: false,
          faster: false,
          optimal: false,
        };
      }
    case 'SET_FASTER':
      if (!state.faster) {
        return {
          lowCost: false,
          faster: true,
          optimal: false,
        };
      } else {
        return {
          lowCost: false,
          faster: false,
          optimal: false,
        };
      }
    case 'SET_OPTIMAL':
      if (!state.optimal) {
        return {
          lowCost: false,
          faster: false,
          optimal: true,
        };
      } else {
        return {
          lowCost: false,
          faster: false,
          optimal: false,
        };
      }

    default:
      return state;
  }
};

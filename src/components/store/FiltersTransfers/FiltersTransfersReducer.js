const defaultState = {
  allTickets: true,
  notTransfer: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
};

const reducerFiltersTransfers = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ALL_TIKETS':
      if (!state.allTickets) {
        return { allTickets: true, notTransfer: true, oneTransfer: true, twoTransfer: true, threeTransfer: true };
      } else {
        return {
          allTickets: !state.allTickets,
          notTransfer: !state.notTransfer,
          oneTransfer: !state.oneTransfer,
          twoTransfer: !state.twoTransfer,
          threeTransfer: !state.threeTransfer,
        };
      }
    case 'SET_NOT_TRANSFER':
      if (!state.notTransfer && state.oneTransfer && state.twoTransfer && state.threeTransfer) {
        return {
          ...state,
          notTransfer: !state.notTransfer,
          allTickets: true,
        };
      } else {
        return {
          ...state,
          notTransfer: !state.notTransfer,
          allTickets: false,
        };
      }
    case 'SET_ONE_TRANSFER':
      if (state.notTransfer && !state.oneTransfer && state.twoTransfer && state.threeTransfer) {
        return {
          ...state,
          oneTransfer: !state.oneTransfer,
          allTickets: true,
        };
      } else {
        return {
          ...state,
          oneTransfer: !state.oneTransfer,
          allTickets: false,
        };
      }
    case 'SET_TWO_TRANSFER':
      if (state.notTransfer && state.oneTransfer && !state.twoTransfer && state.threeTransfer) {
        return {
          ...state,
          twoTransfer: !state.twoTransfer,
          allTickets: true,
        };
      } else {
        return {
          ...state,
          twoTransfer: !state.twoTransfer,
          allTickets: false,
        };
      }
    case 'SET_THREE_TRANSFER':
      if (state.notTransfer && state.oneTransfer && state.twoTransfer && !state.threeTransfer) {
        return {
          ...state,
          threeTransfer: !state.threeTransfer,
          allTickets: true,
        };
      } else {
        return {
          ...state,
          threeTransfer: !state.threeTransfer,
          allTickets: false,
        };
      }
    default:
      return state;
  }
};

export default reducerFiltersTransfers;

import TiketsServise from '../../../api-services';
const tiketsServise = new TiketsServise();
export const addTicketsStarted = () => {
  return {
    type: 'ADD_TICKETS_START',
  };
};
export const addNewTickets = (tickets) => {
  const step = 5;
  return {
    type: 'ADD_NEW_TICKETS',
    tickets: [...tickets],
    step,
  };
};

export const setLoading = () => ({
  type: 'SET_LOADING',
});
export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});

export const getNewTickets = () => async (dispatch) => {
  dispatch(addTicketsStarted());
  try {
    if (tiketsServise.searchId === null) {
      await tiketsServise.getSearchId();
    }
    const result = await tiketsServise.getPackTikets();
    const { tickets, stop } = result;
    dispatch(addNewTickets(tickets));
    if (stop) {
      dispatch(setLoading());
    }

    if (!stop) {
      dispatch(getNewTickets());
    }
  } catch (error) {
    if (error instanceof TypeError) {
      dispatch(getNewTickets());
    } else {
      dispatch(setError(error));
    }
  }
};

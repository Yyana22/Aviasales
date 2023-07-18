import { combineReducers } from 'redux';

import { reducerTabs } from './Tabs/TabsReduser';
import { reducerFiltersTransfers } from './FiltersTransfers/FiltersTransfersReducer';

export const mainReducer = combineReducers({
  filters: reducerFiltersTransfers,
  tabs: reducerTabs,
});

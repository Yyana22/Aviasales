import { combineReducers } from 'redux';

import { reducerTabs } from './Tabs/TabsReduser';
import reducerFiltersTransfers from './FiltersTransfers/FiltersTransfersReducer';
import { reducerItemList } from './ItemList/ItemListReducer';
import { reducerButton } from './Button/ButtonReducer';
export const mainReducer = combineReducers({
  filters: reducerFiltersTransfers,
  tabs: reducerTabs,
  itemList: reducerItemList,
  button: reducerButton,
});

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { remakeStep } from '../store/Button/ButtonAction';
import { getNewTickets } from '../store/ItemList/ItemListActions';
import Item from '../Item/Item';

import classes from './ItemList.module.scss';
const ItemList = () => {
  const dispatch = useDispatch();
  let propsItem = useSelector((state) => state.itemList);
  useEffect(() => {
    dispatch(getNewTickets());
  }, []);
  let step = useSelector((state) => state.button.step);
  let filters = useSelector((state) => state.filters);
  let tabs = useSelector((state) => state.tabs);
  let viewTickets = [];
  //!filters
  let searchFilters = Object.entries(filters).filter((item) => {
    return item[1] ? item[0] : null;
  });
  let selectedFilters = [];
  for (let i = 0; i < searchFilters.length; i++) {
    selectedFilters.push(searchFilters[i][0]);
  }
  //!filter viewTickets
  if (selectedFilters.includes('allTickets') === -1) {
    if (selectedFilters.includes('notTransfer')) {
      let filtred = propsItem.tickets.filter((item) => console.log(item));
      viewTickets = [viewTickets, ...filtred];
    } else if (selectedFilters.includes('oneTransfer')) {
      let filtred = propsItem.tickets.filter(
        (item) => item.segments[0].stops.length === 1 || item.segments[1].stops.length === 1
      );
      viewTickets = [viewTickets, ...filtred];
    } else if (selectedFilters.includes('twoTransfer')) {
      let filtred = propsItem.tickets.filter(
        (item) => item.segments[0].stops.length === 2 || item.segments[1].stops.length === 2
      );
      viewTickets = [viewTickets, ...filtred];
    } else if (selectedFilters.includes('threeTransfer')) {
      let filtred = propsItem.tickets.filter(
        (item) => item.segments[0].stops.length === 3 || item.segments[1].stops.length === 3
      );
      viewTickets = [viewTickets, ...filtred];
    }
  } else {
    viewTickets = [...propsItem.tickets];
  }
  //!tabs
  if (tabs.lowCost) {
    viewTickets.sort(function (a, b) {
      if (a.price < b.price) {
        return -1;
      } else {
        return 1;
      }
    });
  } else if (tabs.faster) {
    viewTickets.sort(function (a, b) {
      if (a.segments[0].duration < b.segments[0].duration && a.segments[1].duration < b.segments[1].duration) {
        return -1;
      } else {
        return 1;
      }
    });
  } else if (tabs.optimal) {
    viewTickets.sort(function (a) {
      if ((a.segments[0].stops.length == 0 || a.segments[1].stops.length == 0) && a.price < 30000) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  if (viewTickets) {
    let id = 0;
    let elements = viewTickets.slice(0, step).map((item) => {
      id += 1;
      return (
        <li key={id} className={classes['item']}>
          <Item props={item}></Item>
        </li>
      );
    });
    return (
      <div>
        <ul className={classes['list']}>{elements}</ul>
        <button className={classes.appBtn} onClick={() => dispatch(remakeStep())}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      </div>
    );
  }
};

export default ItemList;

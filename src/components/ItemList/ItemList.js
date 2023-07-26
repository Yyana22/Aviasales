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
  let idFiltersArr = [];
  let selectedFilters = [];

  selectedFilters = searchFilters.filter((item) => {
    return item[1] ? item[0] : null;
  });
  selectedFilters.filter((item) => {
    if (item[0] === 'allTickets') {
      return idFiltersArr.push(-1);
    } else if (item[0] === 'notTransfer') {
      return idFiltersArr.push(0);
    } else if (item[0] === 'oneTransfer') {
      return idFiltersArr.push(1);
    } else if (item[0] === 'twoTransfer') {
      return idFiltersArr.push(2);
    }
    return idFiltersArr.push(3);
  });
  //!filter viewTickets
  const funkFilterViewTickets = (idFiltersArr) => {
    if (!idFiltersArr.includes(-1)) {
      let newArr = propsItem.tickets.filter((item) => {
        return (
          idFiltersArr.includes(item.segments[0].stops.length) && idFiltersArr.includes(item.segments[1].stops.length)
        );
      });
      return [...newArr];
    }
    return [...propsItem.tickets];
  };

  viewTickets = funkFilterViewTickets(idFiltersArr);
  const sortLowCost = (tickets) => {
    return tickets.sort(function (a, b) {
      if (a.price < b.price) {
        return -1;
      } else {
        return 1;
      }
    });
  };
  const sortFaster = (tickets) => {
    return tickets.sort(function (a, b) {
      if (a.segments[0].duration < b.segments[0].duration && a.segments[1].duration < b.segments[1].duration) {
        return -1;
      } else {
        return 1;
      }
    });
  };

  const sortOptimal = (tickets) => {
    return tickets.sort(function (a) {
      if ((a.segments[0].stops.length == 0 || a.segments[1].stops.length == 0) && a.price < 30000) {
        return -1;
      } else {
        return 1;
      }
    });
  };

  //!tabs
  if (tabs.lowCost) {
    viewTickets = sortLowCost(viewTickets);
  } else if (tabs.faster) {
    viewTickets = sortFaster(viewTickets);
  } else if (tabs.optimal) {
    viewTickets = sortOptimal(viewTickets);
  }

  if (viewTickets) {
    let elements = viewTickets.slice(0, step).map((item) => {
      return (
        <li key={Math.random() * 1000000} className={classes['item']}>
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
  return null;
};

export default ItemList;

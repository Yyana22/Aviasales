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
  if (propsItem.tickets) {
    let id = 0;
    let elements = propsItem.tickets.slice(0, step).map((item) => {
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

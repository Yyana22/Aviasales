import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import * as actions from '../store/ItemList/ItemListActions';
import { getNewTickets } from '../store/ItemList/ItemListActions';
import Item from '../Item/Item';

import classes from './ItemList.module.scss';
const ItemList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('ADSSAA');
    dispatch(getNewTickets());
  }, []);
  let propsBtn = useSelector((state) => state.itemList);
  if (propsBtn.tickets) {
    let id = 0;
    let elements = propsBtn.tickets.map((item) => {
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
        <button className={classes.appBtn} onClick={() => getNewTickets()}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      </div>
    );
  }
};

export default ItemList;

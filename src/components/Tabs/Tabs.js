// import { useState, useRef } from 'react';
import classes from './Tabs.module.scss';
const Tabs = () => {
  return (
    <div className={classes['filters-sales']}>
      <ul className={classes['filters-sales-list']}>
        <li className={classes['filters-sales-item-active']}>САМЫЙ ДЕШЕВЫЙ</li>
        <li className={classes['filters-sales-item']}>САМЫЙ БЫСТРЫЙ</li>
        <li className={classes['filters-sales-item']}>ОПТИМАЛЬНЫЙ</li>
      </ul>
    </div>
  );
};

export default Tabs;

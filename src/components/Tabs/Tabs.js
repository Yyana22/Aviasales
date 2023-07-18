// import { useState, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/Tabs/TabsActions';

import classes from './Tabs.module.scss';
const Tabs = ({ state, setLowCost, setFaster, setOptimal }) => {
  console.log(state);
  return (
    <div className={classes['filters-sales']}>
      <ul className={classes['filters-sales-list']}>
        <li
          className={state.lowCost ? classes['filters-sales-item__active'] : classes['filters-sales-item']}
          onClick={() => setLowCost()}
        >
          САМЫЙ ДЕШЕВЫЙ
        </li>
        <li
          className={state.faster ? classes['filters-sales-item__active'] : classes['filters-sales-item']}
          onClick={() => setFaster()}
        >
          САМЫЙ БЫСТРЫЙ
        </li>
        <li
          className={state.optimal ? classes['filters-sales-item__active'] : classes['filters-sales-item']}
          onClick={() => setOptimal()}
        >
          ОПТИМАЛЬНЫЙ
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(Tabs);

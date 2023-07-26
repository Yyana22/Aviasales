// import { useState, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/Tabs/TabsActions';

import classes from './Tabs.module.scss';
const Tabs = ({ state, setLowCost, setFaster, setOptimal }) => {
  return (
    <div className={classes['filters-sales']}>
      <ul className={classes['filters-sales-list']}>
        <li className={classes['filters-sales-item']}>
          <button
            className={
              state.tabs.lowCost
                ? `${classes['filters-sales-button__active']} ${classes['one-btn']}`
                : `${classes['filters-sales-button']} ${classes['one-btn']}`
            }
            disabled={state.tabs.lowCost}
            onClick={() => setLowCost()}
          >
            самый дешевый
          </button>
        </li>
        <li className={classes['filters-sales-item']}>
          <button
            className={
              state.tabs.faster
                ? `${classes['filters-sales-button__active']} ${classes['two-btn']}`
                : `${classes['filters-sales-button']} ${classes['two-btn']}`
            }
            disabled={state.tabs.faster}
            onClick={() => setFaster()}
          >
            самый быстрый
          </button>
        </li>
        <li className={classes['filters-sales-item']}>
          <button
            className={
              state.tabs.optimal
                ? `${classes['filters-sales-button__active']} ${classes['three-btn']}`
                : `${classes['filters-sales-button']} ${classes['three-btn']}`
            }
            disabled={state.tabs.optimal}
            onClick={() => setOptimal()}
          >
            оптимальный
          </button>
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

// import { useState, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/FiltersTransfers/FiltersTransfersActions';

import classes from './FiltersTransfers.module.scss';

const FiltersTransfers = ({
  state,
  setAllTikets,
  setNotTransfer,
  setOneTransfer,
  setTwoTransfer,
  setThreeTransfer,
}) => {
  return (
    <div className={classes['filters-transfers']}>
      <ul className={classes['list-filters']}>
        <li className={classes['item-filter-title']}>
          <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        </li>
        <li className={classes['item-filter']}>
          <input type="checkbox" id="all" name="all" checked={state.allTickets} onChange={() => setAllTikets()} />
          <label htmlFor="all">Все</label>
        </li>
        <li className={classes['item-filter']}>
          <input
            type="checkbox"
            id="withoutTransfers"
            name="withoutTransfers"
            checked={state.notTransfer}
            onChange={() => setNotTransfer()}
          />
          <label htmlFor="withoutTransfers">Без пересадок</label>
        </li>
        <li className={classes['item-filter']}>
          <input
            type="checkbox"
            id="oneTransfer"
            name="oneTransfer"
            checked={state.oneTransfer}
            onChange={() => setOneTransfer()}
          />
          <label htmlFor="oneTransfer">1 пересадка</label>
        </li>
        <li className={classes['item-filter']}>
          <input
            type="checkbox"
            id="twoTransfer"
            name="twoTransfer"
            checked={state.twoTransfer}
            onChange={() => setTwoTransfer()}
          />
          <label htmlFor="twoTransfer">2 пересадки</label>
        </li>
        <li className={classes['item-filter']}>
          <input
            type="checkbox"
            id="threeTransfer"
            name="threeTransfer"
            checked={state.threeTransfer}
            onChange={() => setThreeTransfer()}
          />
          <label htmlFor="threeTransfer">3 пересадки</label>
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

export default connect(mapStateToProps, actions)(FiltersTransfers);

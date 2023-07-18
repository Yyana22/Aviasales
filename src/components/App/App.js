// import { useState, useRef } from 'react';
import Tabs from '../Tabs/Tabs';
import FiltersTransfers from '../FiltersTransfers/FiltersTransfers';
import ItemList from '../ItemList/ItemList';
import logo from '../../img/Logo.svg';

import classes from './App.module.scss';
const App = () => {
  return (
    <div className={classes['aviasales-app']}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" className={classes['logo-img']}></img>
      </div>
      <main className={classes.main}>
        <FiltersTransfers></FiltersTransfers>
        <div className={classes.wrapList}>
          <Tabs></Tabs>
          <ItemList></ItemList>
          <button className={classes.appBtn}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
        </div>
      </main>
    </div>
  );
};

export default App;

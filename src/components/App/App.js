// import { memo } from 'react';
import { connect } from 'react-redux';

import Tabs from '../Tabs/Tabs';
import FiltersTransfers from '../FiltersTransfers/FiltersTransfers';
import ItemList from '../ItemList/ItemList';
import logo from '../../img/Logo.svg';
import * as actions from '../store/ItemList/ItemListActions';

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
        </div>
      </main>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(App);

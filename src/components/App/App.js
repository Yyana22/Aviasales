import { connect, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

import Tabs from '../Tabs/Tabs';
import FiltersTransfers from '../FiltersTransfers/FiltersTransfers';
import ItemList from '../ItemList/ItemList';
import logo from '../../img/Logo.svg';
import * as actions from '../store/ItemList/ItemListActions';

import classes from './App.module.scss';
const App = () => {
  let load = useSelector((state) => state.itemList.loading);
  console.log(load);
  let loader = load ? <LoadingOutlined className={classes.load}></LoadingOutlined> : null;
  return (
    <div className={classes['aviasales-app']}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" className={classes['logo-img']}></img>
      </div>
      {loader}
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

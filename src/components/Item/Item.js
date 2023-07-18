// import { useState, useRef } from 'react';
import classes from './Item.module.scss';

const Item = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes['item-saleLogo']}>
        <p>{props.props.sale}</p>
        <img src="#" alt={props.props.logo} />
      </div>
      <div className={classes['item-body']}>
        <div className={classes['item-body-head']}>
          <div className={classes['item-body-way']}>
            {props.props.wayOut} - {props.props.wayIn}
          </div>
          <div>В ПУТИ</div>
          <div className={classes['item-body-transfers-count']}>{props.props.transfers.length} пересадки</div>
        </div>
        <div className={classes['item-body-info']}>
          <div className={classes['item-body-time']}>
            {props.props.timeOut} - {props.props.timeIn}
          </div>
          <div>{props.props.time}</div>
          <div className={classes['item-body-transfers-count']}>{props.props.transfers.join(' ')}</div>{' '}
        </div>
        <div className={classes['item-body-head']}>
          <div className={classes['item-body-way']}>
            {props.props.wayOut} - {props.props.wayIn}
          </div>
          <div>В ПУТИ</div>
          <div className={classes['item-body-transfers-count']}>{props.props.transfers.length} пересадки</div>
        </div>
        <div className={classes['item-body-info']}>
          <div className={classes['item-body-time']}>
            {props.props.timeOut} - {props.props.timeIn}
          </div>
          <div>{props.props.time}</div>
          <div className={classes['item-body-transfers-count']}>{props.props.transfers.join(' ')}</div>{' '}
        </div>
      </div>
    </div>
  );
};

export default Item;

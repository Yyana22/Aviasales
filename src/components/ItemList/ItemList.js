// import { useState, useRef } from 'react';
import Item from '../Item/Item';

import classes from './ItemList.module.scss';
const ItemList = () => {
  const arr = [
    {
      sale: '12300 P',
      wayOut: 'MOW',
      wayIn: 'HKT',
      timeOut: '10:45',
      timeIn: '21:45',
      time: '21ч 15м',
      transfers: ['HYJ', 'ADS'],
      logo: 'dddsadasdq',
    },
    {
      sale: '12100 P',
      wayOut: 'Masd',
      wayIn: 'HKT',
      timeOut: '10:45',
      timeIn: '21:45',
      time: '21ч 15м',
      transfers: ['HYJ', 'ADS'],
      logo: 'dddsadasdq',
    },
    {
      sale: '12300 P',
      wayOut: 'MOW',
      wayIn: 'HKT',
      timeOut: '10:45',
      timeIn: '21:45',
      time: '21ч 15м',
      transfers: ['HYJ', 'ADS'],
      logo: 'dddsadasdq',
    },
    {
      sale: '13300 P',
      wayOut: 'MOW',
      wayIn: 'HKT',
      timeOut: '10:00',
      timeIn: '21:25',
      time: '20ч 11м',
      transfers: ['HYJ'],
      logo: 'ssssadasdq',
    },
    {
      sale: '3300 P',
      wayOut: 'MOW',
      wayIn: 'HKT',
      timeOut: '10:00',
      timeIn: '11:25',
      time: '1ч 25м',
      transfers: ['HYJ', 'XCD'],
      logo: 'aasadasdq',
    },
  ];
  let id = 0;
  let elements = arr.map((item) => {
    id += 1;
    return (
      <li key={id} className={classes['item']}>
        <Item props={item}></Item>
      </li>
    );
  });
  return <ul className={classes['list']}>{elements}</ul>;
};

export default ItemList;

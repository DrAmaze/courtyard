import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const DrinkListItem = ({ drink, order }: any) => {
  console.log('WOAH', order);
  return (
  <li onClick={ e => order(e, drink) }>
    <h4>{ drink.name }</h4>
  </li>
)};

export default withRouter(DrinkListItem);
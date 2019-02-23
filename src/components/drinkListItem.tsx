import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const DrinkListItem = ({ drink }: any) => {
  return (
    <li className='drink-list-item'>
      <h4>{ drink.name }</h4>
    </li>
  );
};

export default withRouter(DrinkListItem);
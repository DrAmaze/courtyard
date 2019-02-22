import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const DrinkListItem = ({ drink }: any) => {
  return (
    <li>
      <h4>{ drink.name }</h4>
    </li>
  );
};

export default withRouter(DrinkListItem);
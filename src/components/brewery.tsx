import React from 'react';
import DrinkListItem from './drinkListItem';
import { Link, withRouter } from 'react-router-dom';
import { randomBytes } from 'crypto';

interface Props {
  fetchBeers: Function;
  drinks: any[];
}

interface State {
  drinks: any[];
}

class Brewery extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinks: [],
    }
  }
  
  componentDidMount() {
    if (this.props.fetchBeers) {
      this.props.fetchBeers().then((res: any) => {
        this.setState({ drinks: res.beers });
      });
    }
  }
  
  render() {
    const { drinks } = this.state;

    let list;
    if (drinks && drinks.length) {
      list = drinks.map(drink =>
        <Link to={ `/beer/${ drink.ID }` }>
          <DrinkListItem drink={ drink }
            key={ drink.ID }
          />
        </Link>
      )
    } else {
      list = <div>Excuse us while we fetch the beer list...</div>
    }

    return (
      <div>
        <h1>Welcome to the Brewtown</h1>
        <h5>Which beer would you like to order?</h5>
        <ul>
          { list }
        </ul>

        <Link to='/'>
          <button>
            Head back to the Courtyard
          </button>
        </Link>
      </div>
    )
  }
}

export default Brewery;
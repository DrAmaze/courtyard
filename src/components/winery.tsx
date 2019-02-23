import React from 'react';
import DrinkListItem from './drinkListItem';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import '../styles/winery.scss';

interface Props {
  fetchWines: Function;
  drinks: any[];
}

interface State {
  drinks: any[];
  errorMsg: string;
}

class Winery extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinks: [],
      errorMsg: ''
    }
  }

  componentDidMount() {
    if (this.props.fetchWines) {
      this.props.fetchWines().then((res: any) => {
        this.setState({ drinks: res.wines });
      });
    }
  }

  
  render() {
    const { drinks } = this.state;
    
    let list;
    if (drinks && drinks.length) {
      list = drinks.map(drink =>
        <div key={ v4() }>
          <DrinkListItem drink={ drink } />
        </div>
      )
    } else {
      list = <div>Excuse us while we fetch the beer list...</div>
    }
    return (
      <div id='winery'>
        <h1 className='greeting' id='intro-winery'>
          Welcome to Le Vino
        </h1>

        <h5 className='server-question'>
          Here is our wine list...
        </h5>
        <ul className='drink-list'>
          { list }
        </ul>

        <div className='winery-options'>
          <Link to='/'>
            <button>
              Head back to the Courtyard
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Winery;
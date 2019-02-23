import React from 'react';
import DrinkListItem from './drinkListItem';
import { Link, withRouter } from 'react-router-dom';
import { v4 } from 'uuid';
import { Beer } from '../schema';

interface Props {
  fetchBeers: Function;
  createBeer: Function;
  drinks: any[];
}

interface State {
  drinks: any[];
  isCreateForm: boolean;
  newBeerName: string;
  errorMsg: string;
}

class Brewery extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinks: [],
      isCreateForm: false,
      newBeerName: '',
      errorMsg: ''
    }
    this.update = this.update.bind(this);
    this.addBeer = this.addBeer.bind(this);
    this.openCreateBeerForm = this.openCreateBeerForm.bind(this);
    this.buildCreateForm = this.buildCreateForm.bind(this);
  }
  
  componentDidMount() {
    if (this.props.fetchBeers) {
      this.props.fetchBeers().then((res: any) => {
        this.setState({ drinks: res.beers });
      });
    }
  }

  update(e: any) {
    return this.setState({
      newBeerName: e.target.value
    });
  }

  addBeer(e: any) {
    e.preventDefault();
    const newBeer = { name: this.state.newBeerName, ID: v4() };
    this.props.createBeer(newBeer).then((res: any) => {
      if (res.beer) {
        this.setState({ isCreateForm: false, newBeerName: '' });
        this.componentDidMount();
      } else {
        this.setState({ errorMsg: 'Whoops! That one was too hard for our brewers...try again!' })
      }
    })
  }

  openCreateBeerForm(e: any) {
    e.preventDefault();
    this.setState({ isCreateForm: true });
  }

  buildCreateForm(isOpen: boolean) {
    if (isOpen) {
      return (
        <form onSubmit={ e => this.addBeer(e) }>
          <input type='text' 
            onChange={ e => this.update(e) }/>
            <button>Create Your Beer!</button>
        </form>
      )
    } else {
      return <div>
        <button onClick={e => this.openCreateBeerForm(e)}>
          Not seeing what you want? Create your own!
          </button>
      </div>
    }
  }
  
  render() {
    const { drinks, isCreateForm, errorMsg } = this.state;

    let list;
    if (drinks && drinks.length) {
      list = drinks.map(drink =>
        <Link to={ `/beer/${ drink.ID }` } key={ v4() }>
          <DrinkListItem drink={ drink } />
        </Link>
      )
    } else {
      list = <div>Excuse us while we fetch the beer list...</div>
    }

    const form = this.buildCreateForm(isCreateForm);

    return (
      <div>
        <h1>Welcome to the Brewtown</h1>
        <div>
          { errorMsg }
        </div>
        <h5>Which beer would you like to order?</h5>
        <ul>
          { list }
        </ul>

        { form }

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
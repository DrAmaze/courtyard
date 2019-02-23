import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/beer.scss';

interface Props {
  fetchBeer: Function;
  updateBeer: Function;
  deleteBeer: Function;
  drinks: any;
}

interface State {
  drinks: any;
  newDrink: any;
  isUpdatePage: boolean;
  deletedBeer: boolean;
  errorMsg: string;
}

class Beer extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinks: [],
      newDrink: '',
      isUpdatePage: false,
      deletedBeer: false,
      errorMsg: '',
    }
    this.updateBeer = this.updateBeer.bind(this);
    this.deleteBeer = this.deleteBeer.bind(this);
    this.update = this.update.bind(this);
    this.deleteBeer = this.deleteBeer.bind(this);
    this.buildDrinkOptions = this.buildDrinkOptions.bind(this);
    this.toggleUpdatePage = this.toggleUpdatePage.bind(this);
    this.openUpdatePage = this.openUpdatePage.bind(this);
  }

  componentDidMount() {
    if (!this.state.deletedBeer) {
      const url = location.href.split('/');
      const beerID = url[url.length - 1];
      this.props.fetchBeer(beerID).then((res: any) => {
        if (res.beer && !res.beer[0]) {
          this.setState({ drinks: res.beer, deletedBeer: true })
        } else {
          const errorMsg = this.handleError(res);
          this.setState({ errorMsg: errorMsg });
        }
      });
    }
  }

  update(e: any) {
    return this.setState({
      newDrink: e.target.value
    });
  }

  toggleUpdatePage() { 
    this.setState({ isUpdatePage: true });
  }

  updateBeer(e: any) {
    e.preventDefault();
    const newBeer = { ID: this.state.drinks.ID, name: this.state.newDrink }
    this.props.updateBeer(newBeer).then((res: any) => {
      if (res.beer && !res.beer[0]) {
        this.setState({ drinks: res.beer })
      } else {
        const errorMsg = this.handleError(res);
        this.setState({ errorMsg: errorMsg });
      }
    });
  }

  deleteBeer(e: any) {
    e.preventDefault();
    this.props.deleteBeer(this.state.drinks).then((res: any) => {
      this.setState({ deletedBeer: true });
    }).then(location.replace('/brewery'));
  }

  private buildDrinkOptions(haveDrink: boolean) {
    if (haveDrink && !this.state.errorMsg) {
      return (
        <div className='beer-options'>
          <h5 className='server-question'>
            Is there something wrong with this beer?
          </h5>
          <button onClick={ e => this.toggleUpdatePage() }>
            Yes, it needs an update!
          </button>
          <button onClick={ e => this.deleteBeer(e) }>
            Yes, let's stop serving it.
          </button>
        </div>
      )
    } else {
      return <div></div>
    }
  }

  private openUpdatePage(isOpen: boolean) {
    if (isOpen) {
      return (
        <form onSubmit={ e => this.updateBeer(e) }>
          <input type='text'
            onChange={ e => this.update(e) }
            placeholder={ 'Please Enter New Name...' }
            required/>
          <button id='update-beer'>Update Beer Name</button>
        </form>
      )
    } else {
      return <div></div>
    }
  }

  private handleError(res: any): string {
    if (
      res.beer &&
      res.beer[0] &&
      res.beer[0].code === 404
    ) {
      return 'This drink does not exist.';
    } else {
      return 'We are unable to change this drink...the people love it.'
    }
  }

  render() {
    const { isUpdatePage } = this.state;
    
    let drink;
    let haveDrink = false;
    if (this.state.drinks) {
      drink = this.state.drinks.name;
      haveDrink = true;
    } else {
      drink = 'Oh No! We just ran out of that beer...'
    }

    const drinkOptions = this.buildDrinkOptions(haveDrink);
    const updatePage = this.openUpdatePage(isUpdatePage);
    const error = this.state.errorMsg;

    const displayOptions = isUpdatePage ? updatePage : drinkOptions;
    
    return (
      <div id='beer-page'>
        <h2 className='greeting'>{ drink }</h2>

        <div className='error'>
          { error }
        </div>
        { displayOptions }

        <h5 className='server-question'>
          Or would you like to head back to the bar?
        </h5>

        <Link to='/brewery'>
          <button className='bar-nav'>
            To the Bar
          </button>
        </Link>
      </div>
    )
  }
}

export default Beer;
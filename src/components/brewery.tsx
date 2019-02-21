import React from 'react';

interface Props {
  fetchBeers: Function;
  drinks: any[]
}

interface State {
  drinks: any[]
}

class Brewery extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinks: []
    }
  }
  
  componentDidMount() {
    this.props.fetchBeers().then((res: any) => {
      const beers = res.beers;
      this.setState({ drinks: beers });
    });
  }
  
  render() {
    let drinks;
    if (this.state && this.state.drinks) {
      drinks = this.state.drinks;
    }

    let list;
    if (drinks && drinks.length) {
      list = drinks.map(drink => 
          <li>{drink.name}</li>
      )
    } else {
      list = <div>BOOO</div>
    }
    console.log(drinks, list);
    return (
      <div>
        <h1>The BREWTOWN</h1>
        <ul>
          { list }
        </ul>
      </div>
    )
  }
}

export default Brewery;
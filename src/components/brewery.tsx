import React from 'react';

class Brewery extends React.Component<object> {
  constructor(props: any) {
    super(props);
    this.state = {
      drinks: []
    }
  }
  
  render() {
    return (
      <div>
        <h1>The BREWTOWN</h1>
      </div>
    )
  }
}

export default Brewery;
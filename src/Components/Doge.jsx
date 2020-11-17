import React, { Component } from 'react';

class Doge extends Component {
  constructor(){
    super();
    console.log('constroi');
  }

  componentDidMount(){
    console.log('montou');
  }

  render() {
    console.log('renderizou');
    return(
      <div>
        Doge
      </div>
    )
  }
}

export default Doge;
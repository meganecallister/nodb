import React, { Component } from 'react';
import axios from 'axios';

class Favs extends Component {
    // constructor(props) {
    //     super();

            
    //     }

  render() {
    return (
      <p className='fav-list'>{`${this.props.favs.title}, ${this.props.favs.artist}`}</p>
    )
  }



}

export default Favs;

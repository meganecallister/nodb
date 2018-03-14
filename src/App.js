import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Crud from './components/crud/Crud';
import Favs from './components/Favs';

class App extends Component {
  constructor() {
    super();

    this.state = {
      artist: 'Coldplay',
      title: 'Yellow',
      lyrics: '',
      favsArr: [],
      favs: {
        artist: '',
        title: ''
      }
    }
  }

  updateArtist(value) {
    this.setState({
      artist: value
    })
  }

  updateTitle(value) {
    this.setState({
      title: value
    })
  }

  handleClick() {
    axios.get(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`).then(res => {
        this.setState({
          lyrics: res.data.lyrics,
          artist: '',
          title: '',
          favs: {
            artist: this.state.artist,
            title: this.state.title
          }
        })
      }).catch(err => {
        this.setState({
          favs: {
            artist: '',
            title: ''
          },
          lyrics: "Sorry, we don't have lyrics for that song."
        })
      })
  }

  postFavs() {
    let copyArr = [...this.state.favsArr]
    copyArr.push(this.state.favs)
    this.setState({
      favsArr: copyArr
    })
  }

  render() {
    return (
      <div className = "App" >
        <p className = "title"> Lyrics </p>

    <main>

      <div className="search-side">
        <h6>SEARCH</h6>
          <div className = "inputs" >

            <input
              placeholder = "Title"
              className = "input"
              type = "text"
              onChange = { e => { this.updateTitle(e.target.value) }}
              value = { this.state.title } />

            <input
              placeholder = "Artist"
              className = "input"
              type = "text"
              onChange = {e => { this.updateArtist(e.target.value) }}
              value = { this.state.artist }/>
        
            <button onClick = { () => this.handleClick()}> Search </button>
            <button onClick = { () => this.postFavs()}> Favorite </button>
        
          </div>

          <div className = "display-lyrics">
            { this.state.favs.artist
              ? 
            <p className='lyrics'> { this.state.favs.title + " by " + this.state.favs.artist} </p>
              : null
              }

          <p className='lyrics'> {this.state.lyrics}</p>
        </div>
      </div>

      <div className="add-side">

        <h6>FAVS</h6>


        <div className="favs-box">
          {this.state.favsArr.map((e, i) => (
            <Favs key={i} favs = {e} />)
            )}
        </div>

      </div>
      
          <Crud
            //favs = { this.state.favs }
            //favsArr = { this.state.favsArr }
          /> 
        </main>
    
      </div>
    );
  }
}

export default App;

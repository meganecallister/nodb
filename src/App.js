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
    axios.get(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`)
      .then(res => {
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
        <div className='headings'>
          <h6>SEARCH</h6>
          <h6>FAVS</h6>
        </div>

        <main>

        <div>
          <div className = "inputs" >
            <input
              placeholder = "Title"
              type = "text"
              onChange = { e => { this.updateTitle(e.target.value) }}
              value = { this.state.title } />
            <input
              placeholder = "Artist"
              type = "text"
              onChange = {e => { this.updateArtist(e.target.value) }}
              value = { this.state.artist }/>
            <button onClick = { () => this.handleClick()}>S</button>
            <button onClick = { () => this.postFavs()}>F</button>
          </div>
        </div>
        <div>
          <div className = "display-lyrics">
            { this.state.favs.artist
              ? 
            <p className='lyrics'> { this.state.favs.title + " by " + this.state.favs.artist} </p>
              : null }
            <p className='lyrics'> {this.state.lyrics}</p>
          </div>

          <div className="favs-box">
            {this.state.favsArr.map((e, i) => (
              <Favs key={i} favs = {e} />))}
              <Crud/> 
          </div>
          </div>
        </main>      
      </div>
    );
  }
}

export default App;

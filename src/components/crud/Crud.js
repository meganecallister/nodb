
import React, { Component } from 'react';
import axios from 'axios';
import './Crud.css';

class Crud extends Component {
    constructor() {
        super();

        this.state = {
            favsArr: [],
            //favArtist: '',
            favTitle: '',
            
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4010/api/readFavsArr').then( res => {
            console.log(res)
            this.setState({
                favsArr: res.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    // updateFavArtist(valA) {
    //     this.setState({
    //         favArtist: valA
    //     })
    // }
    
    // updateFavTitle(valT) {
    //     this.setState({
    //         favTitle: valT
    //     })
    // }

    handleChange(e) {
        this.setState({
            favTitle: e.target.value,
            //favArtist: e.target.value
        })
    }
    
    addSong() {
        let body = {
            favTitle: this.state.favTitle,
        }
        axios.post('http://localhost:4010/api/createFavsArr', body).then( res => {
            console.log(res);
            this.setState({
                favsArr: res.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    deleteSong(id) {
        (console.log('hit!'));
        axios.delete(`http://localhost:4010/api/deleteFavsArr/${id}`).then (res => {
            console.log(res);
            this.setState({
                favsArr: res.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    editSong(id) {
        let body = {
            favTitle: this.state.favTitle,
        }
        axios.put(`http://localhost:4010/api/updateFavsArr/${id}`, body).then(res => {
            this.setState({
                // favsArr: res.data
                favsArr: res.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        
        let mappedFavsArr = this.state.favsArr.map( (e, i) => {
            return (
                <div key={i + e.id} className='skinny-div'>
                    <p className='fav-list'>{e.favTitle}</p>
                    <button onClick={() => this.deleteSong(i)}>-</button>
                    <button onClick={() => this.editSong(i)}>E</button>
                </div>
            )
        })

        return (
            
            <div className='favs-box'>
                {mappedFavsArr}
                <input
                placeholder = "Title, Artist"
                type = "text"
                onChange = { e => { this.handleChange(e) }}
                value = { this.state.favTitle }
                />     
                <button onClick = { () => this.addSong()}>+</button>
                
            </div>
        
        );
    } 
}

export default Crud;
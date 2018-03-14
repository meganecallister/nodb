import React from 'react';

function Favs(props) {
    return (
      <p className='fav-list'>{`${props.favs.title}, ${props.favs.artist}`}</p>
    )
  }

export default Favs;
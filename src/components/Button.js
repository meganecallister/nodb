import React from 'react';

function Button(props) {
    return (
        <div>
            {props.lyrics
                ? <div className="inputs">
                    <button onClick = { () => props.postFavs()}> Post Favs </button>
                </div>
                : null
            }        
        </div>       
    )
}

export default Button;
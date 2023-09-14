import React from 'react'
import black from './imgs/black.png'
import blue from './imgs/blue.png'
import cyan from './imgs/cyan.png'
import orange from './imgs/orange.png'
import purple from './imgs/purple.png'
import red from './imgs/red.png'
import white from './imgs/white.png'
import yellow from './imgs/yellow.png'


function card({index, card, flip}) {
    
    let matched = card.match == true ? "box openBox" : "box" 
    
    return (
        <div className={matched }
             onClick={()=>flip(index)}
            
             >
            <img src={card.img}></img>
           
           
        </div>
    )
}

export default card




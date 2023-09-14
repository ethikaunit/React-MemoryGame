import React from 'react'
import black './imgs/black.png'
import blue './imgs/blue.png'
import cyan './imgs/cyan.png'
import orange './imgs/orange.png'
import purple './imgs/purple.png'
import red './imgs/red.png'
import white './imgs/white.png'
import yellow './imgs/yellow.png'


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




import React from 'react'

function card({index, card, flip}) {
    
    let matched = card.match == true ? "box openBox" : "box" 
    
    return (
        <div className={matched }
             onClick={()=>flip(index)}
            
             >
            {card.emojis}
           
        </div>
    )
}

export default card




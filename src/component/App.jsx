import React, { useRef, useState } from 'react'
import Card from './card'

function App() {

    // let shuf_semojis = emojis.sort(()=>(Math.random()> .5 ) ? 2 : -1);

    // const emojis = ['🍉', '🍊', '🍎', '🍇', '🥭',
    //     '🥝', '🍓', '🍒', '🍉', '🍊', '🍎', '🍇', '🥭',
    //     '🥝', '🍓', '🍒'];

    const [boxOfData, setBoxdata] = useState([
        { id: 0, emojis: '🍉', match: false },
        { id: 1, emojis: '🍊', match: false },
        { id: 2, emojis: '🍇', match: false },
        { id: 3, emojis: '🍒', match: false },
        { id: 4, emojis: '🍎', match: false },
        { id: 5, emojis: '🥝', match: false },
        { id: 0, emojis: '🍉', match: false },
        { id: 1, emojis: '🍊', match: false },
        { id: 2, emojis: '🍇', match: false },
        { id: 3, emojis: '🍒', match: false },
        { id: 4, emojis: '🍎', match: false },
        { id: 5, emojis: '🥝', match: false },
        { id: 6, emojis: '🍓', match: false },
        { id: 7, emojis: '🥭', match: false },
        { id: 6, emojis: '🍓', match: false },
        { id: 7, emojis: '🥭', match: false }].sort(() => Math.random() - .5));

    const [totalMatch, setTotalMatch] = useState(0)
    const prevIndex = useRef(-1);
    const [prevCard, setPrevCard] = useState(-1);

    const matching = (currentIndex) => {

        if (boxOfData[prevIndex.current].emojis == boxOfData[currentIndex].emojis) {
            boxOfData[prevIndex.current].match = true;
            boxOfData[currentIndex].match = true;
            setPrevCard(-1);
            setTotalMatch(totalMatch + 1)


        } else {

            boxOfData[currentIndex].match = true;
            setBoxdata([...boxOfData])

            setTimeout(() => {
                boxOfData[currentIndex].match = false;
                boxOfData[prevCard].match = false;
                setBoxdata([...boxOfData])
                setPrevCard(-1)

            }, 500);
        }
    }

    const flip = (num) => {
        if (num != prevIndex.current) {
            if (boxOfData[num].match == true) {
                alert("currently selected")
            }
            else {
                if (prevCard == -1) {
                    boxOfData[num].match = true
                    setBoxdata([...boxOfData])
                    prevIndex.current = num;
                    setPrevCard(num)
                } else {

                    matching(num)
                    prevIndex.current = -1;

                }
            }
        } else {
            alert("currently selected")
        }
    }

    return (
        <>
            <section>

                <div className="container">
                    <div className="title">

                        <h1>
                            {totalMatch == 8 ? "You Won" : "Memory Game"}</h1>
                    </div>
                    <div className="box-container">
                        {totalMatch == 8 ? " " :
                            boxOfData.map((each, index) => {
                                return <Card
                                    key={index}
                                    index={index}
                                    card={each}
                                    flip={flip} />
                            })

                        }

                    </div>
                    {totalMatch == 8 ?
                        <div className="btn">
                            <button
                                onClick={() => window.location.reload()}
                            >RESET</button>
                        </div> : ""}

                </div>
            </section>
        </>
    )
}

export default App
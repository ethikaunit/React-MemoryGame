import React, { useRef, useState } from 'react'
import Card from './card'

function App() {


    const [boxOfData, setBoxdata] = useState([
        { id: 0, img: 'black', match: false },
        { id: 1, img: 'red', match: false },
        { id: 2, img: 'orange', match: false },
        { id: 3, img: 'blue', match: false },
        { id: 7, img: 'yellow', match: false },
        { id: 4, img: 'white', match: false },
        { id: 5, img: 'cyan', match: false },
        { id: 0, img: 'black', match: false },
        { id: 6, img: 'purple', match: false },
        { id: 1, img: 'red', match: false },
        { id: 2, img: 'orange', match: false },
        { id: 3, img: 'blue', match: false },
        { id: 4, img: 'white', match: false },
        { id: 5, img: 'cyan', match: false },
        { id: 6, img: 'purple', match: false },
        { id: 7, img: 'yellow', match: false }].sort(() => Math.random() - .5));

    const [totalMatch, setTotalMatch] = useState(0)
    const prevIndex = useRef(-1);
    const [prevCard, setPrevCard] = useState(-1);

    const matching = (currentIndex) => {

        if (boxOfData[prevIndex.current].img == boxOfData[currentIndex].img) {
            boxOfData[prevIndex.current].match = true;
            boxOfData[currentIndex].match = true;
            setPrevCard(-1);
            setTimeout(function(){
                setTotalMatch(totalMatch + 1)
            },400)
            


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
            
        }
    }

    return (
        <>
            <section>

                <div className="container">
                    <div className="title">

                        <h1>
                            {totalMatch == 8 ? "You Won !!!" : "Testing 1"}</h1>
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

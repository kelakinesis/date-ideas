import React, { useState } from 'react';

const dateIdeas = [
    'Watch a movie',
    'Try a new wine',
    'Make Bubble Tea',
    'Bake cookies',
    'Create a mini-putt course',
    'Create a cocktail',
    'Take an online coffee workshop',
    'Try an online fitness class',
    'Netflix and Chill'
  ]
]


//https://reactjs.org/docs/hooks-state.html 


function ThreeIdeasButton() {
    const [show, setShow] = useState(false); //react hook

    function handleClick() {
        alert('hello!');
        setShow(true);
    }

    return (
        <div>
            <button onClick={handleClick}>Give me 3 options pizzaa</button>
            { show ? (
                <div>
                3 date ideas
            </div>
            ) : (
                <div>Please click button </div>
            )}
        </div>
        
    )
}

export default ThreeIdeasButton;
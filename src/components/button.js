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
];


// https://reactjs.org/docs/hooks-state.html 

let randomIdea = '';

function ThreeIdeasButton() {
    const [count, setCount] = useState(0); //react hook

    function handleClick() {
        randomIdea = dateIdeas[Math.floor(Math.random() * (dateIdeas.length))];
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Give me a random date idea</button>
            { count > 0 ? (
                <p>{randomIdea}</p>
            ) : (
                <p>☝️ click the button</p>
            )}
        </div>
        
    );
};

export default ThreeIdeasButton;
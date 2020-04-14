import {React, useState} from 'react';

const dateIdeas = [
    'Go to Duke\'s Refresher',
    'Watch a movie',
    'Go to Soos',
    'Get Bubble Tea',
    'Go to Pai',
    'Bake something gluten-free',
    'Create a cocktail',
    'Take a coffee workshop',
    'Try a new fitness class',
    'Netflix and Chill'
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
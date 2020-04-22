import React, { useState } from 'react';


// future: use firebase instead of the below hard-coded list
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
    // const [count, setCount] = useState(0); //react hook
    const [selectedIdeas, setSelectedIdeas] = useState([]);

    // generate 3 unique indexes to pass to selectedIdeas - this is to replace the below
    // Math.floor(Math.random() * (dateIdeas.length))
    function generateUniqueIds () {
        // generate a number
        // add to a list
        // check if new number exists in the new list
    }

    function handleClick() {
        // randomIdea = dateIdeas[Math.floor(Math.random() * (dateIdeas.length))];
        let ideas = [
            dateIdeas[Math.floor(Math.random() * (dateIdeas.length))],
            dateIdeas[Math.floor(Math.random() * (dateIdeas.length))],
            dateIdeas[Math.floor(Math.random() * (dateIdeas.length))],
        ]
        setSelectedIdeas(ideas);
        // setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Give me a random date idea</button>
            { selectedIdeas.length > 0 ? (
                <div>
                    <p>{selectedIdeas[0]}</p>
                    <p>{selectedIdeas[1]}</p>
                    <p>{selectedIdeas[2]}</p>
                </div>
            ) : (
                <p>☝️ click the button</p>
            )}
        </div>
        
    );
};

export default ThreeIdeasButton;
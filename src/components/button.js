import React, { useState } from 'react';


// future: use firebase instead of the below hard-coded list
const dateIdeas = [
    'Watch a movie',
    'Try a new wine',
    'Make bubble tea',
    'Bake cookies',
    'Create a mini-putt course',
    'Create a cocktail',
    'Take an online coffee workshop',
    'Try an online fitness class',
    'Netflix and Chill',
    'Learn to code together',
    'Play a board game',
    '100 squats challenge',
    '50 push ups challenge',
];

let randomIndex = Array(3).fill(0);

function ThreeIdeasButton() {
    const [selectedIdeas, setSelectedIdeas] = useState([]);

    // generate 3 unique indexes to pass to selectedIdeas - this is to replace the below
    // Math.floor(Math.random() * (dateIdeas.length))
    function generateUniqueIds () {
        // generate 3 random numbers restricted to the length of the dateIdeas array
        // check if any of the numbers are equal to one another
        // if any are equal to one another, generate another 3 random numbers
        randomIndex = randomIndex.map(index => Math.floor(Math.random() * (dateIdeas.length)));
        console.log(randomIndex);
    };

    function handleClick() {

        generateUniqueIds();
        
        let ideas = [
            dateIdeas[randomIndex[0]],
            dateIdeas[randomIndex[1]],
            dateIdeas[randomIndex[2]],
        ];
        setSelectedIdeas(ideas);

    };

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
                <p><span role="img" aria-label="point-up">☝️</span> click the button</p>
            )}
        </div>
        
    );
};

export default ThreeIdeasButton;
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
];


function ThreeIdeasButton() {
    const [selectedIdeas, setSelectedIdeas] = useState([]);
    let randomIndexes = Array(3).fill(0);

    function getThreeUniqueIdeas() {
        let uniqueIndexes = [];

        while (uniqueIndexes.length < 3) {
            randomIndexes = randomIndexes.map(index => Math.floor(Math.random() * (dateIdeas.length)));
            uniqueIndexes = randomIndexes.filter((n, i) => randomIndexes.indexOf(n) === i);
        };
        
        let ideas = [
            dateIdeas[randomIndexes[0]],
            dateIdeas[randomIndexes[1]],
            dateIdeas[randomIndexes[2]],
        ];

        setSelectedIdeas(ideas);
    };

    return (
        <div>
            <button className="button-home" onClick={getThreeUniqueIdeas}>Give me a random date idea</button>
            { selectedIdeas.length > 0 ? (
                <ul>
                    <li>{selectedIdeas[0]}</li>
                    <li>{selectedIdeas[1]}</li>
                    <li>{selectedIdeas[2]}</li>
                </ul>
            ) : (
                <p><span role="img" aria-label="point-up">☝️</span> click the button</p>
            )}
        </div>
        
    );
};

export default ThreeIdeasButton;
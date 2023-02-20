import React from "react";

import Button from ".//Button";

//--- import stylesheets
import '../../src/App.scss';

const Homepage = () => {
    return (
        <div className="homepage-content-container">
                <h2>
                    If you have ever played the popular game Dungeons & Dragons you know one of the first and most important decisions, is choosing a character class. Whether you are an old pro and brand new to the game, this choice never seems to get easier. Will you choose to be a pious paladin, a spiteful sorcerer, a bothersome bard, a reverent ranger or one of the other various options. The choice can be agonizing until now. Here, by simply answering 60 questions the classification oracle will bestow upon you the ideal character class to fulfill your destiny. Tap the Get Started button to begin.
                </h2>
                <Button />
            <p></p>
        </div>
    )
}

export default Homepage;
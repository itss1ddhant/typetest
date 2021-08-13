import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words,
    characters,
    wpm }) => {
    return <div className="try-again-container">
        <h1>Test Results</h1>

        <div className="results-container">
            <p>
                <b>Characters:</b> {characters}
            </p>

            <p>
                <b>Words:</b> {words}
            </p>

            <p>
                <b>Wpm:</b> {wpm} wpm
            </p>

            <div>
                <button className="end-buttons start-again-btn">Re-try</button>
                <button onClick={() => {
                    window.open(
                    "https://www.facebook.com/sharer.php?u=Checkitout",
                    "facebook-share-dialog" , 
                    "width=800,height=600");
                }}
                className="end-buttons share-btn">
                    Share
                </button>

                <button
                onClick= {() => {
                    window.open(
                        "https://twitter.com/intent/tweet?text=Checkitout",
                        "Twitter",
                    "width=800,height=600"
                    )
                }}
                className="end-buttons tweet-btn">
                    Tweet
                </button>
            </div>

        </div>

    </div>
}

export default TryAgain;
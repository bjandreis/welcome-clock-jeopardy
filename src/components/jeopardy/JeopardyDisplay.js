import React from 'react';

function JeopardyDisplay(props) {
    return (
        <div>
            <strong>Score: </strong>{props.score} <br /><br />
            <strong>Question: </strong>{props.data.question} <br />
            <strong>Value: </strong>{props.data.value} < br />
            <strong>Category: </strong>{props.data.category.title} <br /><br />
            <strong>Answer: </strong>{props.data.answer} <br />
            <strong>Your Answer: </strong>{props.userAnswer} <br /><br />
            <div id="jeopardy_answer">
                <input type="text" onChange={props.changeAnswer} size="30" name="answer" placeholder="Enter your answer"></input>
                <button onClick={props.handleAnswer}>Submit Answer</button>
            </div>
        </div>
    );
}

export default JeopardyDisplay;
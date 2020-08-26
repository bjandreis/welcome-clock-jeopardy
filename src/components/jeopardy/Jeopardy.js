import React, { Component } from 'react';
import JeopardyDisplay from './JeopardyDisplay';

//import our service
import JeopardyService from "../../JeopardyService";

class Jeopardy extends Component {

  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        category: ""
      },
      score: 0,
      userAnswer: ""
    }
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  // when the user types something into the answer box, update the user answer
  changeAnswer = (event) => {
    this.setState({
      userAnswer: event.target.value
    })
  }

  // when the user clicks the 'submit answer' button, check to see if it matches the real answer
  // if the answer is correct, add points. If it is incorrect, subtract points
  // get a new question 
  handleAnswer = (event) => {
    if (this.state.userAnswer == this.state.data.answer) {
      this.setState({
        score: this.state.score + this.state.data.value
      })
    } else {
      this.setState({
        score: this.state.score - this.state.data.value
      })
    }
    this.getNewQuestion()
  }

  //display the results on the screen
  render() {

    return (
      <div>
        <JeopardyDisplay
          score={this.state.score}
          data={this.state.data}
          userAnswer={this.state.userAnswer}
          changeAnswer={this.changeAnswer}
          handleAnswer={this.handleAnswer}
        />
      </div>
    );
  }

}

export default Jeopardy;
import React, { Component, Fragment } from 'react';
import { FormGroup, Col, Input, Button } from 'reactstrap';
import { WORDS } from '../Words';
import { LIVES } from '../Constants';
import Letter from './letter';

class Word extends Component {
  state = {
    selectedWord: '',
    selectedWordArray: [],
    wordToPredict: '',
    wordToPredictArray: [],
    lives: LIVES,
    letter: '',
    length: 0,
    result: false,
  }

  setupHangman = () => {
    const noOfWords =  WORDS.length;
    let wordToPredict = '';
    let selectedWord = WORDS[(parseInt(Math.random()*noOfWords, 10)%11)];
    let length = selectedWord.length
    let selectedWordArray = selectedWord.split('');
    let multiplier = Math.pow(10, parseInt((length/3), 10));
    let noOfPrePredictedWords = (parseInt(Math.random()*multiplier, 10)).toString().split('');
    for(let i = 0; i < length; i++) {
      if(noOfPrePredictedWords.indexOf(i.toString()) !== -1) {
        wordToPredict += selectedWordArray[i];
      } else {
        wordToPredict += '_';
      }
    }
    this.setState({
      selectedWord,
      selectedWordArray,
      wordToPredict,
      wordToPredictArray: wordToPredict.split(''),
      length,
      lives: LIVES,
      result: false,
    });
  }

  componentWillMount() {
    this.setupHangman();
  }

  handleLetterInput = (e) => {
    let letter = e.target.value.slice(0, 1).toUpperCase();
    this.setState({ letter });
  }

  processLetter = () => {
    const {
      length, selectedWordArray, letter,
    } = this.state;
    let { lives, wordToPredictArray } = this.state;
    let foundFlag = false;
    for(let i = 0; i < length; i++) {
      if (selectedWordArray[i] === letter) {
        wordToPredictArray[i] = letter;
        foundFlag = true;
      }
    }
    if (!foundFlag) {
      lives -= 1;
    }
    this.setState({
      wordToPredictArray,
      wordToPredict: wordToPredictArray.join(','),
      lives,
      result: wordToPredictArray.indexOf('_') === -1,
      letter: '',
    })
  }



  render() {
    const { lives, selectedWordArray, wordToPredictArray, result } = this.state;
    if (result) {
      return (
        <Fragment>
          <h1>You have Won!</h1>
          <Button onClick={this.setupHangman}> Play Again</Button>
        </Fragment>
      )
    } else if (lives) {
      return (
        <Fragment>
          <h3>{`Lives: ${lives}`}</h3>
          <h1>GUESS THE WORD</h1>
          <div className="container">
            <div className="row">
              { wordToPredictArray.map((letter, index) => (
                <Letter
                  key={index}
                  letter={letter}
                  />
              ))}
            </div>
            <div className="row">
              <div class="form-group float-label-control">
                <label for="word">Enter Letter</label>
                <input id="word" type="text" class="form-control" placeholder="word" value={this.state.letter} onChange={this.handleLetterInput} onKeyPress={(e) => { if(e.key === 'Enter') { this.processLetter(); }}}></input>
              </div>
            </div>
          </div>
          <div className="row">
          </div>
        </Fragment>
      )
    }
     else {
      return (
        <Fragment>
          <h1>You have Lost!</h1>
          <Button onClick={this.setupHangman}> Play Again</Button>
        </Fragment>
      )
    }
  }
}

export default Word;

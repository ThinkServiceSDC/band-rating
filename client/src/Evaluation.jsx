import React, { Component } from 'react';
import './evaluation.css';
import sendEvaluation from './backendCalls';

export default class Evaluation extends Component {
    state = { bandName: '', vote: null, comment: '' };

    constructor(props) {
      super(props);
      this.updateVote = this.updateVote.bind(this);
      this.evaluateBand = this.evaluateBand.bind(this);
    }

    updateVote(event) {
      this.setState({ vote: event.target.value });
    }

    async evaluateBand(event) {
      const { bandName, vote, comment } = this.state;

      event.preventDefault();
      sendEvaluation(bandName, vote, comment);
    }

    render() {
      const { bandName, comment } = this.state;

      return (
        <div className="evaluation-form">
          <form id="submitForm" onSubmit={this.evaluateBand}>
            <div className="evaluation-container">
              <input
                id="bandName"
                className="insert-field"
                type="text"
                name="bandName"
                value={bandName}
                placeholder="Band"
                onChange={event => this.setState({ bandName: event.target.value })}
              />
              <div className="voting-area">
                <div className="radio-button">
                  <label htmlFor="Good" className="radio-button-label">
                    <input id="Good" type="radio" value="Good" name="rating" onChange={this.updateVote} />
                    Good
                  </label>
                </div>
                <div className="radio-button">
                  <label htmlFor="Medium" className="radio-button-label">
                    <input
                      type="radio"
                      id="Medium"
                      value="Medium"
                      name="rating"
                      onChange={this.updateVote}
                    />
                                    Medium
                  </label>
                </div>
                <div className="radio-button">
                  <label htmlFor="Bad" className="radio-button-label">
                    <input
                      type="radio"
                      id="Bad"
                      value="Bad"
                      name="rating"
                      onChange={this.updateVote}
                    />
                    Bad
                  </label>
                </div>
                <div className="radio-button">
                  <label htmlFor="Special" className="radio-button-label">
                    <input
                      type="radio"
                      id="Special"
                      value="Special"
                      name="rating"
                      onChange={this.updateVote}
                    />
                    Special
                  </label>
                </div>
                <div className="radio-button">
                  <label htmlFor="MetalBattle" className="radio-button-label">
                    <input
                      type="radio"
                      id="MetalBattle"
                      value="MetalBattle"
                      name="rating"
                      onChange={this.updateVote}
                    />
                    Metal Battle
                  </label>
                </div>
              </div>
              <input
                id="comment"
                className="insert-field"
                type="text"
                name="comment"
                value={comment}
                placeholder="Comment"
                onChange={event => this.setState({ comment: event.target.value })}
              />
              <input id="Evaluate" className="submit" type="submit" value="Evaluate" />
            </div>
          </form>
        </div>
      );
    }
}

import React, {Component} from 'react';
import './evaluation.css';
import * as backendCalls from '../../client/src/backendCalls';

export default class Evaluation extends Component {
    state = {bandName: '', vote: null, comment: ''};

    constructor(props) {
        super(props);
        this.updateVote = this.updateVote.bind(this);
        this.evaluateBand = this.evaluateBand.bind(this);
    }

    updateVote(event) {
        this.setState({vote: event.target.value});
    };

    async evaluateBand(event) {
        event.preventDefault();
        backendCalls.sendEvaluation(this.state.bandName, this.state.vote, this.state.comment);
    };

    render() {
        return (
            <div className='evaluation-form'>
                <form id='submitForm' onSubmit={this.evaluateBand}>
                    <div className='evaluation-container'>
                        <input id='bandName' className='insert-field' type='text'
                               name='bandName' value={this.state.bandName} placeholder='Band'
                               onChange={(event) => this.setState({bandName: event.target.value})}/>
                        <div className='voting-area'>
                            <div className='radio-button'>
                                <label className='radio-button-label'>
                                    <input type='radio' id='Good' value='Good' name='rating'
                                           onChange={this.updateVote}/>
                                    Good
                                </label>
                            </div>
                            <div className='radio-button'>
                                <label className='radio-button-label'>
                                    <input type='radio' id='Medium' value='Medium' name='rating'
                                           onChange={this.updateVote}/>
                                    Medium
                                </label>
                            </div>
                            <div className='radio-button'>
                                <label className='radio-button-label'>
                                    <input type='radio' id='Bad' value='Bad' name='rating' onChange={this.updateVote}/>
                                    Bad
                                </label>
                            </div>
                            <div className='radio-button'>

                                <label className='radio-button-label'>
                                    <input type='radio' id='Special' value='Special' name='rating'
                                           onChange={this.updateVote}/>
                                    Special
                                </label>
                            </div>
                            <div className='radio-button'>
                                <label className='radio-button-label'>
                                    <input type='radio' id='MetalBattle' value='MetalBattle' name='rating'
                                           onChange={this.updateVote}/>
                                    Metal Battle
                                </label>
                            </div>
                        </div>
                        <input id='comment' className='insert-field' type='text'
                               name='comment' value={this.state.comment} placeholder='Comment'
                               onChange={(event) => this.setState({comment: event.target.value})}/>
                        <input id='Evaluate' className='submit' type='submit' value='Evaluate'/>
                    </div>
                </form>
            </div>
        );
    }
}
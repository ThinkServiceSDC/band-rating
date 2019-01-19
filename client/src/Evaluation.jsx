import React, {Component} from 'react';
import './evaluation.css';
import * as backendCalls from '../../client/src/backendCalls';

export default class Evaluation extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedVote: null};
        this.voteChanged = this.voteChanged.bind(this);
        this.evaluateBand = this.evaluateBand.bind(this);
    }

    voteChanged(event) {
        this.setState({selectedVote: event.target.value});
    };

    async evaluateBand(event) {
        event.preventDefault();
        backendCalls.sendEvaluation('', this.state.selectedVote, '')
    };

    render() {
        return (
            <div className='evaluation-form'>
                <form id='submitForm' onSubmit={this.evaluateBand}>
                    <div className='evaluation-container'>
                        <input className='band-insert-field' type='text' name='bandName'/>
                        <div className='voting-area'>
                            <div className='radio-button'>
                                <input type='radio' id='Good' value='Good' name='rating' onChange={this.voteChanged}/>
                                <label className='radio-button-label'>Good</label>
                            </div>
                            <div className='radio-button'>
                                <input type='radio' id='Medium' value='Medium' name='rating'
                                       onChange={this.voteChanged}/>
                                <label className='radio-button-label'>Medium</label>
                            </div>
                            <div className='radio-button'>
                                <input type='radio' id='Bad' value='Bad' name='rating' onChange={this.voteChanged}/>
                                <label className='radio-button-label'>Bad</label>
                            </div>
                            <div className='radio-button'>
                                <input type='radio' id='Special' value='Special' name='rating'
                                       onChange={this.voteChanged}/>
                                <label className='radio-button-label'>Special</label>
                            </div>
                            <div className='radio-button'>
                                <input type='radio' id='MetalBattle' value='MetalBattle' name='rating'
                                       onChange={this.voteChanged}/>
                                <label className='radio-button-label'>Metal Battle</label>
                            </div>
                        </div>
                        <input id='Evaluate' className='submit' type='submit' value='Evaluate'/>
                    </div>
                </form>
            </div>
        );
    }
}
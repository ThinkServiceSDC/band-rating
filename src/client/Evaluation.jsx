import React from 'react';
import './evaluation.css';

export const Evaluation = () => {
    return (
        <div className='evaluation-form'>
            <form>
                <div className='evaluation-container'>
                    <input className='band-insert-field' type='text' name='bandName'/>
                    <div>
                        <input type='radio' id='good' name='rating'/>
                        <label className='radio-button-label'>Good</label>
                        <input type='radio' id='medium' name='rating'/>
                        <label className='radio-button-label'>Medium</label>
                        <input type='radio' id='bad' name='rating'/>
                        <label className='radio-button-label'>Bad</label>
                        <input type='radio' id='special' name='rating'/>
                        <label className='radio-button-label'>Special</label>
                        <input type='radio' id='metalBattle' name='rating'/>
                        <label className='radio-button-label'>Metal Battle</label>
                    </div>
                    <input className='submit' type='submit' value='Evaluate'/>
                </div>
            </form>
        </div>
    )
        ;
};
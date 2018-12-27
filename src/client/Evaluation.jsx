import React from 'react';
import './evaluation.css';
import {RadioButton} from "./RadioButton";

export const Evaluation = () => {
    return (
        <div className='evaluation-form'>
            <form>
                <div className='evaluation-container'>
                    <input className='band-insert-field' type='text' name='bandName'/>
                    <div className='voting-area'>
                        <RadioButton text='Good' groupName='rating'/>
                        <RadioButton text='Medium' groupName='rating'/>
                        <RadioButton text='Bad' groupName='rating'/>
                        <RadioButton text='Special' groupName='rating'/>
                        <RadioButton text='Metal Battle' groupName='rating'/>
                    </div>
                    <input className='submit' type='submit' value='Evaluate'/>
                </div>
            </form>
        </div>
    );
};
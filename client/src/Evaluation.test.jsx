import React from 'react';
import toJSON from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Evaluation from './Evaluation';
import * as backendCall from './backendCalls';

jest.mock('./backendCalls.js');

describe('Evaluation', () => {
    it('should render correctly', () => {
        expect(toJSON(shallow(<Evaluation/>))).toMatchSnapshot();
    });

    it('should change state when selecting different option', () => {
        const wrapper = shallow(<Evaluation/>);
        wrapper.find('#Good').prop('onChange')({target: {value: 'Good'}});
        expect(wrapper.state()).toEqual({selectedVote: 'Good'});
    });

    it('should send data to server', (done) => {
        const wrapper = shallow(<Evaluation/>);
        wrapper.find('#Good').prop('onChange')({target: {value: 'Good'}});
        wrapper.find('#submitForm').prop('onSubmit')({preventDefault: jest.fn()});

        expect(backendCall.sendEvaluation).toBeCalledWith('', 'Good', '');
        done();
    });
});
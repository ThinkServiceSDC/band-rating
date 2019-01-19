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

    it('should set inital states to null', () => {
        const wrapper = shallow(<Evaluation/>);
        expect(wrapper.state().bandName).toBeNull();
        expect(wrapper.state().vote).toBeNull();
        expect(wrapper.state().comment).toBeNull();
    });

    it('should change state when selecting different option', () => {
        const wrapper = shallow(<Evaluation/>);
        wrapper.find('#Good').prop('onChange')({target: {value: 'Good'}});
        expect(wrapper.state().vote).toEqual('Good');
    });

    it('should send data to server', (done) => {
        const wrapper = shallow(<Evaluation/>);
        wrapper.setState({bandName: 'bandName'});
        wrapper.setState({vote: 'Good'});
        wrapper.setState({comment: 'comment'});
        wrapper.find('#submitForm').prop('onSubmit')({preventDefault: jest.fn()});

        expect(backendCall.sendEvaluation).toBeCalledWith('bandName', 'Good', 'comment');
        done();
    });
});
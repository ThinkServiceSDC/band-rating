import React from 'react';
import toJSON from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Evaluation from "./Evaluation";

describe('Evaluation', () => {
    it('should render correctly', () => {
        expect(toJSON(shallow(<Evaluation/>))).toMatchSnapshot();
    });

    it('should change state when selecting different option', () => {
        const wrapper = shallow(<Evaluation/>);
        wrapper.find('#Good').simulate('change', {target: {value: 'Good'}});
        expect(wrapper.state()).toEqual({selectedVote: 'Good'});
    });
});
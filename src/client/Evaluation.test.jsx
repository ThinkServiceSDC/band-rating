import React from 'react';
import toJSON from 'enzyme-to-json';
import {shallow} from 'enzyme';
import {Evaluation} from "./Evaluation";

describe('Evaluation', () => {
    it('should render correctly', () => {
        expect(toJSON(shallow(<Evaluation/>))).toMatchSnapshot();
    });
});
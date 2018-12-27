import React from 'react';
import toJSON from 'enzyme-to-json';
import {shallow} from 'enzyme';
import {RadioButton} from "./RadioButton";

describe('RadioButton', () => {
    it('should render correctly', () => {
        expect(toJSON(shallow(<RadioButton text='Good'/>))).toMatchSnapshot();
    });
});
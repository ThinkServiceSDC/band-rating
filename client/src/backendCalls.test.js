import * as backend from './backendCalls';

describe('backendCalls', () => {

    beforeEach(() => {
        global.window.fetch = jest.fn();
    });

    it('should call evaluation endpoint with body', () => {
        backend.sendEvaluation('Test', 'Good', 'SomeComment');
        expect(global.window.fetch).toHaveBeenCalledTimes(1);
        expect(global.window.fetch).toBeCalledWith('/v1/api/evaluate', {
            method: 'PUT',
            body: {
                'bandName': 'Test',
                'evaluation': 'Good',
                'comment': 'SomeComment'
            }
        });
    });
});
import * as backend from './backendCalls';

describe('backendCalls', () => {

    beforeEach(() => {
        global.window.fetch = jest.fn();
    });

    it('should call evaluation endpoint with body', () => {
        backend.sendEvaluation('bandName', 'vote', 'comment');
        expect(global.window.fetch).toHaveBeenCalledTimes(1);
        expect(global.window.fetch).toBeCalledWith('/v1/api/evaluate', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify({
                "bandName": "bandName",
                "vote": "vote",
                "comment": "comment"
            })
        });
    });
});
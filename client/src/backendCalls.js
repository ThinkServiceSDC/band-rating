export const sendEvaluation = async (bandName, evaluation, comment) => {
    return await fetch('/v1/api/evaluate', {
        method: 'PUT',
        body: {bandName, evaluation, comment}
    });
};
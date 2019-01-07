export const sendEvaluation = async (bandName, evaluation, comment) => {
    const response = await fetch('/v1/api/evaluate', {
        method: 'POST',
        body: {bandName, evaluation, comment}
    });
};
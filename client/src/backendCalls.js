const sendEvaluation = async (bandName, vote, comment) => fetch('/v1/api/evaluate', {
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'PUT',
  body: JSON.stringify({ bandName, vote, comment }),
});

export default sendEvaluation;

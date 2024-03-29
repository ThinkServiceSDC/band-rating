import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import Evaluator from './Evaluator';

const app = express();

const routePath = '/v1/api';
const evaluator = new Evaluator();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('client/build'));

app.put(`${routePath}/evaluate`, (req, res) => {
  evaluator.evaluate(req, res);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});

app.stop = () => {
  server.close();
};

export default app;

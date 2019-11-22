import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import http from 'http';

import infraRouter from './routes/infra';
import uniRouter from './routes/uni';
import fabricRouter from './routes/fabric';

const app = express();
const port = 3000;

// view engine setup
console.log(__dirname);
app.set('views', path.join(__dirname, 'wwwroot'));
app.set('view engine', 'jade');
app.set('port', port);

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

app.use('/infra', infraRouter);
app.use('/uni', uniRouter);
app.use('/fabric', fabricRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = http.createServer(app);
server.listen(port);

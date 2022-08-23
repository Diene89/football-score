import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  console.log(err, 'meu erroooooo');

  const { message } = err;
  const result = message.split('/');
  return res.status(Number(result[1])).json({ message: result[0] });
};

export default errorMiddleware;

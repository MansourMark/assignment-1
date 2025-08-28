// Endpoint for querying the Fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  // get the “num” parameter from the route (it’s a string)
  const { num } = req.params;

  // convert the string to a number for fibonacci calculation
  const fibN: number = fibonacci(parseInt(num, 10));

  // prepare the result string
  let result: string = `fibonacci(${num}) is ${fibN}`;

  // if fibonacci returned -1 (invalid for negatives), change message
  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  // send the result back to the client
  res.send(result);
};

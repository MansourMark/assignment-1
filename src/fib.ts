// util function that computes the Fibonacci numbers
export default function fibonacci(n: number): number {
  if (n < 0) {
    // indicate an invalid negative input (tests expect “undefined” for negatives)
    return -1;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  // recursively compute n-th Fibonacci number
  return fibonacci(n - 1) + fibonacci(n - 2);
}

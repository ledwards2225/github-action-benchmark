#if !defined FIB_HPP_INCLUDED
#define FIB_HPP_INCLUDED

// testing an arbitrary comment 2

int fib(int const i) {
  if (i <= 1) {
    return 1;
  }
  return fib(i - 2) + fib(i - 1);
}

#endif // FIB_HPP_INCLUDED

window.BENCHMARK_DATA = {
  "lastUpdate": 1685990511929,
  "repoUrl": "https://github.com/ledwards2225/github-action-benchmark",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "l.edwards.d@gmail.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "l.edwards.d@gmail.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "distinct": true,
          "id": "1e7cc8b42abcdca77e22fe667cbd140bfe8b097a",
          "message": "testing",
          "timestamp": "2023-06-05T11:41:02-07:00",
          "tree_id": "d6f525bf188967936d7565455003e7ebfa866522",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/1e7cc8b42abcdca77e22fe667cbd140bfe8b097a"
        },
        "date": 1685990491703,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFib10",
            "value": 389,
            "unit": "ns/op",
            "extra": "5000000 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20",
            "value": 48765,
            "unit": "ns/op",
            "extra": "30000 times\n2 procs"
          }
        ]
      }
    ],
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "l.edwards.d@gmail.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "l.edwards.d@gmail.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "distinct": true,
          "id": "1e7cc8b42abcdca77e22fe667cbd140bfe8b097a",
          "message": "testing",
          "timestamp": "2023-06-05T11:41:02-07:00",
          "tree_id": "d6f525bf188967936d7565455003e7ebfa866522",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/1e7cc8b42abcdca77e22fe667cbd140bfe8b097a"
        },
        "date": 1685990491751,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench.py::test_fib_10",
            "value": 52715.16382569605,
            "unit": "iter/sec",
            "range": "stddev: 5.222848285004587e-7",
            "extra": "mean: 18.969873702878434 usec\nrounds: 36232"
          },
          {
            "name": "bench.py::test_fib_20",
            "value": 432.9977233586923,
            "unit": "iter/sec",
            "range": "stddev: 0.000007245328327048085",
            "extra": "mean: 2.3094809650340977 msec\nrounds: 429"
          }
        ]
      }
    ],
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "l.edwards.d@gmail.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "l.edwards.d@gmail.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "distinct": true,
          "id": "1e7cc8b42abcdca77e22fe667cbd140bfe8b097a",
          "message": "testing",
          "timestamp": "2023-06-05T11:41:02-07:00",
          "tree_id": "d6f525bf188967936d7565455003e7ebfa866522",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/1e7cc8b42abcdca77e22fe667cbd140bfe8b097a"
        },
        "date": 1685990495697,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_fib_10",
            "value": 209,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_fib_20",
            "value": 27565,
            "range": "± 103",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Catch2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "l.edwards.d@gmail.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "committer": {
            "email": "l.edwards.d@gmail.com",
            "name": "ledwards2225",
            "username": "ledwards2225"
          },
          "distinct": true,
          "id": "1e7cc8b42abcdca77e22fe667cbd140bfe8b097a",
          "message": "testing",
          "timestamp": "2023-06-05T11:41:02-07:00",
          "tree_id": "d6f525bf188967936d7565455003e7ebfa866522",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/1e7cc8b42abcdca77e22fe667cbd140bfe8b097a"
        },
        "date": 1685990511503,
        "tool": "catch2",
        "benches": [
          {
            "name": "Fibonacci 10",
            "value": 166,
            "range": "± 20",
            "unit": "ns",
            "extra": "100 samples\n188 iterations"
          },
          {
            "name": "Fibonacci 20",
            "value": 23.206,
            "range": "± 219",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          }
        ]
      }
    ]
  }
}
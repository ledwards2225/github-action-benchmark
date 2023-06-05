window.BENCHMARK_DATA = {
  "lastUpdate": 1685990659437,
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
      },
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
        "date": 1685990658416,
        "tool": "cargo",
        "benches": [
          {
            "name": "BenchFib10",
            "value": 243,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "BenchFib20",
            "value": 32241,
            "range": "± 1762",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Recursive/20",
            "value": 32527,
            "range": "± 1851",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Iterative/20",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Recursive/21",
            "value": 52096,
            "range": "± 3298",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Iterative/21",
            "value": 6,
            "range": "± 0",
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
    ],
    "Julia benchmark result": [
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
        "date": 1685990520741,
        "tool": "julia",
        "benches": [
          {
            "name": "fib/10",
            "value": 365.54545454545456,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":209,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "fib/20",
            "value": 46300,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ],
    "Benchmark.js Benchmark": [
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
        "date": 1685990521052,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "fib(10)",
            "value": 1094124,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "fib(20)",
            "value": 8800,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "94 samples"
          }
        ]
      }
    ],
    "Benchmark.Net Benchmark": [
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
        "date": 1685990550398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Sample.Benchmarks.Fib10",
            "value": 26.459622089679424,
            "unit": "ns",
            "range": "± 0.009340170205977785"
          },
          {
            "name": "Sample.Benchmarks.Fib20",
            "value": 49.35669285058975,
            "unit": "ns",
            "range": "± 0.008812165120292053"
          }
        ]
      }
    ]
  }
}
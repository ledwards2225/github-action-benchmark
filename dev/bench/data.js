window.BENCHMARK_DATA = {
  "lastUpdate": 1685991942952,
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
          "id": "087e8defee61290cf0817b5ea1f41cd6f1251174",
          "message": "and again",
          "timestamp": "2023-06-05T11:43:27-07:00",
          "tree_id": "f37a07826e7b94169a80ecf85659293f19975497",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/087e8defee61290cf0817b5ea1f41cd6f1251174"
        },
        "date": 1685990722825,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFib10",
            "value": 493,
            "unit": "ns/op",
            "extra": "3000000 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20",
            "value": 55189,
            "unit": "ns/op",
            "extra": "30000 times\n2 procs"
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
          "id": "4eb20faac3f6466aa1e30f4bac415fd2e0ced610",
          "message": "summary",
          "timestamp": "2023-06-05T12:03:57-07:00",
          "tree_id": "711389ccf82ad3c29c2fd05fef47657b01d54f66",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/4eb20faac3f6466aa1e30f4bac415fd2e0ced610"
        },
        "date": 1685991942178,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFib10",
            "value": 391,
            "unit": "ns/op",
            "extra": "5000000 times\n2 procs"
          },
          {
            "name": "BenchmarkFib20",
            "value": 48586,
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
          "id": "087e8defee61290cf0817b5ea1f41cd6f1251174",
          "message": "and again",
          "timestamp": "2023-06-05T11:43:27-07:00",
          "tree_id": "f37a07826e7b94169a80ecf85659293f19975497",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/087e8defee61290cf0817b5ea1f41cd6f1251174"
        },
        "date": 1685990688739,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench.py::test_fib_10",
            "value": 58270.74050541903,
            "unit": "iter/sec",
            "range": "stddev: 4.911266520877654e-7",
            "extra": "mean: 17.161271528838775 usec\nrounds: 39215"
          },
          {
            "name": "bench.py::test_fib_20",
            "value": 478.8198329236062,
            "unit": "iter/sec",
            "range": "stddev: 0.000010345364774544222",
            "extra": "mean: 2.08846821129806 msec\nrounds: 478"
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
          "id": "4eb20faac3f6466aa1e30f4bac415fd2e0ced610",
          "message": "summary",
          "timestamp": "2023-06-05T12:03:57-07:00",
          "tree_id": "711389ccf82ad3c29c2fd05fef47657b01d54f66",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/4eb20faac3f6466aa1e30f4bac415fd2e0ced610"
        },
        "date": 1685991920132,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench.py::test_fib_10",
            "value": 52542.71746272034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010301230019640611",
            "extra": "mean: 19.032133248713517 usec\nrounds: 37036"
          },
          {
            "name": "bench.py::test_fib_20",
            "value": 432.1925818154264,
            "unit": "iter/sec",
            "range": "stddev: 0.000008388073605217383",
            "extra": "mean: 2.313783350467277 msec\nrounds: 428"
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
          "id": "087e8defee61290cf0817b5ea1f41cd6f1251174",
          "message": "and again",
          "timestamp": "2023-06-05T11:43:27-07:00",
          "tree_id": "f37a07826e7b94169a80ecf85659293f19975497",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/087e8defee61290cf0817b5ea1f41cd6f1251174"
        },
        "date": 1685990674756,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_fib_10",
            "value": 234,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_fib_20",
            "value": 30144,
            "range": "± 3854",
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
          "id": "087e8defee61290cf0817b5ea1f41cd6f1251174",
          "message": "and again",
          "timestamp": "2023-06-05T11:43:27-07:00",
          "tree_id": "f37a07826e7b94169a80ecf85659293f19975497",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/087e8defee61290cf0817b5ea1f41cd6f1251174"
        },
        "date": 1685990855848,
        "tool": "cargo",
        "benches": [
          {
            "name": "BenchFib10",
            "value": 202,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "BenchFib20",
            "value": 26845,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Recursive/20",
            "value": 26822,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Iterative/20",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Recursive/21",
            "value": 43396,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Iterative/21",
            "value": 5,
            "range": "± 0",
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
          "id": "4eb20faac3f6466aa1e30f4bac415fd2e0ced610",
          "message": "summary",
          "timestamp": "2023-06-05T12:03:57-07:00",
          "tree_id": "711389ccf82ad3c29c2fd05fef47657b01d54f66",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/4eb20faac3f6466aa1e30f4bac415fd2e0ced610"
        },
        "date": 1685991916734,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_fib_10",
            "value": 256,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_fib_20",
            "value": 34996,
            "range": "± 4048",
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
          "id": "087e8defee61290cf0817b5ea1f41cd6f1251174",
          "message": "and again",
          "timestamp": "2023-06-05T11:43:27-07:00",
          "tree_id": "f37a07826e7b94169a80ecf85659293f19975497",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/087e8defee61290cf0817b5ea1f41cd6f1251174"
        },
        "date": 1685990748897,
        "tool": "catch2",
        "benches": [
          {
            "name": "Fibonacci 10",
            "value": 164,
            "range": "± 3",
            "unit": "ns",
            "extra": "100 samples\n198 iterations"
          },
          {
            "name": "Fibonacci 20",
            "value": 23.257,
            "range": "± 280",
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
          "id": "087e8defee61290cf0817b5ea1f41cd6f1251174",
          "message": "and again",
          "timestamp": "2023-06-05T11:43:27-07:00",
          "tree_id": "f37a07826e7b94169a80ecf85659293f19975497",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/087e8defee61290cf0817b5ea1f41cd6f1251174"
        },
        "date": 1685990743246,
        "tool": "julia",
        "benches": [
          {
            "name": "fib/10",
            "value": 348.3720930232558,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":215,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "fib/20",
            "value": 43499,
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
          "id": "087e8defee61290cf0817b5ea1f41cd6f1251174",
          "message": "and again",
          "timestamp": "2023-06-05T11:43:27-07:00",
          "tree_id": "f37a07826e7b94169a80ecf85659293f19975497",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/087e8defee61290cf0817b5ea1f41cd6f1251174"
        },
        "date": 1685990727577,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "fib(10)",
            "value": 1065237,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "fib(20)",
            "value": 8899,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "87 samples"
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
          "id": "4eb20faac3f6466aa1e30f4bac415fd2e0ced610",
          "message": "summary",
          "timestamp": "2023-06-05T12:03:57-07:00",
          "tree_id": "711389ccf82ad3c29c2fd05fef47657b01d54f66",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/4eb20faac3f6466aa1e30f4bac415fd2e0ced610"
        },
        "date": 1685991876955,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "fib(10)",
            "value": 1152165,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "fib(20)",
            "value": 9809,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "85 samples"
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
          "id": "087e8defee61290cf0817b5ea1f41cd6f1251174",
          "message": "and again",
          "timestamp": "2023-06-05T11:43:27-07:00",
          "tree_id": "f37a07826e7b94169a80ecf85659293f19975497",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/087e8defee61290cf0817b5ea1f41cd6f1251174"
        },
        "date": 1685990829178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Sample.Benchmarks.Fib10",
            "value": 27.38345911748269,
            "unit": "ns",
            "range": "± 0.5106767565144474"
          },
          {
            "name": "Sample.Benchmarks.Fib20",
            "value": 56.05068556572262,
            "unit": "ns",
            "range": "± 1.2106060936978298"
          }
        ]
      }
    ],
    "JMH Benchmark": [
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
        "date": 1685990706967,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.openjdk.jmh.samples.JMHSample_01_HelloWorld.wellHelloThere",
            "value": 1383094327.548233,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
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
          "id": "087e8defee61290cf0817b5ea1f41cd6f1251174",
          "message": "and again",
          "timestamp": "2023-06-05T11:43:27-07:00",
          "tree_id": "f37a07826e7b94169a80ecf85659293f19975497",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/087e8defee61290cf0817b5ea1f41cd6f1251174"
        },
        "date": 1685990766957,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.openjdk.jmh.samples.JMHSample_01_HelloWorld.wellHelloThere",
            "value": 1383101186.8464851,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
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
          "id": "4eb20faac3f6466aa1e30f4bac415fd2e0ced610",
          "message": "summary",
          "timestamp": "2023-06-05T12:03:57-07:00",
          "tree_id": "711389ccf82ad3c29c2fd05fef47657b01d54f66",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/4eb20faac3f6466aa1e30f4bac415fd2e0ced610"
        },
        "date": 1685991921000,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.openjdk.jmh.samples.JMHSample_01_HelloWorld.wellHelloThere",
            "value": 1435000467.7299545,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ],
    "C++ Benchmark": [
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
          "id": "087e8defee61290cf0817b5ea1f41cd6f1251174",
          "message": "and again",
          "timestamp": "2023-06-05T11:43:27-07:00",
          "tree_id": "f37a07826e7b94169a80ecf85659293f19975497",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/087e8defee61290cf0817b5ea1f41cd6f1251174"
        },
        "date": 1685990745075,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fib_10",
            "value": 199.28415256047097,
            "unit": "ns/iter",
            "extra": "iterations: 3512050\ncpu: 199.26510157884996 ns\nthreads: 1"
          },
          {
            "name": "fib_20",
            "value": 25720.94926818535,
            "unit": "ns/iter",
            "extra": "iterations: 27261\ncpu: 25720.46880158468 ns\nthreads: 1"
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
          "id": "4eb20faac3f6466aa1e30f4bac415fd2e0ced610",
          "message": "summary",
          "timestamp": "2023-06-05T12:03:57-07:00",
          "tree_id": "711389ccf82ad3c29c2fd05fef47657b01d54f66",
          "url": "https://github.com/ledwards2225/github-action-benchmark/commit/4eb20faac3f6466aa1e30f4bac415fd2e0ced610"
        },
        "date": 1685991915172,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fib_10",
            "value": 215.33738088469266,
            "unit": "ns/iter",
            "extra": "iterations: 3267737\ncpu: 215.30009912058406 ns\nthreads: 1"
          },
          {
            "name": "fib_20",
            "value": 28793.619163104642,
            "unit": "ns/iter",
            "extra": "iterations: 24328\ncpu: 28747.920092074964 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}
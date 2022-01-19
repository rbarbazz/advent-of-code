const benchmarkFn = <T>(fn: () => T): T => {
  console.time('Benchmark')
  const res = fn()
  console.timeEnd('Benchmark')

  return res
}

export default benchmarkFn

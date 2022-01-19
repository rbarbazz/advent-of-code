const benchmarkFn = (fn) => {
  console.time('Benchmark')
  const res = fn()
  console.timeEnd('Benchmark')

  return res
}

export default benchmarkFn

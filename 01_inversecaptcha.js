// http://adventofcode.com/2017/day/1
// solution using Ramda http://ramdajs.com/repl/

// filter array to elements that are immediately repeated
const repeated = (x, i, a) => equals(x, a[i+1]),
filterRepeated = addIndex(filter)(repeated),
// prepend the last element to test whether first and last digits are identical
decircularize = a => prepend(last(a), identity(a)),
inverseCaptcha = pipe(decircularize, filterRepeated, sum);

// tests
const testFn = fn => ([input, output]) => equals(output, applyTo(input, fn)),
// apply function under test to array of test cases, each case of the form [input, expectedOutput]
applyTests = (fn, aTests) => filter(compose(not, testFn(fn)), aTests);

// identify any test failures. Empty array is what we're going for
applyTests(inverseCaptcha, [
  [[9,1,2,1,2,1,2,9], 9],
  [[1,1,1,1], 4],
  [[1,2,3,4], 0],
  [[1,1,2,2], 3]
])

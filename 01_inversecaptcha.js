// http://adventofcode.com/2017/day/1
// solution using Ramda http://ramdajs.com/repl/

// filter array to elements that are immediately repeated
const repeated = (x, i, a) => equals(x, a[i+1]),
filterRepeated = addIndex(filter)(repeated),
// prepend the last element to test whether first and last digits are identical
decircularize = a => prepend(last(a), identity(a)),
// split string to array 
spl = splitEvery(1),
inverseCaptcha = pipe(spl, decircularize, filterRepeated, sum);

// tests
const testFn = fn => ([input, output]) => equals(output, applyTo(input, fn)),
// apply function under test to array of test cases, each case of the form [input, expectedOutput]
applyTests = (fn, aTests) => filter(compose(not, testFn(fn)), aTests);

// identify any test failures. Empty array is what we're going for
applyTests(inverseCaptcha, [
  ['91212129', 9],
  ['1111', 4],
  ['1234', 0],
  ['1122', 3]
])


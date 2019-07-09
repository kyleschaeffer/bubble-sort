import { bubbleSort } from './bubble-sort';

test('[3,2,1] to equal [1,2,3]', () => {
  expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
});

test('[1,2,3] to equal [1,2,3]', () => {
  expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test('[9, 5, 6, 2, 4] to equal [2, 4, 5, 6, 9]', () => {
  expect(bubbleSort([9, 5, 6, 2, 4])).toEqual([2, 4, 5, 6, 9]);
});

test('[1] to equal [1]', () => {
  expect(bubbleSort([1])).toEqual([1]);
});

test('[] to equal []', () => {
  expect(bubbleSort([])).toEqual([]);
});

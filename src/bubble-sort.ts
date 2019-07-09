/**
 * Sort the given numbers array using bubble sorting
 *  - Not performant: O(n^2)
 */
export function bubbleSort(numbers: number[]): number[] {
  let sortedThisIteration: boolean = true;

  // Keep sorting until no sorts occur
  while (sortedThisIteration) {
    // Reset sorted state
    sortedThisIteration = false;

    // Check for out-of-order pairs
    for (let i = 0; i < numbers.length - 1; i++) {
      // Sort the pair
      if (numbers[i] > numbers[i + 1]) {
        numbers.splice(i, 2, numbers[i + 1], numbers[i]);
        sortedThisIteration = true;
      }
    }
  }

  return numbers;
}

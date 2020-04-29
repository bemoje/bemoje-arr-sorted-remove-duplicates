import arrSortedRemoveDuplicates from '../src/arr-sorted-remove-duplicates'

describe('arrSortedRemoveDuplicates', () => {
	test('remove dupes - numeric', () => {
		const arr = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 7]
		expect(
			arrSortedRemoveDuplicates(arr, {
				numeric: true,
			}),
		).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7])
	})

	test('empty', () => {
		const arr = []
		expect(
			arrSortedRemoveDuplicates(arr, {
				numeric: true,
			}),
		).toStrictEqual([])
	})

	test('len 1', () => {
		const arr = [5]
		expect(
			arrSortedRemoveDuplicates(arr, {
				numeric: true,
			}),
		).toStrictEqual([5])
	})

	test('remove dupes - alpha', () => {
		const arr = ['a', 'b', 'b', 'c']
		expect(arrSortedRemoveDuplicates(arr)).toStrictEqual(['a', 'b', 'c'])
	})

	test('compare function', () => {
		const arr = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 7]
		expect(
			arrSortedRemoveDuplicates(arr, (a, b) => {
				return a - b
			}),
		).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7])
	})
})

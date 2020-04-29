import arrSortedRemoveDuplicates from '../src/arr-sorted-remove-duplicates'

const arr = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 7]

arrSortedRemoveDuplicates(arr, {
	numeric: true,
})
//=> [0, 1, 2, 3, 4, 5, 6, 7]

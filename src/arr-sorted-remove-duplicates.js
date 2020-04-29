import arrSortComparator from '@bemoje/arr-sort-comparator'
import assertArgs from '@bemoje/assert-args'
import assertType from '@bemoje/assert-type'

/**
 * Remove all duplicate elements in a sorted array, leaving only uniques.
 * @param {Array} arr - The sorted array
 * @param {comparator|object} [compare]
 * @param {boolean} [compare.numeric=false] - Sort numerically. Defaults to lexicographic/alphabetic sort.
 * @param {boolean} [compare.descending=false] - Sort in descending order. Defaults to ascending order.
 * @param {boolean} [compare.array=false] - Sort arrays. Nested arrays are also compared recursively.
 * @param {number|string|getter} [compare.by=undefined] - Sort by either array index, a callback(element): any - or by object keys with dot-notation support.
 * @returns {arr}
 */
export default function arrSortedRemoveDuplicates(arr, compare) {
	assertArgs(arr)
	assertType(Array, arr)

	const len = arr.length

	// if less than 2 elems, no dupes
	if (len <= 1) {
		return arr
	}

	// handle comparator
	if (compare) {
		if (typeof compare === 'object') {
			// is comparator builder options
			compare = arrSortComparator(compare)
		}
	} else {
		// set default comparator
		compare = arrSortComparator()
	}

	let last = len - 1
	let curr, next

	// find dupes
	for (let i = 0; i < last; i++) {
		curr = arr[i]
		next = arr[i + 1]

		// equals (according to comparator)
		if (compare(curr, next) === 0) {
			// first to check is the one after 'next', so +2
			let high = i + 2

			// find consequtive dupes
			while (compare(curr, arr[high]) === 0) {
				high++
				last--
			}

			// remove all consequtive dupes at once
			arr.splice(i, high - i - 1)

			// length is one less, so
			last--
		}
	}

	// return the array
	return arr
}

/**
 * Comparator function callback definition.
 * @callback comparator
 * @param {*} a - The first value to compare
 * @param {*} b - The second value to compare
 * @returns {number} A negative number if a > b, a positive number if a < b, 0 otherwise.
 */

/**
 * Value-getter function callback definition.
 * @callback getter
 * @param {*} a - The value
 * @returns {*} The value to be compared
 */

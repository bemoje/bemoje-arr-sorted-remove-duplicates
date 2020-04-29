(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-sort-comparator'), require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-sort-comparator', '@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-sorted-remove-duplicates'] = factory(global.arrSortComparator, global.assertArgs, global.assertType));
}(this, (function (arrSortComparator, assertArgs, assertType) { 'use strict';

	arrSortComparator = arrSortComparator && Object.prototype.hasOwnProperty.call(arrSortComparator, 'default') ? arrSortComparator['default'] : arrSortComparator;
	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

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
	function arrSortedRemoveDuplicates(arr, compare) {
		assertArgs(arr);
		assertType(Array, arr);

		const len = arr.length;

		// if less than 2 elems, no dupes
		if (len <= 1) {
			return arr
		}

		// handle comparator
		if (compare) {
			if (typeof compare === 'object') {
				// is comparator builder options
				compare = arrSortComparator(compare);
			}
		} else {
			// set default comparator
			compare = arrSortComparator();
		}

		let last = len - 1;
		let curr, next;

		// find dupes
		for (let i = 0; i < last; i++) {
			curr = arr[i];
			next = arr[i + 1];

			// equals (according to comparator)
			if (compare(curr, next) === 0) {
				// first to check is the one after 'next', so +2
				let high = i + 2;

				// find consequtive dupes
				while (compare(curr, arr[high]) === 0) {
					high++;
					last--;
				}

				// remove all consequtive dupes at once
				arr.splice(i, high - i - 1);

				// length is one less, so
				last--;
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

	return arrSortedRemoveDuplicates;

})));

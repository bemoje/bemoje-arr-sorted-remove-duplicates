# @bemoje/arr-sorted-remove-duplicates

Remove all duplicate elements in a sorted array, leaving only uniques.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-sorted-remove-duplicates" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-sorted-remove-duplicates" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-sorted-remove-duplicates" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-sorted-remove-duplicates.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-sorted-remove-duplicates" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-sorted-remove-duplicates.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-sorted-remove-duplicates" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-sorted-remove-duplicates" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-sorted-remove-duplicates/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-sorted-remove-duplicates" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-sorted-remove-duplicates
npm install --save @bemoje/arr-sorted-remove-duplicates
npm install --save-dev @bemoje/arr-sorted-remove-duplicates
```

## Usage

```javascript

import arrSortedRemoveDuplicates from '@bemoje/arr-sorted-remove-duplicates'

const arr = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 7]

arrSortedRemoveDuplicates(arr, {
  numeric: true,
})
//=> [0, 1, 2, 3, 4, 5, 6, 7]

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [arrSortedRemoveDuplicates][1]

    -   [Parameters][2]

-   [comparator][3]

    -   [Parameters][4]

-   [getter][5]

    -   [Parameters][6]

## arrSortedRemoveDuplicates

Remove all duplicate elements in a sorted array, leaving only uniques.

##### Parameters

-   `arr` **[Array][7]** The sorted array

-   `compare` **([comparator][8] \| [object][9])?** 

    -   `compare.numeric` **[boolean][10]** Sort numerically. Defaults to lexicographic/alphabetic sort. (optional, default `false`)

    -   `compare.descending` **[boolean][10]** Sort in descending order. Defaults to ascending order. (optional, default `false`)

    -   `compare.array` **[boolean][10]** Sort arrays. Nested arrays are also compared recursively. (optional, default `false`)

    -   `compare.by` **([number][11] \| [string][12] \| [getter][13])** Sort by either array index, a callback(element): any - or by object keys with dot-notation support. (optional, default `undefined`)

Returns **arr** 

## comparator

Comparator function callback definition.

Type: [Function][14]

##### Parameters

-   `a` **any** The first value to compare

-   `b` **any** The second value to compare

Returns **[number][11]** A negative number if a > b, a positive number if a &lt; b, 0 otherwise.

## getter

Value-getter function callback definition.

Type: [Function][14]

##### Parameters

-   `a` **any** The value

Returns **any** The value to be compared

[1]: #arrsortedremoveduplicates

[2]: #parameters

[3]: #comparator

[4]: #parameters-1

[5]: #getter

[6]: #parameters-2

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[8]: #comparator

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[11]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[13]: #getter

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function
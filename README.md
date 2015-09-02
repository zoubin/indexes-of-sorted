# indexes-of-sorted
return range of the indexes in a sorted array

## Example

```javascript
var indexesOfSorted = require('indexes-of-sorted');

console.log(
  indexesOfSorted(
    [1, 1, 2, 2, 3, 3],
    2
  )
);
// [2, 4]

console.log(
  indexesOfSorted(
    ['AA', 'AA', 'aa', 'aa', 'ab', 'ab'],
    'aa'
  )
);
// [2, 4]

console.log(
  indexesOfSorted(
    [{ x: 1 }, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 3 }],
    { x: 3 },
    function cmp(a, b) {
      return a.x - b.x;
    }
  )
);
// [4, 6]

```

## indexesOfSorted(sorted, value, cmp)

### sorted

Type: `Array`

Either ascending or non-ascending.

Elements should be the same type, `String`, `Number`, or `Object`.

If `Object`, `cmp` should be specified

### value

Type: `mixed`

Should be the same type with elements in `sorted`.

### cmp

Type: `Function`

It specifies the way to compare,
like the callback passed to `Array.prototype.sort`.


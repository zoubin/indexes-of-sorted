var test = require('tap').test;
var indexesOfSorted = require('..');
var indexesOf = require('indexes-of');

var CASES = [
  [[], 1],

  [[1], 1],
  [[0], 1],

  [[1, 2, 3], 1],
  [[1, 2, 3], 2],
  [[1, 2, 3], 3],
  [[1, 2, 3], 4],

  [[3, 2, 1], 3],
  [[3, 2, 1], 2],
  [[3, 2, 1], 1],
  [[3, 2, 1], 4],

  [[1, 1, 2, 2, 3, 3], 1],
  [[1, 1, 2, 2, 3, 3], 2],
  [[1, 1, 2, 2, 3, 3], 3],

  [[3, 3, 2, 2, 1, 1], 3],
  [[3, 3, 2, 2, 1, 1], 2],
  [[3, 3, 2, 2, 1, 1], 1],

  [
    ['AA', 'AA', 'aa', 'aa', 'ab', 'ab'],
    'aa',
  ],

];

test('indexes-of-sorted, numbers and strings', function(t) {
  CASES.forEach(function (args) {
    var indexes = indexesOf.apply(null, args).sort(function (a, b) {
      return a - b;
    });
    var expected = [];
    if (indexes.length === 1) {
      expected = [indexes[0], indexes[0] + 1];
    }
    if (indexes.length > 1) {
      expected = [indexes.shift(), indexes.pop() + 1];
    }
    t.same(
      indexesOfSorted.apply(null, args),
      expected
    );
  });
  t.end();
});

test('indexes-of-sorted, objects', function(t) {
  function cmp(a, b) {
    return a.x - b.x;
  }
  t.same(
    indexesOfSorted(
      [{ x: 1 }, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 3 }],
      { x: 1 },
      cmp
    ),
    [0, 2]
  );
  t.same(
    indexesOfSorted(
      [{ x: 1 }, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 3 }],
      { x: 2 },
      cmp
    ),
    [2, 4]
  );
  t.same(
    indexesOfSorted(
      [{ x: 1 }, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 3 }],
      { x: 3 },
      cmp
    ),
    [4, 6]
  );
  t.same(
    indexesOfSorted(
      [{ x: 3 }, { x: 3 }, { x: 2 }, { x: 2 }, { x: 1 }, { x: 1 }],
      { x: 3 },
      cmp
    ),
    [0, 2]
  );
  t.same(
    indexesOfSorted(
      [{ x: 3 }, { x: 3 }, { x: 2 }, { x: 2 }, { x: 1 }, { x: 1 }],
      { x: 2 },
      cmp
    ),
    [2, 4]
  );
  t.same(
    indexesOfSorted(
      [{ x: 3 }, { x: 3 }, { x: 2 }, { x: 2 }, { x: 1 }, { x: 1 }],
      { x: 1 },
      cmp
    ),
    [4, 6]
  );
  t.end();
});



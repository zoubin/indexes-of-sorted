
module.exports = function (hay, needle, cmp) {
  var high = hay.length;
  if (!high) {
    return [];
  }
  cmp = cmp || function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };
  if (high === 1) {
    return cmp(hay[0], needle) === 0 ? [0, 1] : [];
  }
  var i;
  var r;
  var low = 0;
  var desc = cmp(hay[0], hay[high - 1]) > 0;
  while (low < high) {
    i = low + high >> 1;
    r = cmp(hay[i], needle);
    if (r === 0) {
      return [
        left(hay, needle, low, i, cmp),
        right(hay, needle, i, high, cmp) + 1,
      ];
    }
    if (desc && r < 0 || !desc && r > 0) {
      high = i;
    } else {
      low = i + 1;
    }
  }
  return [];
};

function left(hay, needle, low, high, cmp) {
  var r = high;
  var i;
  while (low < high) {
    i = low + high >> 1;
    if (cmp(hay[i], needle) === 0) {
      r = i;
      high = i;
    } else {
      low = i + 1;
    }
  }
  return r;
}

function right(hay, needle, low, high, cmp) {
  var r = low++;
  var i;
  while (low < high) {
    i = low + high >> 1;
    if (cmp(hay[i], needle) === 0) {
      r = i;
      low = i + 1;
    } else {
      high = i;
    }
  }
  return r;
}


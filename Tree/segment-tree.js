function dummySegmentTree(array, fn, N) {
  return function (from, to) {
    let result = N;

    for (let i = from; i < to; i++) {
      result = fn(result, array[i]);
    }

    return result;
  }
}

function segmentTree(array, fn, N) {
  var tree = [];
  function build (pos, tl, tr) {
    if (tr < 0) {return}
    if (tl == tr)  {tree[pos] = array[tl]
    } else {
      var tm = Math.floor((tl + tr) / 2);
      build(pos*2+1, tl, tm);
      build(pos*2+2, tm+1, tr);
      tree[pos] = fn(tree[pos*2+1], tree[pos*2+2]);
    }
  };
  build(0, 0, array.length-1);

  return function(from, to){
    if (to == from) {return N}
    if (from < 0 || to > array.length || to < from) {throw new Error("This range is not valid")}
    function count (pos, tl, tr){
      if (to-1 < tl || from > tr || tr < 0) {return N}
      if (tl >= from && tr <= to-1) {return tree[pos]}
      var tm = Math.floor((tl + tr) / 2);
      return fn(count(pos*2+1, tl, tm), count(pos*2+2, tm+1, tr))
    };
    return count(0, 0, array.length-1)

    // var range = array.slice(from, to);
    // return range.reduce(function(answer, current) {
    //   return fn(answer, current)
    // }, N);

  };
};

tree = segmentTree([[1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 3, 6], [1, 2, 3, 7]], mul, 1);
var i = tree(0, 2);
i = 10;
function recursiveSegmentTree(array, fn, N) {
  return segmentTree(array, fn, N);
}

function getElfTree(array) {
  return recursiveSegmentTree(array, sum, 0);
}

function assignEqually(tree, wishes, stash, elves, gems, week) {
  return {};
}

function assignAtLeastOne(tree, wishes, stash, elves, gems, week) {
  return {};
}

function assignPreferredGems(tree, wishes, stash, elves, gems) {
  return {};
}

function nextState(state, assignment, elves, gems) {
  return state;
}


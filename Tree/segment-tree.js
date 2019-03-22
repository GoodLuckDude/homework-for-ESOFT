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
    if (tl == tr) {
      tree[pos] = fn(array[tl], N) 
    } else {
      var tm = Math.floor((tl + tr) / 2);
      build(pos*2, tl, tm);
      build(pos*2+1, tm+1, tr);
      tree[pos] = fn(tree[pos*2], tree[pos*2+1]);
    }
  };
  build(1, 0, array.length-1);
  return function(from, to){
    if (from+1 < 0 || to+1 < from+1 || to+1 > array.length) {throw new Error("This range is not valid")}
    function count (pos, tl, tr){
      if (to+1 < tl || from+1 > tr || tr < 0) {return N}
      if (tl == tr) {return tree[pos]}
      if (from+1 == tl && to+1 == tr) {return tree[pos]}
      var tm = Math.floor((tl + tr) / 2);
      return fn(count(pos*2, tl, tm), count(pos*2+1, tm+1, tr))
    };
    return count(1, 1, tree.length)



    // var range = array.slice(from, to);
    // return range.reduce(function(answer, current) {
    //   return fn(answer, current)
    // }, N);


  };
  // return function(from, to) {
  //   function foo (pos, tl, tr) {
  //     if (from == tl && to == tr) {
  //       return array[pos]
  //     }
  // }
  // }
};
tree = recursiveSegmentTree([1, 2, 3, 4,], mul, 1);
var i = 10;
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


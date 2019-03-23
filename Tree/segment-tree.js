function dummySegmentTree(array, fn, N) {

  return function calc (from, to) {
    let result = N;
    for (let i = from; i < to; i++) {
      result = fn(result, array[i]);
    }
    return result;
  }
}

function create(array, fn, N) {

  if (!Array.isArray(array[0])) {
    return dummySegmentTree(array, fn, N)
  }
  
  return(function(l, r) {
    
  })

}


var a = [
  [1, 2, 3],
  [1, 1, 1],
];

var i = dummySegmentTree(a, sum, 0);
var x = i(0, 2)(0, 1);

function segmentTree(array, fn, N) {
  var tree = [];
  function build (pos, tl, tr) {
    if (tr < 0) {return}
    if (tl == tr)  {
      tree[pos] = array[tl];
      if (Array.isArray(array[tl])){
        array[tl] = (segmentTree(array[tl], fn, N));
      }
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


function recursiveSegmentTree(array, fn, N) {
  if(Array.isArray(array[0])) {
    return segmentTree(array, fn, N)
  }
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


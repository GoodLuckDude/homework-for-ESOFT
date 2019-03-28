function dummySegmentTree(array, fn, N) {
  return function(from, to){
    let result = N;
    for (let i = from; i < to; i++) {
      result = fn(result, array[i]);
    }
    return result;
  }
}

function create(array, fn, N) {
  return function(from, to) {
    
    if(Array.isArray(array[0])) {
      return function(l, r) {
        var newAr = array.map(function(item, index){
          if (index < from || index > to) {return N}
          return create(item, fn, N)(l, r)
        });
        return newAr.reduce(function(result, current){
            return fn(result, current)
          }, N)
      }





    } else {
     return dummySegmentTree(array, fn, N)(from, to)
    }


  }
}
function fnToRecurce(a, b, fn, N){
  if (Array.isArray(a)) {
    var small;
    var big = function(a, b) {
      if ( a.length - b.length < 0 ) {
        small = b;
        return a
      }
      small = a;
      return b
    }(a, b)
    return big.map(function (item, i) {
      return fnToRecurce(item, small[i], fn, N)
    });
  } else {
    return fn(a, b);
  }
}

function buildTree(array, fn, N) {
  var tree = [];
  function build (pos, tl, tr) {
    if (tr < 0) {return}
    if (tl == tr) {
      if (Array.isArray(array[tl])) {
        tree[pos] = buildTree(array[tl], fn, N)
      } else {
      tree[pos] = array[tl];
      }
    } else {
      var tm = Math.floor((tl + tr) / 2);
      build(pos*2+1, tl, tm);
      build(pos*2+2, tm+1, tr);
      tree[pos] = fnToRecurce(tree[pos*2+1], tree[pos*2+2], fn, N)
    }
  };
  build(0, 0, array.length-1);
  return tree;
}

function segmentTree(array, fn, N) {
  var tree = buildTree(array,fn, N);
  function returnN(segment) {
    if (Array.isArray(segment)) {
      return [returnN(segment[0])]
    } else {
      return N
    }
  }
  return function fromTo(from, to){
    if (from == to) {return returnN(tree[0])}
    if (from < 0 || to > array.length || to < from) {throw new Error("This range is not valid")}
    function count (pos, tl, tr){
      if (to-1 < tl || from > tr || tr < 0) {return returnN(tree[0])}
      if (tl >= from && tr <= to-1) {return tree[pos]}
      var tm = Math.floor((tl + tr) / 2);
      return fnToRecurce(count(pos*2+1, tl, tm), count(pos*2+2, tm+1, tr), fn, N)
    };
    result = count(0, 0, array.length-1);
    if (Array.isArray(result)) {
      tree = result;
      return fromTo;
    } else {
      return result
    }

  };
};


function recursiveSegmentTree(array, fn, N) {
  return segmentTree(array, fn, N)  
}

var ar = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]

var eee = [ 
  [136, 60, 76, 28, 32, 36, 40]
  [36, 14, 22, 6, 8, 10, 12],
  [100, 46, 54, 22, 24, 26, 28],
  [10, 3, 7, 1, 2, 3, 4],
  [26, 11, 15, 5, 6, 7, 8],
  [42, 19, 23, 9, 10, 11, 12],
  [58, 27, 31, 13, 14, 15, 16],
];
var g = segmentTree(ar, sum, 0);
g = g(0, 2)(0, 2);
g = g(0, 2);

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


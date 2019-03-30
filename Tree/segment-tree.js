function dummySegmentTree(array, fn, N) {
  return function(from, to){
    let result = N;
    for (let i = from; i < to; i++) {
      result = fn(result, array[i]);
    }
    return result;
  }
}

function fnToRecurce(a, b, fn, N){
  if (Array.isArray(a)) {
    var small;
    var big = function(a, b) {
      if ( a.length - b.length > 0 ) {
        small = b;
        return a
      }
      small = a;
      return b
    }(a, b)
    var newAr = big.map(function (item, i) {
      if (!small[i]) {return item}
      var result = fnToRecurce(item, small[i], fn, N);
      return result;
    });
    return newAr
  } else {
    var answer = fn(a, b);
    return  answer
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
    if (Array.isArray(segment[0])) {
      var newN = [];
      for (let i = 0; i < segment[0].length; i++){
        newN.push(returnN(segment[0]))
      }
      return newN
    } else {
      return N
    }
  }
  function newTree(tree){
    function fromTo(from, to){
      if (from == to) {return returnN(tree)}
      if (from < 0 || to > array.length || to < from) {throw new Error("This range is not valid")}
      function count (pos, tl, tr){
        if (to-1 < tl || from > tr || tr < 0) {return returnN(tree)}
        if (tl >= from && tr <= to-1) {return tree[pos]}
        var tm = Math.floor((tl + tr) / 2);
        return fnToRecurce(count(pos*2+1, tl, tm), count(pos*2+2, tm+1, tr), fn, N)
      };
      result = count(0, 0, (tree.length-1)/2);
      if (Array.isArray(result)) {
        return newTree(result);
      } else {
        return result
      }
    }
    return fromTo
  }
  return newTree(tree)
};


function recursiveSegmentTree(array, fn, N) {
  return segmentTree(array, fn, N)
}

function getElfTree(array) {
  return recursiveSegmentTree(array, sum, 0);
}

function assignEqually(tree, wishes, stash, elves, gems, week) {

  // if heven't new gems { return {} }
  //else {
  sumElvesGems = tree(0, allElves.length)(0, allGems.length)(0, week);
  avarageAmountGems = Math.ceil(sumElvesGems/allElves.length-1);
  for(let i = 0; i < allElves.length; i++) {
    if ( tree(i, i+1)(0, allGems.length)(0, week) < avarageAmountGems ) {
      //add new gem (stash.key[0]) to Elf[i]
      //decrease stash.key[0] if == 0 => delete stash.key[0]
    };
  }
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


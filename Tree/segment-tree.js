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


























  // var result;
  // if (!Array.isArray(array[0])) {
  //   return dummySegmentTree(array, fn, N)
  // }
  
  // return(function(from, to) {
  //   return function (l, r) {
  //     var answer = N;
  //     for (let i = from; i < to; i++) {
  //       answer = fn(dummySegmentTree(array[i], fn, N)(l, r), answer)
  //     }
  //     return answer
  //   }
  // })
  }
}


var a = [ 
  [0, 3, 5],
  [1, 3, 5],
  [1, 3, 5]
];

var j = create(a, mul, 1);
alert (j(0, 3)(0,3));


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
  return create(array, fn, N);
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


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
    if (big.length == 0) {big.push(N)}
    if (small.length == 0) {small.push(N)}
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

function returnN(segment, N) {
  if (Array.isArray(segment[0])) {
    var newN = [];
    for (let i = 0; i < segment[0].length; i++){
      newN.push(returnN(segment[0], N))
    }
    return newN
  } else {
    return N
  }
}

function segmentTree(array, fn, N) {
  var tree = buildTree(array,fn, N);
  function newTree(tree){
    function fromTo(from, to){
      if (from == to) {return returnN(tree, N)}
      if (from < 0 || to > (tree.length+1)/2 || to < from) {throw new Error("This range is not valid")}
      function count (pos, tl, tr){
        if (to-1 < tl || from > tr || tr < 0) {return returnN(tree, N)}
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
  var assignment = {};
  var whoNeed;
  var idxWhoNeed;
  var minGemsCount = Infinity;
  var keysOfStash;
  var currentAmountGems = [];                  // [i] = amount of elf's (elves[i]) gems

  function findWhoNeed() {
    for (let i = 0; i < elves.length; i++) {
      if (currentAmountGems[i] <= minGemsCount) {
        minGemsCount = currentAmountGems[i];
        whoNeed = elves[i];
        idxWhoNeed = i;
      }
    }
  }
  function createAssignment() {
    findWhoNeed();
    keysOfStash = Object.keys(stash);
    if (keysOfStash.length > 0) {
      currentAmountGems[idxWhoNeed] += 1;
      if(!assignment[whoNeed]) { assignment[whoNeed] = {} }
      stash[keysOfStash[0]] -= 1;
      if (assignment[whoNeed][keysOfStash[0]]) {
        assignment[whoNeed][keysOfStash[0]] += 1
      } else {
        assignment[whoNeed][keysOfStash[0]] = 1
      }
      if (stash[keysOfStash[0]] == 0) { delete stash[keysOfStash[0]] }
      minGemsCount++;
      createAssignment();
    }
  }
  for (let i = 0; i < elves.length; i++) {      //counting of elves's gems
    let count = tree(i, i+1)(0, gems.length)(0, week);
    currentAmountGems.push(count)
  }
  createAssignment();
  return assignment;
}


function assignAtLeastOne(tree, wishes, stash, elves, gems, week) {
  var assignment = {};
  var i = 0;

  function createAssignment() {
    var keysOfStash = Object.keys(stash);
    if (keysOfStash.length == 0) {return}
    if (!assignment[elves[i]]) {
      assignment[elves[i]] = {};
      assignment[elves[i]][keysOfStash[0]] = 1;
    } else if ( !assignment[elves[i]][keysOfStash[0]] ) {
      assignment[elves[i]][keysOfStash[0]] = 1;
    } else {
      assignment[elves[i]][keysOfStash[0]] += 1;
    }
    stash[keysOfStash[0]] -= 1;
    if(stash[keysOfStash[0]] == 0) {delete stash[keysOfStash[0]]}
    i++;
    if (i == elves.length){i = 0}
    createAssignment();
  }

  createAssignment();
  return assignment;
}

function assignPreferredGems(tree, wishes, stash, elves, gems) {
  var assignment = {};
  var whoNeed;
  var idxWhoNeed;
  var keysOfStash;
  function findWhoNeed() {
    keysOfStash = Object.keys(stash);
    let idx = gems.indexOf(keysOfStash[0]);
    let maxWishes = -Infinity;
    wishes.forEach(function(item, i, array) {
      if (item[idx] >= maxWishes) {
        idxWhoNeed = i;
        whoNeed = elves[i];
        maxWishes = item[idx];
      }
    });
  }
  function createAssignment() {
    findWhoNeed();
    keysOfStash = Object.keys(stash);
    if (keysOfStash.length > 0) {
      if(!assignment[whoNeed]) { assignment[whoNeed] = {} }
      stash[keysOfStash[0]] -= 1;
      if (assignment[whoNeed][keysOfStash[0]]) {
        assignment[whoNeed][keysOfStash[0]] += 1
      } else {
        assignment[whoNeed][keysOfStash[0]] = 1
      }
      if (stash[keysOfStash[0]] == 0) { delete stash[keysOfStash[0]] }
      createAssignment();
    }
  }
  createAssignment();

  return assignment;
}

function nextState(state, assignment, elves, gems) {
  var keysAsnt = Object.keys(assignment);
  var elf;
  var gem;
  var amount;
  var state = state;
  function addNewParams(key) {
    elf = elves.indexOf(key);
    var keysOfGems = Object.keys(assignment[key]);
    for (let i = 0; i < keysOfGems.length; i++) {
      gem = gems.indexOf(keysOfGems[i]);
      amount = assignment[key][keysOfGems[i]];
      state[elf][gem].pop();
      state[elf][gem].push(amount);
    }
  }

  state.forEach(function(item, i){      //add 0 to state
    item.forEach(function(item) {
      item[item.length] = 0;
    })
  });

  for (let i = 0; i < keysAsnt.length; i++) {
    addNewParams(keysAsnt[i])
  }
  
  return state;
}

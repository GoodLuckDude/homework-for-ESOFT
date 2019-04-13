//Дерево через создание одномерных деревьев посе чего комбинация их через dummy.

function dummySegmentTree(array, fn, N) {
  return function(from, to){
    let result = N;
    for (let i = from; i < to; i++) {
      result = fn(result, array[i]);
    }
    return result;
  }
}

function sqOf2(array) {
  let sq = 1;
  while(sq < array.length) {
    sq *= 2;
  }
  let dif = sq - array.length;
  for (let i = dif; i > 0; i--){
    array.push(returnN(array, 0))
  }
}

function fnToRecurce(a, b, fn, N){
  if (Array.isArray(a)) {
    return a.map(function (item, i) {
      return fnToRecurce(item, b[i], fn, N);
    });
  } else {
    return fn(a, b);
  }
}

function buildTree(arr, fn, N) {
  var array = arr;
//  sqOf2(array);
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

function returnN(tree, N){
  if (Array.isArray(tree[0])){
    return tree[0].map(() => {
      return returnN(tree[0], N);
    })
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
        if (tr < from || tl > to-1) {return returnN(tree, N)}
        if (tl >= from && tr < to) {return tree[pos]}
        var tm = Math.floor((tl + tr) / 2);
        return fnToRecurce(count(pos*2+1, tl, tm), count(pos*2+2, tm+1, tr), fn, N);
      };
      var result = count(0, 0, (tree.length-1)/2);
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

function addAssignmentPosition(assignment, elf, gem, amount) {
  if(!assignment[elf]) { assignment[elf] = {} };
  if(!assignment[elf][gem]) { assignment[elf][gem] = 0 }
  assignment[elf][gem] += amount;
}

function assignEqually(tree, wishes, stash, elves, gems, week) {
  var assignment = {};
  // var gemsOfStash = Object.keys(stash);
  // let quantitiesOfGems = [];

  // elves.forEach((elf, indxOfElf) => {
  //   quantitiesOfGems.push( tree(indxOfElf, indxOfElf + 1)(0, gems.length)(0, week) );
  // })

  // gemsOfStash.forEach((gem) => {
  //   for(let i = 0; i < stash[gem]; i++) {
  //     let elfLoser;
  //     let currentMinAmount = +Infinity;

  //     quantitiesOfGems.forEach((gemsOfElf, indxOfElf) => {
  //       if (gemsOfElf < currentMinAmount) {
  //         currentMinAmount = gemsOfElf;
  //         elfLoser = elves[indxOfElf];
  //       }
  //     })
      
  //     quantitiesOfGems[elves.indexOf(elfLoser)]++;
  //     addAssignmentPosition(assignment, elfLoser, gem, 1);
  //   }
  // })

  // return assignment














  var whoNeed;
  var idxWhoNeed;
  var minGemsCount = Infinity;
  var gemsOfStash;
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
    gemsOfStash = Object.keys(stash);
    if (gemsOfStash.length > 0) {
      currentAmountGems[idxWhoNeed] += 1;
      if(!assignment[whoNeed]) { assignment[whoNeed] = {} }
      stash[gemsOfStash[0]] -= 1;
      if (assignment[whoNeed][gemsOfStash[0]]) {
        assignment[whoNeed][gemsOfStash[0]] += 1
      } else {
        assignment[whoNeed][gemsOfStash[0]] = 1
      }
      if (stash[gemsOfStash[0]] == 0) { delete stash[gemsOfStash[0]] }
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
  var gemsOfStash = Object.keys(stash);
  var indxOfElf = 0;

  gemsOfStash.forEach((gem) => {
    for (let i = 0; i < stash[gem]; i++, indxOfElf++) {
      addAssignmentPosition(assignment, elves[indxOfElf], gem, 1)
      if(indxOfElf == elves.length-1) {indxOfElf = 0}
    }
  })

  return assignment;
}

function assignPreferredGems(tree, wishes, stash, elves, gems) {
  var assignment = {};
  var gemsOfStash = Object.keys(stash);

  gemsOfStash.forEach((gem) => {
    let elf;
    let maxWish = -Infinity;
    let indxOfGem = gems.indexOf(gem);
    
    wishes.forEach((wish, indxOfElf) => {
      if (wish[indxOfGem] < maxWish) {return}
      maxWish = wish[indxOfGem];
      elf = elves[indxOfElf];
    })

    addAssignmentPosition(assignment, elf, gem, stash[gem]);
  })

  return assignment;
}

function nextState(state, assignment, elves, gems) {
  var keysAssig = Object.keys(assignment);
  var elf;
  var gem;
  var amount;

  function addNewParam(key) {
    elf = elves.indexOf(key);
    var keysOfGems = Object.keys(assignment[key]);
    for (let i = 0; i < keysOfGems.length; i++) {
      gem = gems.indexOf(keysOfGems[i]);
      amount = assignment[key][keysOfGems[i]];
      state[elf][gem].pop();
      state[elf][gem].push(amount);
    }
  }

  state.forEach(function(elf){      //add 0 to state
    elf.forEach(function(gem) {
      gem[gem.length] = 0;
    })
  });

  for (let i = 0; i < keysAssig.length; i++) {
    addNewParam(keysAssig[i])
  }
  
  return state;
}

function delayFn(ms, fn) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fn()), ms);
  });
}

function drawElf(elf) {
  let lt, lm, lb, rt, rm, rb;

  if (elf.stance[0] == 1) {
    rt = '/';
    rm = ' ';
  } else {
    rt = ' ';
    rm = '>';
  }

  if (elf.stance[1] == 1) {
    lt = '\\';
    lm = ' ';
  } else {
    lt = ' ';
    lm = '<';
  }

  if (elf.stance[2] == 1) {
    rb = '/';
  } else {
    rb = '\\';
  }

  if (elf.stance[3] == 1) {
    lb = '\\';
  } else {
    lb = '/';
  }

  return {
    head: lt + elf.head + rt,
    torso: lm + '(   )' + rm,
    legs: ' ' + lb + '   ' + rb + ' '
  }
}

function display(text) {
  dancefloor.innerText = text;
}

function drawElves(elves) {
  let space = "  ";
  let elfPictures = elves.map(drawElf);
  let top = elfPictures.map((elf) => elf.head).join(space);
  let middle = elfPictures.map((elf) => elf.torso).join(space);
  let bottom = elfPictures.map((elf) => elf.legs).join(space);
  return top + '\n' + middle + '\n' + bottom;
}

function displayElves(elves) {
  var i, j, chunkSize = 8;
  let text = '';

  for (i = 0, j = elves.length; i < j; i += chunkSize) {
    text += drawElves(elves.slice(i, i + chunkSize)) + '\n\n';
  }

  display(text);
}

let shownGems = [];
function drawGem(gem) {
  showcase.innerText = shownGems.slice().reverse().slice(0, 3).join(', ');
  currentGem.innerText = gem;
  shownGems.push(gem);
}

getDance().reduce((gemPromise, gem) => {
  return gemPromise.then((elvesPromises) => {
    return delayFn(gem[0], () => {
      drawGem(gem[1]);
      return continueDance(elvesPromises, gem[1]);
    });
  });
}, Promise.resolve(elves.map(elf => Promise.resolve(elf))));


let redrawIntervalMs = 50;
setInterval(function () {
  displayElves(getElves());
}, redrawIntervalMs);
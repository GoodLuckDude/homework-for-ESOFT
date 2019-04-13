// Это ваш танец: через какой промежуток времени показать какую драгоценность
let dance = [
  [5000, allGems[40]],
  [1400, allGems[23]],
  [700, allGems[24]],
  [700, allGems[33]],
  [700, allGems[18]],
  [700, allGems[19]],
  [700, allGems[20]],
  [700, allGems[33]],
  [700, allGems[18]],
  [700, allGems[19]],
  [700, allGems[20]],
  [700, allGems[18]],
  [700, allGems[8]],
  [700, allGems[8]],
  [700, allGems[8]],
  [700, allGems[8]],
  [700, allGems[8]],
  [700, allGems[33]],
  [700, allGems[39]],
];

// Это ваша танцевальная группа
let elves = [{
  name: allElves[0],
  head: '(ᵔᴗᵔ)',
  danceSpeed: 200,
  stance: [0, 1, 0, 0],
  favouriteGems: [allGems[8]],
  dislikedGems: [allGems[1]]
},
{
  name: allElves[1],
  head: '(>_<)',
  danceSpeed: 200,
  stance: [0, 0, 1, 0],
  favouriteGems: [allGems[8]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[2],
  head: '(=_=)',
  danceSpeed: 250,
  stance: [1, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[3],
  head: "('_')",
  danceSpeed: 200,
  stance: [0, 0, 0, 1],
  favouriteGems: [allGems[8]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[4],
  head: "(ᵔωᵔ)",
  danceSpeed: 200,
  stance: [1, 1, 0, 0],
  favouriteGems: [allGems[8]],
  dislikedGems: [allGems[0]]
}];

// Эта функция должна вернуть список эльфов для отрисовки
function getElves() {
  return elves;
}

// Эта функция должна вернуть танец для отрисовки
function getDance() {
  return dance;
}
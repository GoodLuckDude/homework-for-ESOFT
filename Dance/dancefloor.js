// Это ваш танец: через какой промежуток времени показать какую драгоценность
let dance = [
  [4000, allGems[0]],
  [4000, allGems[0]],
  [4000, allGems[0]],
  [4000, allGems[allGems.indexOf("Гиацинт")]],
];

// Это ваша танцевальная группа
let elves = [{
  name: allElves[0],
  head: '(ᵔᴗᵔ)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[0]],
  dislikedGems: [allGems[1]]
},
{
  name: allElves[1],
  head: '(>_<)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[2],
  head: '(=_=)',
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[3],
  head: "('_')",
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
  dislikedGems: [allGems[0]]
},
{
  name: allElves[4],
  head: "(ᵔωᵔ)",
  danceSpeed: 200,
  stance: [0, 0, 0, 0],
  favouriteGems: [allGems[1]],
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
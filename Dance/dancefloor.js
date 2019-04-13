// Это ваш танец: через какой промежуток времени показать какую драгоценность
let dance = [
  [2500, allGems[40]],
  [1000, allGems[23]],
  [1300, allGems[24]],
  [1900, allGems[26]],
  [10, allGems[33]],
  [1000, allGems[24]],
  [1500, allGems[23]],
  [1300, allGems[26]],
  [10, allGems[33]],
  [400, allGems[27]],
  [900, allGems[30]],
  [10, allGems[27]],
  [10, allGems[30]],

  [1500, allGems[25]],
  [2900, allGems[27]],
  [1300, allGems[30]],

  [1300, allGems[31]],

  [600, allGems[24]],
  [100, allGems[24]],
  [100, allGems[27]],
  [100, allGems[30]],



  [600, allGems[8]],
  [600, allGems[8]],
  [600, allGems[8]],
  [10, allGems[8]],
  [600, allGems[8]],
  [600, allGems[8]],
  [600, allGems[8]],
  [10, allGems[8]],
  [10, allGems[33]],
  [40, allGems[28]],
  [10, allGems[33]],
  [300, allGems[29]],
  [10, allGems[33]],
  [40, allGems[28]],
  [10, allGems[33]],
  [10, allGems[37]],
  [600, allGems[8]],
  [600, allGems[8]],
  [600, allGems[8]],
  [10, allGems[8]],
  [600, allGems[8]],
  [600, allGems[8]],
  [600, allGems[8]],
  [600, allGems[8]],
  [10, allGems[8]],
  [600, allGems[8]],
  [600, allGems[8]],
  [600, allGems[8]],
  [10, allGems[8]],
  [10, allGems[33]],
  [10, allGems[36]],
  [100, allGems[24]],
  [300, allGems[24]],

  [1000, allGems[39]],
];

// Это ваша танцевальная группа
let elves = [{
  name: allElves[0],
  head: '(ᵔᴗᵔ)',
  danceSpeed: 200,
  stance: [0, 1, 0, 0],
  favouriteGems: [allGems[0]],
  dislikedGems: [allGems[8], allGems[28]]
},
{
  name: allElves[1],
  head: '(>_<)',
  danceSpeed: 200,
  stance: [0, 0, 1, 0],
  favouriteGems: [allGems[0]],
  dislikedGems: [allGems[8], allGems[29]]
},
{
  name: allElves[2],
  head: '(=_=)',
  danceSpeed: 200,
  stance: [1, 0, 0, 0],
  favouriteGems: [allGems[0]],
  dislikedGems: [allGems[28], allGems[26]]//26
},
{
  name: allElves[3],
  head: "('_')",
  danceSpeed: 200,
  stance: [0, 0, 0, 1],
  favouriteGems: [allGems[0]],
  dislikedGems: [allGems[8], allGems[29]]
},
{
  name: allElves[4],
  head: "(ᵔωᵔ)",
  danceSpeed: 200,
  stance: [1, 1, 0, 0],
  favouriteGems: [allGems[0]],
  dislikedGems: [allGems[8], allGems[28]]
}];

// Эта функция должна вернуть список эльфов для отрисовки
function getElves() {
  return elves;
}

// Эта функция должна вернуть танец для отрисовки
function getDance() {
  return dance;
}
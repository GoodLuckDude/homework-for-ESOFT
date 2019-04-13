let allElves = ['Амариэ', 'Амдир', 'Амрас', 'Амрод', 'Амрот', 'Анайрэ', 'Ангрод', 'Аргон', 'Аредэль', 'Арвен', 'Аэгнор', 'Белег', 'Воронвэ', 'Галадон', 'Галадриэль', 'Галатиль', 'Галдор из Гаваней', 'Галдор из Гондолина', 'Галион', 'Гвиндор', 'Гилдор Инглорион', 'Гил-Галад (Эрейнион)', 'Гимли', 'Глорфиндел', 'Даэрон', 'Дэнетор', 'Дуилин', 'Идриль', 'Имин', 'Иминиэ', 'Ингвион', 'Ингвэ', 'Инглор', 'Индис', 'Иримэ', 'Карантир', 'Квеннар и-Онотимо', 'Келеборн', 'Келебриан', 'Келебримбор', 'Келегорм', 'Кирдан', 'Куруфин', 'Леголас из Гондолина', 'Леголас из Лихолесья', 'Линдир', 'Лютиэн Тинувиэль', 'Маблунг', 'Маглор', 'Махтан', 'Маэглин', 'Маэдрос', 'Мириэль Сериндэ', 'Митреллас', 'Неллас', 'Нерданэль', 'Нимлот', 'Нимродэль', 'Ольвэ', 'Ородрет', 'Орофер', 'Орофин', 'Пенголод', 'Пенлод', 'Рог', 'Румил из Лориэна', 'Румил из Тириона', 'Салгант', 'Саэрос', 'Тата', 'Татиэ', 'Тингол', 'Трандуил', 'Тургон', 'Феанор', 'Финарфин', 'Финвэ', 'Финдис', 'Финдуилас', 'Финголфин', 'Фингон', 'Финрод Фелагунд', 'Халдир', 'Эарвен', 'Эгалмот', 'Эктелион', 'Элеммакил', 'Эленвэ', 'Элу Тингол (Эльвэ)', 'Эльмо', 'Энелиэ', 'Энель', 'Энердил', 'Элладан и Элрохир', 'Элронд', 'Эльдалотэ', 'Эол', 'Эрестор'];
let allGems = ['Алмаз', 'Хризолит', 'Эвклаз', 'Корунд', 'Рубин', 'Сапфир', 'Тааффеит', 'Берилл', 'Аквамарин', 'Изумруд', 'Гелиодор', 'Морганит', 'Хризоберилл', 'Александрит', 'Шпинель', 'Гранаты', 'Демантоид', 'Цаворит', 'Спессартин', 'Пироп', 'Родолит', 'Альмандин', 'Кварц', 'Аметист', 'Цитрин', 'Горный хрусталь', 'Дымчатый кварц', 'Празиолит', 'Аметрин', 'Розовый кварц', 'Турмалин', 'Верделит', 'Индиголит', 'Параиба', 'Опал благородный', 'Опал огненный', 'Топаз', 'Танзанит', 'Циркон', 'Гиацинт', 'Андалузит'];
let = allMovements = [
  //leftHandUp, leftHandDown, rightHandUp, rightHandDown, leftLegOut, leftLegIn, rightLegOut, rightLegIn, handsUp, handsDown, legsOut, legsIn,
   doDrive, doWave, doFeint, doLeftSplit, doReverse, doReverse, doPinwheel];
// здесь реализуйте фигуры, команды

// Движение - это функция, которая принимает в качестве аргумента эльфа
// а возвращает Promise, который будет выполнен тогда, когда эльф выполнит
// указанное движение. Успешно выполненное движение должно зарезолвится снова
// в этого же эльфа с обновленной пастурой.

function leftHandUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [1, elf.stance[1], elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftHandDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [0, elf.stance[1], elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], 1, elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], 0, elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftLegOut(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], 1, elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftLegIn(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], 0, elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightLegOut(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], elf.stance[2], 1];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightLegIn(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], elf.stance[2], 0];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function handsUp(elf) {
return Promise.all( [leftHandUp(elf), rightHandUp(elf)] ).then(resolves => resolves[0])
}

function handsDown(elf) {
  return Promise.all( [leftHandDown(elf), rightHandDown(elf)] ).then(resolves => resolves[0])
}

function handsUpDown(elf) {
  return new Promise((resolve) => {
    handsUp(elf).then(handsDown).then(resolve)
    })
}

function legsOut(elf) {
  return Promise.all( [leftLegOut(elf), rightLegOut(elf)] ).then(resolves => resolves[0])
}
  
function legsIn(elf) {
  return Promise.all( [leftLegIn(elf), rightLegIn(elf)] ).then(resolves => resolves[0])
}

function doDrive(elf) {
  return new Promise((resolve) => {
    handsUpDown(elf).then(handsUpDown).then(resolve)
  })
}

function doMonkey(elf) {      //Горный хрусталь [25]
  return new Promise((resolve) => {
    leftHandUp(elf).then(rightHandUp).then(handsDown).then(resolve)
  })
}

function doBreakDance(elf) {      //Дымчатый кварц [26]
  return new Promise((resolve) => {
    rightLegIn(elf).then(leftLegIn).then(rightLegOut).then(leftLegOut).then(legsIn).then(legsOut).then(resolve)
  })
}

function doWave(elf) {
  return new Promise((resolve) => {
    leftHandUp(elf).then(rightHandUp).then(leftHandDown).then(rightHandDown).then(resolve)
  })
}

function doFeint(elf) {
  return new Promise((resolve) => {
    legsIn(elf).then(legsOut).then(resolve)
  })
}

function doLeftSplit(elf) {
  return new Promise((resolve) => {
    leftHandUp(elf).then(leftLegOut).then(resolve)
  })
}

function doRightSplit(elf) {
  return new Promise((resolve) => {
    rightHandUp(elf).then(rightLegOut).then(resolve)
  })
}

function doReverse(elf) {
  return new Promise((resolve) => {
    legsIn(elf).then(handsUp).then(legsOut).then(handsDown).then(resolve)
  })
}

function doPinwheel(elf) {
  return new Promise((resolve) => {
    leftLegOut(elf).then(leftHandUp).then(rightHandUp).then(rightLegOut).then(resolve)
  })
}

function startPosition(elf) {
  return Promise.all([handsDown(elf), legsOut(elf)]).then(resolves => resolves[0])
}

function finalPosition(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [1, 1, 2, 2];
      resolve(elf);
    }, elf.danceSpeed);
  });
  }
function pause(elf) {
  return new Promise((resolve) => {
    setTimeout(resolve(elf), elf.danceSpeed);
  });
}

function increaseSpeed(elf) {
  return new Promise((resolve) => {
    elf.danceSpeed *= .5;
    resolve(elf);
  });
}

function reduceSpeed(elf) {
  return new Promise((resolve) => {
    elf.danceSpeed *= 2;
    resolve(elf);
  });
}

function delay(value) {
  return new Promise((resolve) => {
    setTimeout(resolve(value), 300);
  });
}

function synchronization(elvesPromises) {
  return Promise.all(elvesPromises).then(() => elvesPromises)
}

function doFreestyle(elf) {
  let rand = 0 + Math.random() * (allMovements.length-1 + 1 - 0);
  rand = Math.floor(rand);
  return allMovements[rand](elf)
}

// Эта функция принимает в качестве аргумента эльфа и драгоценность, которая
// сейчас демонстрируется всем эльфам. Здесь нужно дать команду эльфу выполнить
// какую-то фигуру или команду и вернуть Promise
function displayGemToElf(elf, gem) {
  switch(gem) {
    case elf.favouriteGems[ elf.favouriteGems.indexOf(gem) ]:
      return handsUp(elf)

    case elf.dislikedGems[ elf.dislikedGems.indexOf(gem) ]:
      return handsDown(elf)

    case allGems[24]:
      return doDrive(elf)
    
    case allGems[23]:
      return doWave(elf)

    case allGems[22]:
      return doFeint(elf)

    case allGems[21]:
      return doRightSplit(elf)

    case allGems[20]:
      return doLeftSplit(elf)

    case allGems[19]:
      return doReverse(elf)

    case allGems[18]:
      return doPinwheel(elf)

    case allGems[40]:
      return startPosition(elf)

    case allGems[39]:
      return finalPosition(elf)

    case allGems[25]:
      return doMonkey(elf)

    case allGems[26]:
      return doBreakDance(elf)

    case allGems[27]:
      return handsUp(elf)

    case allGems[30]:
      return handsDown(elf)

    case allGems[31]:
      return legsIn(elf)

    case allGems[28]:
      return doMonkey(elf).then(doWave).then(doPinwheel)

    case allGems[29]:
      return doDrive(elf).then(doFeint).then(doWave).then(doReverse)

    case allGems[37]:
      return increaseSpeed(elf)

    case allGems[36]:
      return reduceSpeed(elf)

    case allGems[38]:
      return pause(elf)

    case allGems[33]:
      return 

    default:
      return doFreestyle(elf) 
  }
}


// Эта функция принимает в качестве аргумента танец всех эльфов - массив их Promis'ов,
// и драгоценность, которая сейчас демонстрируется всем эльфам.
// Возвращает также танец всех эльфов - массив их Promis'ов
function continueDance(elvesPromises, gem) {
  if (gem == allGems[33]) {
    return synchronization(elvesPromises).then(elvesPromises.map((elfPromise) => {
      return elfPromise.then(elf => {
        return displayGemToElf(elf, gem)
      })
    })) 
  }
  return elvesPromises.map((elfPromise) => {
    return elfPromise.then(elf => {
      return displayGemToElf(elf, gem)
    })
  })
}
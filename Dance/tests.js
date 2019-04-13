var listOfStance = [ [0, 0, 0, 0], [0, 0, 1, 1], [1, 1, 0, 0], [1, 1, 1, 1] ]

function Elf(stance) {
	this.danceSpeed = 10;
	this.stance = stance;
	this.favouriteGems = [];
	this.dislikedGems = [];
}

function createElves(listOfStance) {
	return listOfStance.map(stance => new Elf(stance))
}



describe("Эльф должен делать простые движения", function() {

	describe("Работать руками", function() {

		it("поднять/опустить левую руку", function(done) {

			let elf = new Elf([0, 0, 0, 0]);

			leftHandUp(elf).then((elf) => {
				expect(elf.stance).toEqual([1, 0, 0, 0]);
				done();
			})

			elf = new Elf([1, 0, 0, 0]);

			leftHandDown(elf).then((elf) => {
				expect(elf.stance).toEqual([0, 0, 0, 0]);
				done();
			})
		});

		it("поднять/опустить правую руку", function(done) {

			let	elf = new Elf([0, 0, 0, 0]);

			rightHandUp(elf).then((elf) => {
				expect(elf.stance).toEqual([0, 1, 0, 0]);
				done();
			})

			elf = new Elf([0, 1, 0, 0]);

			rightHandDown(elf).then((elf) => {
				expect(elf.stance).toEqual([0, 0, 0, 0]);
				done();
			})
		});
	});

	describe("Работать ногами", function() {

		it("выставить/собрать левую ногу", function(done) {

			let elf = new Elf([0, 0, 0, 0]);

			leftLegOut(elf).then((elf) => {
				expect(elf.stance).toEqual([0, 0, 1, 0]);
				done();
			})

			elf = new Elf([0, 0, 1, 0]);

			leftLegIn(elf).then((elf) => {
				expect(elf.stance).toEqual([0, 0, 0, 0]);
				done();
			})
		});

		it("выставить/собрать правую ногу", function(done) {

			let	elf = new Elf([0, 0, 0, 0]);

			rightLegOut(elf).then((elf) => {
				expect(elf.stance).toEqual([0, 0, 0, 1]);
				done();
			})

			elf = new Elf([0, 0, 0, 1]);

			rightLegIn(elf).then((elf) => {
				expect(elf.stance).toEqual([0, 0, 0, 0]);
				done();
			})

		});
	});

});

describe("функции-движения должны возвращать промисы, резолвящиеся в переданного эльфа, и выполнять нужные движения", function() {
	it("функция doDrive", function(done) {
		let elf = new Elf([0, 1, 1, 0]);
		let referenceElf = elf;

		doDrive(elf).then(elf => {
			expect(elf).toBe(referenceElf);
			expect(elf.stance).toEqual([0, 0, 1, 0]);
			done();
		})
	});

	it("функция doWave", function(done) {
		let elf = new Elf([0, 0, 1, 1]);
		let referenceElf = elf;

		doWave(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		})
	});

	it("функция doFeint", function(done) {
		let elf = new Elf([1, 0, 0, 1]);
		let referenceElf = elf;

		doFeint(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			expect(elf.stance).toEqual([1, 0, 1, 1]);
			done();
		})
	});

	it("функция doLeftSplit", function(done) {
		let elf = new Elf([0, 1, 0, 1]);
		let referenceElf = elf;

		doLeftSplit(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			expect(elf.stance).toEqual([1, 1, 1, 1]);
			done();
		})
	});
	
	it("функция doRightSplit", function(done) {
		let elf = new Elf([1, 0, 1, 0]);
		let referenceElf = elf;

		doRightSplit(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			expect(elf.stance).toEqual([1, 1, 1, 1]);
			done();
		})
	});

	it("функция doReverse", function(done) {
		let elf = new Elf([1, 0, 1, 0]);
		let referenceElf = elf;

		doReverse(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		})
	});
	
	it("функция doPinwheel", function(done) {
		let elf = new Elf([1, 0, 1, 0]);
		let referenceElf = elf;

		doPinwheel(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			expect(elf.stance).toEqual([1, 1, 1, 1]);
			done();
		})
	});

	it("функция startPosition", function(done) {
		let elf = new Elf([1, 0, 1, 0]);
		let referenceElf = elf;

		startPosition(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		})
	});

	it("функция finalPosition", function(done) {
		let elf = new Elf([0, 1, 0, 1]);
		let referenceElf = elf;

		finalPosition(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			expect(elf.stance).toEqual([1, 1, 2, 2]);
			done();
		})
	});

});

describe("Функция pause должна", function() {
	it("заставить эльфа сделать паузу, равную его danceSpeed", function(done) {
		let elf = new Elf([1, 1, 0, 0]);

		pause(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		})
	});

	it("вернуть промис, резолвящийся в переданного эльфа", function(done) {
		let elf = new Elf([0, 1, 0, 1]);
		let referenceElf = elf;

		pause(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			done();
		})
	});
});

describe("Функция increaseSpeed должна", function() {
	it("увеличить danceSpeed в 2 раза", function(done) {
		let elf = new Elf([1, 1, 0, 0]);
		let speed = elf.danceSpeed;

		increaseSpeed(elf).then((elf) => {
			expect(elf.danceSpeed).toEqual(speed * .5);
			done();
		})
	});

	it("вернуть промис, резолвящийся в переданного эльфа", function(done) {
		let elf = new Elf([0, 1, 0, 1]);
		let referenceElf = elf;

		increaseSpeed(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			done();
		})
	});
});

describe("Функция reduceSpeed должна", function() {
	it("уменьшить danceSpeed в 2 раза", function(done) {
		let elf = new Elf([1, 1, 0, 0]);
		let speed = elf.danceSpeed;

		reduceSpeed(elf).then((elf) => {
			expect(elf.danceSpeed).toEqual(speed * 2);
			done();
		})
	});

	it("вернуть промис, резолвящийся в переданного эльфа", function(done) {
		let elf = new Elf([0, 1, 0, 1]);
		let referenceElf = elf;

		reduceSpeed(elf).then((elf) => {
			expect(elf).toBe(referenceElf);
			done();
		})
	});
});

describe("эльф должен", function() {
	it("выполнять несколько движения последовательно", function(done) {
		let elf = new Elf([0, 1, 0, 1]);
		let referenceElf = elf;

		startPosition(elf).then(doDrive).then(doWave).then(doPinwheel).then((elf) => {
			expect(elf).toBe(referenceElf);
			expect(elf.stance).toEqual([1, 1, 1, 1]);
			done();
		})
	});

	it("поднимать руки при виде любимого гема", function(done) {
		let elf = new Elf([0, 0, 0, 0]);
		elf.favouriteGems.push(allGems[0]);
		let gem = allGems[0];

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0])
			done();
		})
	});

	it("игнорировать движение при виде любимого гема", function(done) {
		let elf = new Elf([0, 0, 0, 1]);
		elf.favouriteGems.push(allGems[18]);
		let gem = allGems[18];

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 1])
			done();
		})
	});

	it("опускать руки при виде нелюбимого гема", function(done) {
		let elf = new Elf([1, 1, 1, 0]);
		elf.dislikedGems.push(allGems[0]);
		let gem = allGems[0];

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 0])
			done();
		})
	});

	it("игнорировать движение при виде нелюбимого гема", function(done) {
		let elf = new Elf([1, 1, 0, 1]);
		elf.dislikedGems.push(allGems[18]);
		let gem = allGems[18];

		displayGemToElf(elf, gem).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 1])
			done();
		})
	});
});

describe("Функция synchronization должна", function() {
	it("вернуть что-то вменяемое", function(done) {
		let elf1 = new Elf([1, 1, 0, 0]);
		let elf2 = new Elf([1, 1, 0, 0]);
		let arrOfElvesPromises = [doDrive(elf1), doDrive(elf2)];

		synchronization(arrOfElvesPromises).then((elvesPromises) => {
			expect(elvesPromises).toBe(arrOfElvesPromises);
			done();
		})
	});
});
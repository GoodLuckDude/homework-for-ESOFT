var listOfStance = [ [0, 0, 0, 0], [0, 0, 1, 1], [1, 1, 0, 0], [1, 1, 1, 1] ]

function Elf(stance) {
	this.danceSpeed = 10;
	this.stance = stance;
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

describe("функция doDrive должна", function() {
	it("после выполнения опустить обе руки эльфа", function(done) {
		let elf = new Elf([0, 1, 1, 0])

		doDrive(elf).then(elf => {
			expect(elf.stance).toEqual([0, 0, 1, 0])
			done();
		})
	});
});

describe("функция doWave должна", function() {
	it("после выполнения опустить обе руки эльфа", function(done) {
		let elf = new Elf([0, 0, 1, 1])

		doWave(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1])
			done();
		})
	});
});

describe("функция doFeint должна", function() {
	it("после выполнения выставить обе ноги эльфа", function(done) {
		let elf = new Elf([1, 0, 0, 1])

		doFeint(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 1, 1])
			done();
		})
	});
});

describe("функция doLeftSplit должна", function() {
	it("после выполнения поднять левую руку и выставить левую ногу эльфа", function(done) {
		let elf = new Elf([0, 1, 0, 1])

		doLeftSplit(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 1, 1])
			done();
		})
	});
});

describe("функция doRightSplit должна", function() {
	it("после выполнения поднять правую руку и выставить правую ногу эльфа", function(done) {
		let elf = new Elf([1, 0, 1, 0])

		doRightSplit(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 1, 1])
			done();
		})
	});
});

describe("функция doReverse должна", function() {
	it("после выполнения поднять правую руку и выставить правую ногу эльфа", function(done) {
		let elf = new Elf([1, 0, 1, 0])

		doReverse(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1])
			done();
		})
	});
});

describe("функция doPinwheel должна", function() {
	it("после выполнения всё поднять и всё выставить", function(done) {
		let elf = new Elf([1, 0, 1, 0])

		doPinwheel(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 1, 1])
			done();
		})
	});
});
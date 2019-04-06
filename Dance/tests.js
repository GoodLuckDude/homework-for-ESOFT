describe("Эльф должен делать простые движения", function() {
	it("поднять левую руку", function(done) {

		elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 0, 0]);
			done();
		})
	});

	it("опустить левую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 0, 0, 0]
		}

		leftHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0])
			done();
		})
	});

	it("поднять правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 0, 0]);
			done();
		})
	});

	it("опустить правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 1, 0, 0]
		}

		rightHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0])
			done();
		})
	})

	it("отставить левую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftLegOut(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 0]);
			done();
		})
	});

	it("приставить левую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 0]
		}

		leftLegIn(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0])
			done();
		})
	})

	it("отставить правую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0]
		}

		rightLegOut(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 1]);
			done();
		})
	});

	it("приставить правую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 1]
		}

		rightLegIn(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0])
			done();
		})
	});
});

describe("функция doDrive должна", function() {
	it("после выполнения опустить обе руки эльфа", function(done) {
		let elf = {
			danceSpeed: 1000,
			stance: [1, 1, 0, 0]
		}

		doDrive(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0])
			done();
		})
	});
});

describe("функция doWave должна", function() {
	it("после выполнения опустить обе руки эльфа", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1]
		}

		doWave(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1])
			done();
		})
	});
});






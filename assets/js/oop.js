class foodProduct {
	constructor(title, category, brand, manufactureDate) {
		this._title = title;
		this._category = category;
		this._brand = brand;
		this._manufactureDate = new Date(manufactureDate);
	}
	get ageInDays() {
		return this.calcDate();
	}
	calcDate() {
		return Math.floor(
			(new Date() - this._manufactureDate) /
				(1000 * 60 * 60 * 24),
		);
	}
	getFullInfo() {}
}

let product = new foodProduct(
	"HLIB",
	"HLIB",
	"ZHYTNII",
	"2026-08-20",
);
console.log(product.ageInDays);

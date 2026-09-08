class FoodProduct {
	constructor(title, category, brand, manufactureDate) {
		this._title = title;
		this._category = category;
		this._brand = brand;
		this._manufactureDate = new Date(manufactureDate);
	}
	get ageInDays() {
		return Math.floor(
			(new Date() - this._manufactureDate) /
				(1000 * 60 * 60 * 24),
		);
	}

	getFullInfo() {
		return ` ${this._title} ${this._category} ${this._brand} \nКількість днів від дати виготовлення: ${product.ageInDays}`;
	}
}

const product = new FoodProduct(
	"Молоко",
	"2,5%",
	"Яготинське",
	"2026-08-20",
);
console.log(product.ageInDays);
console.log(product.getFullInfo());

class DiscountedProduct extends FoodProduct {
	constructor(
		title,
		category,
		brand,
		manufactureDate,
		maxDiscountLimit,
	) {
		super(title, category, brand, manufactureDate);
		this._maxDiscountLimit = maxDiscountLimit;
		this._currentDiscount = 0;
	}
	applyDiscount(percent) {
		if (percent > this._maxDiscountLimit)
			throw new Error(
				`Знижка не може перевищувати допустимий ліміт: ${maxDiscountLimit}`,
			);
		this._currentDiscount = percent;
		return true;
	}
	getFullInfo() {
		return `${super.getFullInfo()}\n Поточна знижка: ${this._currentDiscount} \n Максимальний ліміт знижки: ${this._maxDiscountLimit}`;
	}
}

const product2 = new DiscountedProduct(
	"Кефір",
	"1%",
	"Молокія",
	"2026-08-15",
	50,
);
console.log(product2.getFullInfo());

const roman = require("./index");

test('Функция должна вернуть число', () => {
	const type = typeof roman('I');

	expect(type).toBe('number');
});

test('Тест. romanInt: "I"', () => {
	const res = roman('I');

	expect(res).toBe(1);
});

test('Тест. romanInt: "C"', () => {
	const res = roman('C');

	expect(res).toBe(100);
});

test('Тест. romanInt: "X"', () => {
	const res = roman('X');

	expect(res).toBe(10);
});

test('Тест. romanInt: "D"', () => {
	const res = roman('D');

	expect(res).toBe(500);
});

test('Тест. romanInt: "B"', () => {
	const res = roman('B');

	expect(res).toBe(0);
});

test('Тест. romanInt: "L"', () => {
	const res = roman('L');

	expect(res).toBe(50);
});
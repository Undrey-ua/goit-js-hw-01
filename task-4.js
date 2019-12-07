const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let bucket;

const quantity = (prompt ('Введите количество'));
if (quantity === null) {
totalPrice = ('Отменено пользователем!');
} else if (quantity !== NaN) {
    totalPrice = (quantity * pricePerDroid);
}
console.log(totalPrice);

if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    const bucket = `Вы купили ${quantity} дроидов, на счету осталось ${credits-totalPrice} кредитов`;
    console.log(bucket);
}


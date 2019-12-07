const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let pwd = prompt ('Введите пароль');
if (pwd === ADMIN_PASSWORD) {
    message = ('Добро пожаловать!');
} else if (pwd === null) {
    message = ('Отменено пользователем!');
} else {
    message = ('Доступ запрещен, неверный пароль!');
}
console.log(message);
alert(message);

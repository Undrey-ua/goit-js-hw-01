let cost;
const country = (prompt ('Введите страну доставки'));


switch (country.toLowerCase()) {
    case 'китай':
        cost = 100;
        break;

    case 'чили':
        cost = 25;
        break;
    case 'австралия':
        cost = 170;
        break;
    case 'индия':
        cost = 80;
        break;
    case 'Ямайка':
        cost = 120;
        break;      
    default:
    console.log('В вашей стране доставка не доступна');
    alert('В вашей стране доставка не доступна');
    break;
    
}
console.log(`Доставка в ${country} будет стоить ${cost} кредитов`); 



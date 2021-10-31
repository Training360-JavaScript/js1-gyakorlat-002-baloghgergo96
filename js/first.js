/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

const array = [10, 23, 45, 32, 21];
const numbers = array.map(item => item *1.27);
const brutto = parseInt(numbers.reduce((previousValue, currentValue) => previousValue + currentValue));
console.log(brutto);
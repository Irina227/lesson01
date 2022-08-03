const n = +prompt('Введите число')
switch (true){
  case n > 10:
    console.log('n > 10');
    break
  case n <= 10:
    console.log('n <= 10');
    break
  default:
    console.log('Не верно ни одно значение');
}
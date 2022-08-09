'use strict';

/*УРОК 4*/

//1
/*let screenPrice = +prompt('Сколько будет стоить данная работа?','50000');
let servicePrice1 = +prompt('Сколько это будет стоять?');
let servicePrice2 = +prompt('Сколько это будет стоять?');

const countSum = function(screenPrice, servicePrice1, servicePrice2){
    let allServicePrices = screenPrice + servicePrice1 + servicePrice2
    console.log(allServicePrices);
}
countSum(screenPrice, servicePrice1, servicePrice2)*/


//2
/*let screenPrice = +prompt('Сколько будет стоить данная работа?','50000');  
let allServicePrices = 75000;

const getFullPrice = function(screenPrice, allServicePrices){
    let fullPrice = screenPrice + allServicePrices
    console.log(fullPrice)
}
getFullPrice(screenPrice, allServicePrices)*/

//3
/*let title = prompt('Как называется Ваш проект?');

const getTitle = function(title){
    if (!title) return title;
    console.log(title[0].toUpperCase() + title.slice(1));
}
getTitle(title)*/

//4
/*let screenPrice = +prompt('Сколько будет стоить данная работа?','50000');
let servicePrice1 = +prompt('Сколько это будет стоять?');
let servicePrice2 = +prompt('Сколько это будет стоять?');
let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let price = 50;
const getServicePercentPrices = function (fullPrice, price){
    let servicePercentPrice = fullPrice / 100 * price
    console.log(servicePercentPrice)
}
getServicePercentPrices(fullPrice, price)*/
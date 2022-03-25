import * as MenuManger from './MenuManger.js';
import { FoodCard } from './FoodCard.js'

export const FoodList = () => {
    const lunchTarget = document.querySelector(".main_lunch")
    const drinkTarget = document.querySelector(".main_drink")
    const appTarget =document.querySelector(".main_app")
    const dessertTarget =document.querySelector(".main_dessert")
    let lunchHTMLString;
    let drinkHTMLString;
    let appHTMLString;
    let dessertHTMLString;

    MenuManger.getFoods()
    .then(foodArray => {
        let lunchArr=[];
        let dessertArr = [];
        let drinkArr = [];
        let appArr = [];
        foodArray.map(food => {
            if(food.menuId === 1){
                lunchArr.push(food)
        } else if(food.menuId === 2){
            drinkArr.push(food)
        }else if(food.menuId === 3){
            appArr.push(food)
        }else if(food.menuId === 4){
            dessertArr.push(food)
        }
    })
       
        lunchArr.sort((a, b) => (a.price > b.price) ? 1 : -1)
        drinkArr.sort((a, b) => (a.price > b.price) ? 1 : -1)
        appArr.sort((a, b) => (a.price > b.price) ? 1 : -1)
        dessertArr.sort((a, b) => (a.price > b.price) ? 1 : -1)

        lunchHTMLString = `<h2>Lunch</h2>`
        lunchHTMLString += `<div class="row">`
        lunchHTMLString += lunchArr.map(food => FoodCard(food)).join('')
        lunchHTMLString += `</div>`

        drinkHTMLString = `<h2>Drinks</h2>`
        drinkHTMLString += `<div class="row">`
        drinkHTMLString += drinkArr.map(food => FoodCard(food)).join('')
        drinkHTMLString += `</div>`

        appHTMLString = `<h2>Appetizers</h2>`
        appHTMLString += `<div class="row">`
        appHTMLString += appArr.map(food => FoodCard(food)).join('')
        appHTMLString += `</div>`

        dessertHTMLString = `<h2>Desserts</h2>`
        dessertHTMLString += `<div class="row">`
        dessertHTMLString += dessertArr.map(food => FoodCard(food)).join('')
        dessertHTMLString += `</div>`

        lunchTarget.innerHTML = lunchHTMLString;
        drinkTarget.innerHTML = drinkHTMLString;
        appTarget.innerHTML = appHTMLString;
        dessertTarget.innerHTML = dessertHTMLString;
    })
}

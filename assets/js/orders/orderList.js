//this is going to fetch the orders from the local database
import {OrderCard } from "./orders.js"

 
const getOrders = () => {
    return fetch(`http://localhost:8088/orders`)
    .then(response => response.json())
}

export const createAside = () => {
    getOrders().then(orderArray => {
        let htmlPosition= document.querySelector("aside") 
        let htmlString =""
        for(let order of orderArray){
            htmlString += `${OrderCard(order)}`
        }
        htmlPosition.innerHTML = htmlString;
    })
}


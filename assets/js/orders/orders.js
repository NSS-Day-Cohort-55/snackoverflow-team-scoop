// "orders": [
//     {
//         "userId": 1,
//         "notes":"Please drop it off at the gate. I have a guard dog",
//         "timestamp":1648225439397,
//         "isPickedUp":false
//     }


export const OrderCard = (orderObj) => {
    return `
    <div class="aside_orderCard">
        <div class="orderCard_user">${orderObj.user}</div>
        <div class="orderCard_notes">${orderObj.notes}</div> 
        <div class="orderCard_time">${orderObj.time}</div>
        <div class="orderCard_pickedUp">${orderObj.isPickedUp}</div>
    </div>
    `
}
// let loggedInUser = {
//     id: 1,
//     name: "Bryan",
//     email: "bryan@bn.com",
//     isAdmin: true
//   }
let loggedInUser = {};

export const getLoggedInUser = () => {
    return loggedInUser;
}

export const logoutUser = () => {
    sessionStorage.removeItem("SOuser")
    loggedInUser = {}
}


export const loginUser = (userObj) => {
    return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
    .then(response => response.json())
    .then(parsedUser => {
      //is there a user?
      if (parsedUser.length > 0){
        setLoggedInUserSessionStorage(parsedUser[0]);
        return getLoggedInUser();
      }else {
        //no user
        return false;
      }
    })
}

export const setLoggedInUserSessionStorage = (userObj) => {
  sessionStorage.setItem("SOuser", JSON.stringify(userObj))
  loggedInUser = userObj;
}

export const setLoggedInUserAppState = (userObj) => {
  loggedInUser = userObj;
}

// This should take the values the person put in the register field anf turn it into an object
// const contentElement = document.querySelector("main");




export const createUser = (userObj) => {
  return fetch("http://localhost:8088/users", {
      method: "POST", 
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)     
  })
      .then(response => response.json());
}


  



// export const registerUser = (userObj) => {
//   return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
//   .then(response => response.json())
//   .then(parsedUser => {
//     //is there a user?
//     if (parsedUser.length > 0){
//       setLoggedInUserSessionStorage(parsedUser[0]);
//       return getLoggedInUser();
//     }else {
//       //no user
//       return false;
//     }
//   })
// }
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();
//     }, 3000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task 2");
//        resolve() 
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: 'Jaleed',
//             email:"chai@example.com"
//         });
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'Jaleed', password: "111222"});
        } else{
            reject('Error Something went wrong')
        }
    },0)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);   
}).finally(function(){
    console.log("The Promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'Syed', password: "222"});
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }   
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response =  await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUsers();

fetch('https://api.github.com/users/syedjaleed')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})



//// Fetchh


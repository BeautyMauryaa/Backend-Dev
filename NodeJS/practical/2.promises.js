// 5\. Create a function `getUser()` that accepts a callback and returns user data after 2 seconds.
function getUser(callback){
    setTimeout(()=>{
        callback(null,{id:1,name:"Alice"});
    },2000);
}

getUser((err,user)=>{
    if(err) console.error(err);
    else console.log("user fetched via callback",user);
});

// 6\. Create a Promise that resolves with `"Data received"` after 2 seconds.
// 7\. Create a Promise that rejects with `"Something went wrong"` and handle the error using `.catch()`.
const dataPromise=new Promise((resolve)=>{
    setTimeout(()=>resolve("data received"),2000);
});
dataPromise.then(res=>console.log(res));

const errorPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("something went wrong"),2000);
});
errorPromise.catch(err=>console.error("caught error:",err));


// 8\. Convert a callback-based function into a Promise-based function.
function getUserPromise(){
    return new Promise((resolve,reject)=>{
        getUser((err,data)=>{
            if(err) reject(err);
            else resolve(data);
        });
    });
}
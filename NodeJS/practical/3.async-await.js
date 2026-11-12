// 9\. Create an async function that fetches user data using `await`.
// 10\. Use `try...catch` to handle an error from a rejected Promise.
async function main(){
    try{
        const data=await new Promise((resolve)=>{
            setTimeout(()=>resolve("fetched async data"),1000);
        });
        console.log(data);
    }catch(error){
        console.error("error:",error);
    }
}




// 11\. Create a function that fetches two users sequentially using `await`.
// 12\. Fetch two independent pieces of data concurrently using `Promise.all()`.

async function fetchConcurrent(){
    const p1=Promise.resolve("Data 1");
    const p2=new Promise(resolve=>setTimeout(()=>resolve("data 2"),1000));
    const result=await Promise.all([p1,p2]);
    console.log("Concurrent results:", result);
}
main();
fetchConcurrent();